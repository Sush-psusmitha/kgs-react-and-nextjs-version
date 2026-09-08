'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton';
import { INSIGHT_CATEGORIES } from '../../content/insights/categories';
import { FaListUl, FaFire, FaFolderOpen, FaArrowRight } from 'react-icons/fa6';

/**
 * Sticky Article Sidebar with TOC, Featured Insights, Categories, and Consultation CTA
 */
export default function ArticleSidebar({
  tableOfContents = [],
  featuredPosts = [],
  currentCategorySlug = '',
}) {
  const [activeHeadingId, setActiveHeadingId] = useState(tableOfContents[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    tableOfContents.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      {/* 1. Table of Contents */}
      {tableOfContents && tableOfContents.length > 0 && (
        <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
            <FaListUl className="text-kgs-primary" size={14} />
            <span>Table of Contents</span>
          </div>
          <nav className="space-y-1.5">
            {tableOfContents.map((item) => {
              const isActive = activeHeadingId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block rounded-lg px-3 py-2 font-body text-xs font-semibold leading-snug transition-all ${
                    isActive
                      ? 'bg-white text-kgs-primary shadow-sm border border-kgs-primary/30 font-bold translate-x-1'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* 2. Featured Articles */}
      {featuredPosts && featuredPosts.length > 0 && (
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
            <FaFire className="text-kgs-primary" size={14} />
            <span>Featured Articles</span>
          </div>
          <div className="space-y-4">
            {featuredPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/insights/${post.categorySlug}/${post.slug}`}
                className="group flex items-center gap-3.5"
              >
                {post.image && (
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <div>
                  <span className="text-[11px] font-semibold text-kgs-primary">
                    {post.category}
                  </span>
                  <h4 className="line-clamp-2 font-heading text-xs font-bold text-neutral-900 group-hover:text-kgs-primary transition-colors">
                    {post.title}
                  </h4>
                  {post.date && (
                    <span className="text-[10px] text-neutral-400">{post.date}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 3. Categories Widget */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
          <FaFolderOpen className="text-kgs-primary" size={14} />
          <span>Categories</span>
        </div>
        <div className="space-y-2">
          {INSIGHT_CATEGORIES.map((cat) => {
            const isCurrent = cat.slug === currentCategorySlug;
            return (
              <Link
                key={cat.slug}
                href={`/insights/${cat.slug}`}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-kgs-primary text-white shadow-sm'
                    : 'bg-neutral-50 text-neutral-700 hover:bg-[#FFF5F6] hover:text-kgs-primary'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {cat.icon && (
                    <Image
                      src={cat.icon}
                      alt=""
                      width={18}
                      height={18}
                      className={`h-4 w-4 object-contain ${
                        isCurrent ? 'brightness-0 invert' : ''
                      }`}
                    />
                  )}
                  <span>{cat.name}</span>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isCurrent
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-200/70 text-neutral-600'
                  }`}
                >
                  {cat.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. Consultation CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 text-white shadow-lg">
        <span className="inline-block rounded-full bg-kgs-primary/20 border border-kgs-primary/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF6B81]">
          Need Guidance?
        </span>
        <h4 className="mt-3 font-heading text-lg font-bold leading-tight text-white">
          Transform Your Operations with KGS Experts
        </h4>
        <p className="mt-2 font-body text-xs font-normal leading-relaxed text-neutral-300">
          Discuss tailored automation, outsourcing, and analytics solutions built for your industry.
        </p>
        <div className="mt-5">
          <ArrowButton to="/contact" variant="primary">
            Book Consultation
          </ArrowButton>
        </div>
      </div>
    </aside>
  );
}
