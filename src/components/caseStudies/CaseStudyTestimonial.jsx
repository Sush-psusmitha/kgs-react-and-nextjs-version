import React from 'react';
import { FaStar } from 'react-icons/fa6';

export default function CaseStudyTestimonial({ testimonial }) {
  if (!testimonial || !testimonial.quote) return null;

  return (
    <section className="bg-white py-12 md:py-16" aria-label="Client testimonial">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="rounded-2xl bg-gradient-to-br from-[#FFF0F3] to-[#F9F7F8] px-6 py-12 text-center md:px-12 md:py-16 border border-neutral-100 shadow-xs">
          <h2 className="mb-3 font-heading text-2xl font-bold text-neutral-900 sm:text-3xl md:text-3xl">
            {testimonial.title || 'What did the client say?'}
          </h2>

          {/* 5 Stars */}
          <div className="mb-6 flex items-center justify-center gap-1.5 text-[#FFB800]" aria-label="5 stars rating">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} size={18} />
            ))}
          </div>

          {/* Quote */}
          <p className="mx-auto mb-6 max-w-[760px] font-body text-base font-medium leading-[1.8] text-neutral-600 md:text-lg">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Author */}
          <p className="font-heading text-base font-bold text-neutral-900">
            {testimonial.author}
            {testimonial.company && (
              <span className="mt-1 block font-body text-xs font-medium text-neutral-500 sm:text-sm">
                {testimonial.company}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
