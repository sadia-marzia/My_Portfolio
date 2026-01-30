"use client";

import { useSearchParams } from "next/navigation";

export default function Research() {
  // Get the locale from URL query params using Next.js' navigation hook
  const params = useSearchParams();
  const locale = params.get("locale") || "en"; // Default to English if no locale is set

  // Import the appropriate translations (either `en.json` or `bn.json` depending on locale)
  const translations = require(`../../locales/${locale}.json`);
  const { research } = translations;

  return (
    <div className="container mx-auto py-20 px-6 max-w-5xl">
      {/* ===== PAGE HEADING ===== */}
      <h1 className="text-4xl font-bold text-navy text-center mb-10">
        {research.heading}
      </h1>

      {/* ===== UNDERGRADUATE THESIS ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-4">{research.thesis.title}</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {research.thesis.subtitle}
        </h3>
        <h4 className="text-lg font-bold text-gray-600 mb-4">{research.thesis.university}</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          {research.thesis.points.map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* ===== CONFERENCE PUBLICATION ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-4">{research.conference.title}</h2>
        <p className="text-gray-700 mb-4">
          {research.conference.authors}. <i>{research.conference.paper}</i>. <strong>{research.conference.journal}</strong>.<br />
          <span className="text-navy font-semibold">DOI:</span>{" "}
          <a
            href={research.conference.doiLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {research.conference.doi}
          </a>
        </p>
      </section>

      {/* ===== ONGOING RESEARCH ===== */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4">{research.ongoing.title}</h2>
        <p className="text-gray-700 leading-relaxed">{research.ongoing.description}</p>
      </section>
    </div>
  );
}