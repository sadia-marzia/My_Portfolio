"use client";

import { useSearchParams } from "next/navigation";

export default function Experience() {
  const params = useSearchParams();
  const locale = params.get("locale") || "en";

  const translations = require(`../../locales/${locale}.json`);
  const { experience } = translations;

  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-3xl font-bold text-navy text-center mb-12">
        {experience.heading}
      </h1>

      {/* ===== EXPERIENCE CARD ===== */}
      <div className="p-8 bg-ash-light rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-navy">
          {experience.role}
        </h2>

        <p className="text-gray-700 font-medium mt-1">
          {experience.organization}
        </p>

        <p className="text-gray-500 text-sm mb-4">
          {experience.duration} · {experience.location}
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
          {experience.responsibilities.map(
            (item: string, index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
