import {
  Brain,
  Lightbulb,
  GraduationCap,
  Rocket,
  Shield,
  BarChart3,
  Users,
  Bot,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Zap,
  Target,
  Clock,
  TrendingUp,
  MessageSquare,
  Linkedin,
} from "lucide-react";
import { ContactForm } from "./components/ContactForm";

/* ─── Shared Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-heading text-[11px] font-semibold tracking-[4px] text-accent2 uppercase">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-black tracking-[-0.5px] mt-3 mb-2 leading-[1.15]">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="w-20 h-1 bg-accent rounded-sm" />;
}

/* ─── Navbar ─── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(248,250,252,0.95)] backdrop-blur-[20px] border-b border-accent-border3">
      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-[2px] text-black">
            SP
          </span>
          <span className="font-heading text-[11px] font-semibold tracking-[2px] text-accent2">
            KI-BERATUNG
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#leistungen" className="font-body text-sm text-text2 hover:text-black transition-colors">Leistungen</a>
          <a href="#prozess" className="font-body text-sm text-text2 hover:text-black transition-colors">Vorgehen</a>
          <a href="#warum" className="font-body text-sm text-text2 hover:text-black transition-colors">Warum ich</a>
          <a href="#faq" className="font-body text-sm text-text2 hover:text-black transition-colors">FAQ</a>
          <a
            href="#kontakt"
            className="font-heading text-[13px] font-bold tracking-[1px] bg-accent text-black px-[22px] py-2 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.25)] transition-all"
          >
            ERSTGESPRÄCH
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-light via-light2 to-light pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] left-[6%] w-[75px] h-[75px] bg-[#84CC16] opacity-80 rounded-[10px] rotate-[-18deg] shadow-[0_5px_28px_rgba(132,204,22,0.25)]" />
        <div className="absolute top-[8%] right-[12%] w-[130px] h-[130px] bg-[#A3E63525] rounded-2xl rotate-[20deg] border border-[#A3E63530]" />
        <div className="absolute top-[55%] right-[6%] w-[110px] h-[110px] bg-[#A3E635] opacity-85 rounded-[14px] rotate-[12deg] shadow-[0_8px_36px_rgba(163,230,53,0.3)]" />
        <div className="absolute bottom-[22%] left-[4%] w-[55px] h-[55px] bg-[#BEF264] opacity-60 rounded-lg rotate-[28deg]" />
        <div className="absolute top-[35%] right-[30%] w-[32px] h-[32px] bg-[#22C55E] opacity-45 rounded-[5px] rotate-[-25deg]" />
        <div className="absolute top-[10%] left-[55%] w-[380px] h-[300px] bg-[#A3E63518] rounded-full blur-[90px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[280px] h-[220px] bg-[#84CC1612] rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
        <div className="max-w-[720px]">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-accent-glow border border-accent-border rounded-full px-4 py-1.5 mb-8">
            <Zap className="w-4 h-4 text-accent2" strokeWidth={2} />
            <span className="font-heading text-[12px] font-semibold text-accent2 tracking-wide">
              94% des Mittelstands nutzen KI noch nicht operativ
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 font-heading text-[44px] md:text-[64px] font-extrabold text-black leading-[1.08] tracking-[-1px] mb-6">
            KI ist kein Zukunftsthema mehr.{" "}
            <span className="text-accent2">Es ist jetzt.</span>
          </h1>

          <p className="animate-fade-up delay-200 font-body text-lg md:text-xl font-light leading-[1.6] text-text max-w-[600px] mb-10">
            Ich helfe Unternehmen und Unternehmern, KI praxisnah einzusetzen —
            von der Strategie über Schulungen bis zur Implementierung von AI-Agents.
            Erste produktive Ergebnisse in 14 Tagen. DSGVO-konform. Ohne Buzzword-Bingo.
          </p>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold bg-accent text-black px-8 py-4 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.4)] transition-all"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 font-heading text-sm font-semibold text-text2 bg-pill-bg border border-accent-border px-8 py-4 rounded-lg hover:bg-[rgba(15,23,42,0.08)] hover:border-accent-border2 transition-all"
            >
              Leistungen ansehen
            </a>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-up delay-400 mt-14 flex flex-wrap gap-6 items-center">
            {[
              { icon: Shield, text: "DSGVO-konform" },
              { icon: Target, text: "Praxisnah" },
              { icon: Clock, text: "Schneller Start" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-text3">
                <Icon className="w-4 h-4 text-accent2" strokeWidth={1.5} />
                <span className="font-body text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pain Points ─── */

