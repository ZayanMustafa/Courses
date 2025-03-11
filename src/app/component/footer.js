import Link from "next/link";

// Constants for footer content
const FOOTER_CONTENT = {
  copyright: {
    text: "© Madani Courses 2024, All rights reserved.",
    link: "https://github.com/ZayanMustafa",
  },
  links: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <div className="py-7 border-t bg-dark-500 border-gray-100">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
        {/* Copyright Section */}
        <span className="text-sm text-gray-500">
          <a href={FOOTER_CONTENT.copyright.link}>
            {FOOTER_CONTENT.copyright.text}
          </a>
        </span>

        {/* Links Section */}
        <ul className="flex items-center gap-9 mt-4 lg:mt-0">
          {FOOTER_CONTENT.links.map((link, index) => (
            <li key={index}>
              <Link className="text-sm text-gray-500" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}