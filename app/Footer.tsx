"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";


export default function Footer() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const locale = params.get("locale") || "en";
  const [currentLocale, setCurrentLocale] = useState(locale);

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "bn" : "en";
    setCurrentLocale(newLocale);
    router.push(`${pathname}?locale=${newLocale}`);
  };
  /* ===== ICON MAP (same pattern as Contact) ===== */
  const iconMap: Record<string, any> = {
    GitHub: AiFillGithub,
    LinkedIn: AiFillLinkedin,
    Email: AiOutlineMail,
  };
    /* ===== SOCIAL LINKS DATA ===== */
  const socialLinks = [
      {
        title: "GitHub",
        url: "https://github.com/sadia-marzia/",
        label: "GitHub",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/sadiatul-marzia-98294b2a1/",
        label: "LinkedIn",
      },
      {
        title: "Email",
        url: "mailto:sadia.marzia36@gmail.com",
        label: "Email",
      },
    ];
  return (
    <footer className="bg-navy text-white py-10">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row md:justify-between items-center">
        {/* Left Section: Your Image and Name */}
        <div className="flex items-center space-x-4 mb-6 sm:mb-0">
          <img
            src="/projects/footer-img.png" // Update this path
            alt="Sadia Marzia"
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />
          <span className="text-lg font-semibold">Sadiatul Marzia</span>
        </div>

        {/* Center Section: Page Links */}
        <div className="mb-6 md:mb-0">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href={`/?locale=${currentLocale}`}
                className="hover:text-blue-400 transition"
              >
                {currentLocale === "en" ? "Home" : "হোম"}
              </a>
            </li>
            <li>
              <a
                href={`/research?locale=${currentLocale}`}
                className="hover:text-blue-400 transition"
              >
                {currentLocale === "en" ? "Research" : "গবেষণা"}
              </a>
            </li>
            <li>
              <a
                href={`/projects?locale=${currentLocale}`}
                className="hover:text-blue-400 transition"
              >
                {currentLocale === "en" ? "Projects" : "প্রকল্পসমূহ"}
              </a>
            </li>
            <li>
              <a
                href={`/contact?locale=${currentLocale}`}
                className="hover:text-blue-400 transition"
              >
                {currentLocale === "en" ? "Contact" : "যোগাযোগ"}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media Icons */}
        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-6 items-center">
          {socialLinks.map((item, index) => {
            const IconComponent = iconMap[item.title];

            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                {IconComponent && <IconComponent size={24} />}
              </a>
            );
          })}

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="ml-4 px-3 py-1 border border-white rounded 
                      hover:bg-white hover:text-navy transition"
          >
            {currentLocale === "en" ? "বাংলা" : "English"}
          </button>
        </div>

      </div>
    </footer>
  );
}
