import Link from "next/link";
import { getFeaturedPosts } from "@/content/blog";
import { FadeIn } from "@/components/ui/FadeIn";

export function BlogPreview() {
  const posts = getFeaturedPosts(3);

  return (
    <section className="section-padding bg-white">
      <div className="container-ubari">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-display-md text-ubari-ink">
            Conteúdo
          </h2>
          <p className="mt-5 font-sans text-sm font-light text-ubari-mute">
            Para olhar com mais calma — informação ética, sem promessas
          </p>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <article>
                <time
                  dateTime={post.date}
                  className="font-sans text-[10px] uppercase tracking-[0.18em] text-ubari-gold"
                >
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h3 className="mt-3 font-serif text-xl text-ubari-ink md:text-2xl">
                  <Link href={`/blog/${post.slug}`} className="hover:opacity-60">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ubari-mute">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn-text mt-5 inline-block"
                >
                  Ler artigo
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
