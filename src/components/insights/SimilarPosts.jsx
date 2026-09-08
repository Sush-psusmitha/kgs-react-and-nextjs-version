'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendarDays } from 'react-icons/fa6';

/**
 * 3-Card Grid for Similar/Related Insights Posts
 */
export default function SimilarPosts({ posts = [] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-neutral-50/70 py-16 md:py-10 border-t border-neutral-200/70" aria-labelledby="similar-heading">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-wider text-kgs-primary">
              Related Reading
            </span>
            <h2 id="similar-heading" className="font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
              Similar Posts
            </h2>
          </div>
          <Link
            href="/insights"
            className="group flex items-center gap-2 font-heading text-sm font-bold text-kgs-primary hover:underline underline-offset-4"
          >
            <span>View All Insights</span>
            <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => {
            const articleHref = `/insights/${post.categorySlug}/${post.slug}`;
            return (
              <article
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-kgs-primary/40 hover:shadow-[0_16px_36px_-12px_rgba(235,31,61,0.15)]"
              >
                <div>
                  {/* Thumbnail Image */}
                  {post.image && (
                    <Link href={articleHref} className="relative block h-52 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  )}

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between text-xs font-medium text-neutral-500">
                      <span className="font-bold text-kgs-primary">
                        {post.category}
                      </span>
                      {post.date && (
                        <div className="flex items-center gap-1.5">
                          <FaCalendarDays size={11} color='#f8485e' />
                          <span>{post.date}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-neutral-900 group-hover:text-kgs-primary transition-colors">
                      <Link href={articleHref}>{post.title}</Link>
                    </h3>

                    {post.snippet && (
                      <p className="line-clamp-3 font-body text-sm font-medium leading-relaxed text-neutral-600">
                        {post.snippet}
                      </p>
                    )}
                  </div>
                </div>

                {/* Read More Footer */}
                <div className="border-t border-neutral-100 px-6 py-4">
                  <Link
                    href={articleHref}
                    className="flex items-center gap-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors"
                  >
                    <span>Read Article</span>
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
