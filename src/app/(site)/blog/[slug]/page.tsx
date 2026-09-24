import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/content/blog";
import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Artigo" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderMarkdownLite(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mt-8 font-serif text-xl text-ubari-ink">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-10 font-serif text-2xl text-ubari-ink">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-4 list-disc text-ubari-muted">
          {trimmed.slice(2)}
        </li>
      );
    } else {
      elements.push(
        <p key={key++} className="mt-4 leading-relaxed text-ubari-muted">
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    description: post.excerpt,
    mainEntityOfPage: `${site.siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="section-padding bg-ubari-cream pt-32 md:pt-40">
        <div className="container-ubari max-w-narrow">
          <FadeIn>
            <Link
              href="/blog"
              className="text-xs uppercase tracking-wider text-ubari-bronze hover:underline"
            >
              ← Blog
            </Link>
            <time
              dateTime={post.date}
              className="mt-6 block text-xs uppercase tracking-wider text-ubari-muted"
            >
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <h1 className="mt-3 font-serif text-display-sm text-ubari-ink md:text-display-md text-balance">
              {post.title}
            </h1>
            <span className="mt-5 block h-0.5 w-12 bg-ubari-amber" aria-hidden />
            <div className="mt-2 prose-ubari">{renderMarkdownLite(post.content)}</div>
            <div className="mt-14 border-t border-ubari-sand pt-8">
              <p className="text-sm text-ubari-muted">
                Sentiu que é hora de conversar?
              </p>
              <Link href="/agendar" className="btn-cta mt-4 inline-flex">
                Agendar sessão
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
