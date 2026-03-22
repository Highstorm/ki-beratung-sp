"use server";

import { Client } from "@notionhq/client";
import { Resend } from "resend";
import { headers } from "next/headers";

const SITE_NAME = "KI-Beratung";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot
  if (formData.get("website_url")) {
    return { success: true, message: "Vielen Dank für Ihre Nachricht!" };
  }

  // Rate limiting
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= 3) {
        return {
          success: false,
          message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
        };
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
  }

  // Validation
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const anliegen = formData.get("anliegen")?.toString().trim();
  const nachricht = formData.get("nachricht")?.toString().trim();

  if (!name || !email || !anliegen || !nachricht) {
    return { success: false, message: "Bitte füllen Sie alle Felder aus." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }

  try {
    // Notion
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Anliegen: { select: { name: anliegen } },
        Nachricht: { rich_text: [{ text: { content: nachricht.slice(0, 2000) } }] },
        Website: { select: { name: SITE_NAME } },
        Datum: { date: { start: new Date().toISOString().split("T")[0] } },
      },
    });

    // Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: "seb@stianpieper.de",
      subject: `[${SITE_NAME}] ${anliegen} — ${name}`,
      text: [
        `Neue Nachricht über ${SITE_NAME}`,
        ``,
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Anliegen: ${anliegen}`,
        ``,
        `Nachricht:`,
        nachricht,
      ].join("\n"),
    });

    return { success: true, message: "Vielen Dank für Ihre Nachricht! Ich melde mich zeitnah bei Ihnen." };
  } catch {
    return {
      success: false,
      message: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie mich über LinkedIn.",
    };
  }
}