function PainPoints() {
  const pains = [
    { icon: Lightbulb, title: "Wo anfangen?", desc: "Zu viele Tools, zu viele Möglichkeiten — aber welche KI-Anwendung passt wirklich zu Ihrem Unternehmen?" },
    { icon: Users, title: "Team mitnehmen", desc: "Ihre Mitarbeiter sind unsicher oder skeptisch. Ohne Akzeptanz im Team scheitert jede KI-Initiative." },
    { icon: Shield, title: "Datenschutz & Compliance", desc: "DSGVO, EU AI Act, Betriebsgeheimnisse — Sie brauchen eine Lösung, der Sie vertrauen können." },
    { icon: TrendingUp, title: "Messbare Ergebnisse", desc: "KI soll nicht nur modern klingen, sondern echten ROI liefern. Weniger Kosten, mehr Effizienz." },
  ];

  return (
    <section className="py-24 bg-light2">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <SectionLabel>DAS PROBLEM</SectionLabel>
        <SectionTitle>Kommt Ihnen das bekannt vor?</SectionTitle>
        <Divider />
        <div className="mt-4 mx-auto" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card-bg border border-accent-border rounded-[20px] p-8 text-left hover:bg-[rgba(15,23,42,0.06)] hover:border-accent-border2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-accent2 mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-bold text-black mb-2">{title}</h3>
              <p className="font-body text-sm font-light leading-[1.6] text-text2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */

function Services() {
  const services = [
    {
      icon: Brain,
      title: "KI-Strategie & Potenzialanalyse",
      desc: "Gemeinsam identifizieren wir die KI-Anwendungen mit dem höchsten Impact für Ihr Unternehmen. Kein theoretisches Konzeptpapier, sondern eine priorisierte Roadmap mit konkreten Use Cases.",
      tags: ["Potenzialanalyse", "Use-Case-Bewertung", "Roadmapping", "ROI-Kalkulation"],
    },
    {
      icon: GraduationCap,
      title: "Workshops & Schulungen",
      desc: "Von der Führungsebene bis zum operativen Team: Praxisnahe Schulungen, die Ihr Team befähigen, KI-Tools sicher und effektiv einzusetzen. Keine PowerPoint-Theorie, sondern Hands-on mit echten Arbeitsdaten.",
      tags: ["KI für Führungskräfte", "Prompt Engineering", "Tool-Schulungen", "Train-the-Trainer"],
    },
    {
      icon: Bot,
      title: "AI Agents & Automatisierung",
      desc: "Individuelle AI-Agents, die repetitive Aufgaben übernehmen: Kundenservice, Datenanalyse, Content-Erstellung, Dokumentenverarbeitung. Nahtlos integriert in Ihre bestehende Systemlandschaft.",
      tags: ["Custom AI Agents", "Workflow-Automation", "System-Integration", "Chatbots"],
    },
    {
      icon: Rocket,
      title: "Implementierung & Pilotprojekte",
      desc: "Vom Konzept zur produktiven Lösung in 14 Tagen. Strukturierte Pilotprojekte mit klarem Scope, messbaren KPIs und einem Blueprint für die unternehmensweite Skalierung.",
      tags: ["14-Tage-Pilot", "MVP-Entwicklung", "KPI-Tracking", "Skalierungsplan"],
    },
    {
      icon: Shield,
      title: "Governance & Compliance",
      desc: "DSGVO-konforme KI-Nutzung, EU AI Act Vorbereitung, Richtlinien für den verantwortungsvollen KI-Einsatz. Damit Sie KI nutzen können, ohne sich Sorgen machen zu müssen.",
      tags: ["DSGVO", "EU AI Act", "KI-Richtlinien", "Risikobewertung"],
    },
    {
      icon: Workflow,
      title: "Laufende Begleitung",
      desc: "KI entwickelt sich rasant. Als Ihr Sparringspartner halte ich Sie auf dem neuesten Stand, optimiere laufende Lösungen und identifiziere neue Potenziale.",
      tags: ["Retainer-Modell", "Optimierung", "Trend-Scouting", "Sparring"],
    },
  ];

  return (
    <section id="leistungen" className="py-24 bg-light">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>LEISTUNGEN</SectionLabel>
        <SectionTitle>Von der Idee zur produktiven KI-Lösung</SectionTitle>
        <Divider />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="bg-card-bg border border-accent-border rounded-[20px] p-[32px_24px] hover:bg-[rgba(15,23,42,0.06)] hover:border-accent-border2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-accent2 mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-bold text-black mb-3">{title}</h3>
              <p className="font-body text-sm font-light leading-[1.6] text-text2 mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-heading text-[10px] font-semibold text-text2 bg-pill-bg border border-accent-border rounded-lg px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */

function Process() {
  const steps = [
    { num: "01", title: "Erstgespräch", desc: "Kostenlos und unverbindlich. Wir sprechen über Ihre Herausforderungen, Ziele und die KI-Reife Ihres Unternehmens.", duration: "30 Min." },
    { num: "02", title: "Potenzialanalyse", desc: "Innerhalb von ein bis zwei Tagen identifiziere ich Ihre Top-Use-Cases, bewerte Aufwand vs. Impact und liefere eine priorisierte Roadmap.", duration: "1–2 Tage" },
    { num: "03", title: "Pilot & Training", desc: "In zwei Wochen setzen wir den ersten Use Case produktiv um und schulen Ihr Team für den eigenständigen Einsatz.", duration: "14 Tage" },
    { num: "04", title: "Kontinuierliche Entwicklung", desc: "Nahtloser Übergang in die laufende Begleitung: Optimierung, neue Use Cases, Trend-Scouting — Ihr KI-Sparringspartner.", duration: "Ongoing" },
  ];

  return (
    <section id="prozess" className="py-24 bg-light2">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <SectionLabel>VORGEHEN</SectionLabel>
          <SectionTitle>In 4 Schritten zur KI-Nutzung</SectionTitle>
          <Divider />
        </div>
        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc, duration }) => (
            <div key={num} className="relative">
              <span className="font-heading text-[64px] font-extrabold text-accent-glow leading-none">{num}</span>
              <h3 className="font-heading text-lg font-bold text-black mt-2 mb-2">{title}</h3>
              <p className="font-body text-sm font-light leading-[1.6] text-text2 mb-3">{desc}</p>
              <span className="inline-flex items-center gap-1 font-heading text-[10px] font-semibold text-accent2 bg-accent-glow border border-accent-border rounded-full px-3 py-1">
                <Clock className="w-3 h-3" strokeWidth={2} />
                {duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Me ─── */

function WhyMe() {
  const reasons = [
    { icon: Rocket, title: "14+ Jahre Praxiserfahrung", desc: "Vom Software Engineer über die Geschäftsführung eines Softwarehauses bis zum AI Product Lead — ich kenne beide Seiten: Technik und Business." },
    { icon: Target, title: "Mittelstand-Fokus", desc: "Keine Enterprise-Beratung mit DAX-Preisen. Pragmatische Lösungen, die sich für Unternehmen mit 20–5.000 Mitarbeitern rechnen." },
    { icon: Brain, title: "Hands-on statt PowerPoint", desc: "Ich berate nicht nur, ich setze selbst um. Als ehemaliger Full-Stack-Engineer spreche ich die Sprache Ihres Dev-Teams." },
    { icon: Shield, title: "DSGVO als Standard", desc: "Alle Lösungen sind von Anfang an datenschutzkonform. Deutsche/EU-Server, keine Datenabflüsse an Dritte." },
    { icon: BarChart3, title: "Messbare Ergebnisse", desc: "Jedes Projekt hat klare KPIs. Sie sehen genau, was KI für Ihr Unternehmen bringt — in Euro, Stunden, Qualität." },
    { icon: Users, title: "Team-Enablement", desc: "Mein Ziel ist Ihre Unabhängigkeit. Ich befähige Ihr Team, KI eigenständig zu nutzen und weiterzuentwickeln." },
  ];

  return (
    <section id="warum" className="py-24 bg-light">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <SectionLabel>WARUM ICH</SectionLabel>
          <SectionTitle>Nicht noch ein Berater.</SectionTitle>
          <Divider />
          <p className="font-body text-base font-light leading-[1.6] text-text mt-4 max-w-[600px] mx-auto">
            Kein Konzern-Consulting, keine Buzzword-Folien. Ich bringe KI-Expertise mit
            der Umsetzungskraft eines Unternehmers zusammen.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-accent-glow border border-accent-border rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent2" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-black mb-1">{title}</h3>
                <p className="font-body text-sm font-light leading-[1.6] text-text2">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-card-bg border border-accent-border rounded-[16px] overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer px-7 py-5 font-heading text-base font-bold text-black list-none">
        {q}
        <ChevronDown className="w-5 h-5 text-text3 group-open:rotate-180 transition-transform shrink-0 ml-4" strokeWidth={2} />
      </summary>
      <div className="px-7 pb-5">
        <p className="font-body text-sm font-light leading-[1.6] text-text2">{a}</p>
      </div>
    </details>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Für welche Unternehmensgröße ist Ihre Beratung geeignet?",
      a: "Ich arbeite primär mit mittelständischen Unternehmen zwischen 20 und 5.000 Mitarbeitern. Die Branche ist sekundär — die Methodik funktioniert in Produktion, Dienstleistung, Handel und Professional Services.",
    },
    {
      q: "Was kostet ein Erstgespräch?",
      a: "Das Erstgespräch ist kostenlos und dauert ca. 30 Minuten. Wir klären Ihre Situation, besprechen konkrete Ansatzpunkte und ob eine Zusammenarbeit sinnvoll ist — ohne Verkaufsdruck.",
    },
    {
      q: "Brauchen wir Vorkenntnisse im Bereich KI?",
      a: "Nein. Ich hole Sie genau dort ab, wo Sie stehen. Ob Ihr Team noch nie mit KI gearbeitet hat oder bereits erste Erfahrungen hat — die Schulungen und Projekte werden individuell angepasst.",
    },
    {
      q: "Wie stellen Sie DSGVO-Konformität sicher?",
      a: "Alle Lösungen werden von Anfang an datenschutzkonform konzipiert. Ich arbeite ausschließlich mit Anbietern, die Daten auf deutschen/EU-Servern verarbeiten und setze wo möglich auf Open-Source-Modelle mit lokaler Instanzierung.",
    },
    {
      q: "Wie schnell sehen wir erste Ergebnisse?",
      a: "Schnell. Die Potenzialanalyse steht nach 1–2 Tagen, der erste produktive Pilot innerhalb von 14 Tagen. Quick Wins wie KI-gestützte E-Mail-Bearbeitung oder Dokumentenanalyse können oft schon nach wenigen Tagen live sein.",
    },
    {
      q: "Gibt es Fördermöglichkeiten für KI-Projekte?",
      a: "Ja! Es gibt verschiedene Bundes- und Landesprogramme zur Förderung von Digitalisierung und KI im Mittelstand. Ich berate Sie gerne zu den passenden Förderprogrammen und unterstütze bei der Antragstellung.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-light">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Häufige Fragen</SectionTitle>
          <Divider />
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA / Contact ─── */

function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-light2">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <SectionLabel>NÄCHSTER SCHRITT</SectionLabel>
        <SectionTitle>Bereit für KI, die wirklich funktioniert?</SectionTitle>
        <Divider />
        <p className="font-body text-base font-light leading-[1.6] text-text mt-6 mb-4 max-w-[560px] mx-auto">
          Lassen Sie uns in einem kostenlosen 30-Minuten-Gespräch klären, wie KI Ihrem
          Unternehmen konkret weiterhilft. Kein Verkaufsgespräch — nur ehrliche Einschätzung.
        </p>

        <div className="mt-8 bg-[rgba(163,230,53,0.06)] border border-[rgba(132,204,22,0.28)] rounded-[20px] p-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-accent2" strokeWidth={1.5} />
            <span className="font-heading text-lg font-bold text-black">Kostenloses Erstgespräch</span>
          </div>
          <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
            {[
              "Analyse Ihrer aktuellen Situation",
              "Top-3 KI-Potenziale für Ihr Unternehmen",
              "Grobe Aufwands- und Kosteneinschätzung",
              "Empfehlung für nächste Schritte",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent2 mt-0.5 shrink-0" strokeWidth={2} />
                <span className="font-body text-sm text-text">{item}</span>
              </div>
            ))}
          </div>
          <ContactForm
            reasons={["Erstgespräch", "Workshop", "Strategie-Beratung", "AI Agents", "Sonstiges"]}
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/sebastian-pieper-selb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text2 hover:text-black transition-colors"
          >
            <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            <span className="font-body text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="py-8 bg-light border-t border-accent-border">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm font-bold tracking-[2px] text-black">SP</span>
          <span className="font-body text-xs text-text3">&copy; {new Date().getFullYear()} Sebastian Pieper</span>
        </div>
        <a href="#kontakt" className="font-body text-xs text-text3 hover:text-text2 transition-colors">
          Kontakt
        </a>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <WhyMe />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
