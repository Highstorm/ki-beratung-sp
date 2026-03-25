import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — KI-Beratung Sebastian Pieper`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(248,250,252,0.95)] backdrop-blur-[20px] border-b border-accent-border3">
        <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-[2px] text-black">
              SP
            </span>
            <span className="font-heading text-[11px] font-semibold tracking-[2px] text-accent2">
              KI-BERATUNG
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-body text-sm text-text2 hover:text-black transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/blog"
              className="font-body text-sm text-text2 hover:text-black transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#kontakt"
              className="font-heading text-[13px] font-bold tracking-[1px] bg-accent text-black px-[22px] py-2 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.25)] transition-all"
            >
              ERSTGESPRÄCH
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <article className="py-20 bg-gradient-to-b from-light via-light2 to-light">
          <div className="mx-auto max-w-[720px] px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-body text-sm text-text2 hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Alle Artikel
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-text3 mb-4">
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-body text-sm">
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="font-heading text-[32px] md:text-[40px] font-bold text-black tracking-[-0.5px] leading-[1.15] mb-4">
              {post.title}
            </h1>

            <p className="font-body text-lg font-light leading-[1.6] text-text mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 font-heading text-[10px] font-semibold text-text2 bg-pill-bg border border-accent-border rounded-lg px-2.5 py-0.5"
                >
                  <Tag className="w-3 h-3" strokeWidth={1.5} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-black prose-headings:tracking-tight prose-p:font-body prose-p:font-light prose-p:leading-[1.7] prose-p:text-text prose-a:text-accent2 prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-blockquote:border-accent prose-blockquote:text-text2 prose-li:text-text prose-li:font-body prose-li:font-light prose-hr:border-accent-border">
              <MDXRemote source={post.content} />
            </div>

            {/* CTA */}
            <div className="mt-16 bg-[rgba(163,230,53,0.06)] border border-[rgba(132,204,22,0.28)] rounded-[20px] p-8 text-center">
              <p className="font-heading text-lg font-bold text-black mb-2">
                Fragen zu diesem Thema?
              </p>
              <p className="font-body text-sm font-light text-text2 mb-4">
                Lassen Sie uns in einem kostenlosen Erstgespräch über Ihre
                konkreten Herausforderungen sprechen.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 font-heading text-sm font-bold bg-accent text-black px-6 py-3 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.4)] transition-all"
              >
                Erstgespräch buchen
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-light border-t border-accent-border">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-sm font-bold tracking-[2px] text-black">
              SP
            </span>
            <span className="font-body text-xs text-text3">
              &copy; {new Date().getFullYear()} Sebastian Pieper
            </span>
          </div>
          <Link
            href="/#kontakt"
            className="font-body text-xs text-text3 hover:text-text2 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </footer>
    </>
  );
}
