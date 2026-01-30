"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
/* ===== ICON MAP ===== */
const iconMap: Record<string, any> = {
  open: FiMenu,
  close: FiX,
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // 👈 detect current page
  const params = useSearchParams();

  const currentLocale = params.get("locale") || "en";
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "bn" : "en";
    router.push(`${pathname}?locale=${newLocale}`);
  };

  const links = [
    { href: "/", label: currentLocale === "en" ? "Home" : "হোম" },
    { href: "/about", label: currentLocale === "en" ? "About" : "সম্পর্কিত" },
    { href: "/experience", label: currentLocale === "en" ? "Experience" : "অভিজ্ঞতা" },
    { href: "/research", label: currentLocale === "en" ? "Research" : "গবেষণা" },
    { href: "/projects", label: currentLocale === "en" ? "Projects" : "প্রকল্প" },
    { href: "/contact", label: currentLocale === "en" ? "Contact" : "যোগাযোগ" },
  ];

  return (
    <nav className="bg-navy text-white w-full shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          Sadiatul Marzia
        </h1>

        {/* ===== Desktop Links ===== */}
        <ul className="hidden md:flex space-x-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={`${link.href}?locale=${currentLocale}`}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-navy-dark text-white shadow"
                        : "hover:bg-navy-dark/70"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ===== Language Toggle (Desktop) ===== */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block ml-4 bg-accent text-white px-4 py-2 rounded-md
                     hover:bg-accent-dark transition duration-200"
        >
          {currentLocale === "en" ? "বাংলা" : "English"}
        </button>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none transition transform hover:scale-110"
          >
            {(() => {
              const IconComponent = isOpen ? iconMap.close : iconMap.open;
              return <IconComponent size={24} />;
            })()}
          </button>
        </div>

      </div>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="md:hidden bg-navy px-6 pb-6 space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={`${link.href}?locale=${currentLocale}`}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2 rounded-md text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-navy-dark text-white"
                      : "hover:bg-navy-dark/70"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleLanguage}
            className="w-full mt-2 bg-accent text-white px-4 py-2 rounded-md
                       hover:bg-accent-dark transition duration-200"
          >
            {currentLocale === "en" ? "বাংলা" : "English"}
          </button>
        </div>
      )}
    </nav>
  );
}
