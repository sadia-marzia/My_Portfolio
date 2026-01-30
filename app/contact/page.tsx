"use client";

import { useSearchParams } from "next/navigation";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

export default function Contact() {
  const params = useSearchParams();
  const locale = params.get("locale") || "en";

  const translations = require(`../../locales/${locale}.json`);
  const { contact } = translations;

  // Map titles to icon components (not JSX)
  const iconMap: Record<string, any> = {
    Email: AiOutlineMail,
    GitHub: AiFillGithub,
    LinkedIn: AiFillLinkedin,
    "Google Scholar": SiGooglescholar,
    ResearchGate: SiResearchgate,
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      {/* ===== HEADING ===== */}
      <h1 className="text-3xl font-bold text-navy text-center mb-6">
        {contact.heading}
      </h1>

      {/* ===== INTRO ===== */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12 text-justify">
        {contact.description}
      </p>

      {/* ===== CONTACT LINKS ===== */}
      <div className="grid sm:grid-cols-2 gap-6">
        {contact.links.map((link: any, index: number) => {
          const IconComponent = iconMap[link.title]; // Get the component

          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-ash-light rounded-xl shadow-sm 
                         hover:bg-ash-hover hover:shadow-md transition-all duration-200"
            >
              {/* Render Icon if exists */}
              {IconComponent && (
                <IconComponent className="text-2xl text-navy mr-3 transform transition-transform duration-200 hover:scale-110" />
              )}

              {/* Contact Text */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm break-all">{link.label}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
