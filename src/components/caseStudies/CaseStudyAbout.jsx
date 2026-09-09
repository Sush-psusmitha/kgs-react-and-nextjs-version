import React from 'react';

export default function CaseStudyAbout({ aboutClient }) {
  if (!aboutClient || !aboutClient.body) return null;

  return (
    <section className="py-8 md:py-12" aria-label="About the client and requirements">
      <div className="mx-auto w-[92%] max-w-[1920px]">
        <div className="border-l-[3px] border-kgs-primary pl-6">
          <h2 className="mb-3 font-heading text-lg font-bold text-neutral-900 md:text-xl">
            {aboutClient.title || 'About The Client'}
          </h2>
          <p className="font-body text-base font-medium leading-[1.78] text-neutral-700 md:text-md">
            {aboutClient.body}
          </p>
        </div>
      </div>
    </section>
  );
}
