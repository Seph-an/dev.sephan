'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Menu, X } from "lucide-react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Project portfolio", href: "/case-studies" },
  { label: "Services", href: "/services" },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVisualClasses = isScrolled
    ? "border-white/15 bg-white/10 shadow-lg shadow-black/25 backdrop-blur-2xl ring-1 ring-white/10 supports-[backdrop-filter]:bg-white/5"
    : "border-transparent bg-transparent shadow-none backdrop-blur-none ring-0";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-6 md:px-8">
      <div className="relative w-full max-w-7xl pointer-events-none">
        <nav
          className={`pointer-events-auto flex w-full items-center justify-between gap-4 rounded-2xl border px-6 py-3 text-sm text-white transition-all duration-300 ${navVisualClasses}`}
        >
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <span className="text-3xl font-semibold text-white md:text-4xl">
              SE
              <span
                className={`${poppins.className} ml-1 inline-block align-middle text-[2.4rem] font-semibold leading-[0.75] text-emerald-500 md:text-[2.6rem]`}
              >
                .
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-xl border px-3 py-2 transition ${
                    active
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-transparent text-white/80 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              asChild
              size="lg"
              className="hidden h-11 rounded-xl bg-white px-5 text-black transition hover:brightness-95 sm:inline-flex"
            >
              <a href="mailto:sephan@sephanly.com" aria-label="Email me" className="inline-flex items-center">
                <Check className="mr-2 h-4 w-4 text-emerald-500" />
                Hire Me
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className={`pointer-events-auto inline-flex items-center justify-center rounded-xl border p-2 text-white transition sm:hidden ${
              isScrolled
                ? "border-white/10 bg-white/10 hover:bg-white/20"
                : "border-white/10 bg-transparent hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`pointer-events-auto absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-sm text-white backdrop-blur-2xl ring-1 ring-white/10 transition-[max-height,opacity] duration-300 sm:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`border-b border-white/10 px-5 py-3 transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              asChild
              size="lg"
              className="m-3 h-11 rounded-xl bg-white text-black transition hover:brightness-95"
            >
              <a href="mailto:sephan@sephanly.com" aria-label="Email me" className="inline-flex items-center">
                <Check className="mr-2 h-4 w-4 text-emerald-500" />
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
