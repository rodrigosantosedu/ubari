import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/content/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo educativo sobre saúde emocional, primeira sessão e como escolher um psicólogo — pela Ubari Espaço de Psicologia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-ubari-forest pb-16 pt-32 md:pt-40">
        <div className="container-ubari">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ubari-clay">
            Blog
          </p>
          <h1 className="max-w-3xl font-display text-display-md text-ubari-cream md:text-display-lg">
            Para olhar com mais calma
          </h1>
        </div>
      </section>

      <section className="section-padding bg-ubari-cream">
        <div className="container-ubari">
          <SectionHeading
            title="Artigos"
            description="Informação ética, sem promessas de cura."
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <article className="flex h-full flex-col border-t border-ubari-gold/40 pt-5">
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wider text-ubari-clay"
                  >
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-3 font-display text-xl text-ubari-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-ubari-clay"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ubari-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="link-bronze mt-4 text-sm font-medium"
                  >
                    Ler artigo →
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
