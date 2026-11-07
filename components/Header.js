'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { name: 'Product', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Developers', href: '/developers' },
  { name: 'Company', href: '/company' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-rule">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="16" height="16" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
            <path d="M5 9h8M9 5v8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="font-display text-xl">Nexora</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="hover:text-accent">{l.name}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="p-2 hover:text-accent">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/walkthrough" className="text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-canvas">
            Request a walkthrough
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-canvas z-50 md:hidden" role="dialog">
          <button className="absolute top-4 right-4 p-2" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
          <nav className="mt-20 px-6 flex flex-col gap-6 text-lg">
            {links.map((l) => (
              <Link key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</Link>
            ))}
            <Link href="/walkthrough" onClick={() => setOpen(false)} className="mt-4 border border-ink px-4 py-3 text-center">Request a walkthrough</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
