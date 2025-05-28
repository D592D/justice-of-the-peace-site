// src/components/Navigation.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo"; // your custom SVG/logo component

export default function Navigation() {
  const { pathname } = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/book-appointment", label: "Book Appointment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-slate-900 text-white py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-6 w-6 text-amber-400" />
          <span className="font-semibold text-lg">Randy Sampson JP</span>
        </Link>
        <ul className="flex space-x-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:underline ${
                  pathname === href ? "text-amber-400" : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
