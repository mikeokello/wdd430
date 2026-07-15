"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith("/meetings") && link.href === "/meetings");

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`rounded-full px-3 py-1 transition ${
                isActive
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-100 hover:bg-white/15 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
