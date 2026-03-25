import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — KI-Beratung Sebastian Pieper",
  description:
    "Praxisnahe Artikel über Künstliche Intelligenz, Automatisierung und Technologie für den Mittelstand.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

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
            <span className="font-body text-sm text-black font-medium">
              Blog
            </span>
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
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-light via-light2 to-light">
          <div className="mx-auto max-w-[800px] px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-body text-sm text-text2 hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Zurück zur Startseite
            </Link>
            <span className="block font-heading text-[11px] font-semibold tracking-[4px] text-accent2 uppercase">
              BLOG
            </span>
            <h1 className="font-heading text-[36px] md:text-[44px] font-bold text-black tracking-[-0.5px] mt-3 mb-4 leading-[1.15]">
              KI & Tech — Praxisnah erklärt
            </h1>
            <p className="font-body text-base font-light leading-[1.6] text-text max-w-[560px]">
              Einblicke, Strategien und konkrete Tipps rund um Künstliche
              Intelligenz und Technologie im Unternehmensalltag.
            </p>
          </div>
        </section>

        {/* Post List */}
        <section className="py-16 bg-light">
          <div className="mx-auto max-w-[800px] px-6">
            {posts.length === 0 ? (
              <p className="font-body text-text2 text-center py-12">
                Noch keine Artikel veröffentlicht. Schauen Sie bald wieder
                vorbei!
              </p>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block bg-card-bg border border-accent-border rounded-[20px] p-8 hover:bg-[rgba(15,23,42,0.06)] hover:border-accent-border2 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 text-text3 mb-3">
                      <Calendar className="w-4 h-4" strokeWidth={1.5} />
                      <span className="font-body text-sm">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="font-heading text-xl font-bold text-black mb-2">
                      {post.title}
                    </h2>
                    <p className="font-body text-sm font-light leading-[1.6] text-text2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
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
                      <span className="inline-flex items-center gap-1 font-heading text-[12px] font-semibold text-accent2">
                        Lesen
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
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
