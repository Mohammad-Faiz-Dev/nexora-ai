'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Bot, Database, Cloud, Shield, Users } from 'lucide-react';

const solutions = [
  { name: 'AI Agents', href: '/solutions#agents', icon: Bot },
  { name: 'Data Platform', href: '/solutions#data', icon: Database },
  { name: 'Cloud', href: '/solutions#cloud', icon: Cloud },
  { name: 'Cybersecurity', href: '/solutions#security', icon: Shield },
  { name: 'Consulting', href: '/solutions#consulting', icon: Users },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
          Nexora
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="flex items-center gap-1 hover:text-white">Solutions <ChevronDown size={14} /></button>
            <AnimatePresence>
              {megaOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute top-full left-0 mt-2 w-72 glass rounded-xl p-3 shadow-2xl">
                  {solutions.map((s) => (
                    <Link key={s.name} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5">
                      <s.icon size={18} className="text-cyan-400" />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/careers" className="hover:text-white">Careers</Link>
          <Link href="/newsroom" className="hover:text-white">Newsroom</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="#" className="text-sm px-4 py-2 hover:text-white">Sign in</Link>
          <Link href="/contact" className="text-sm px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-medium hover:opacity-90">
            Talk to Sales
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(true)}><Menu size={22} /></button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-ink z-50 lg:hidden p-6">
            <button className="absolute top-6 right-6" onClick={() => setMobileOpen(false)}><X size={24} /></button>
            <nav className="mt-16 flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/solutions" onClick={() => setMobileOpen(false)}>Solutions</Link>
              <Link href="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
              <Link href="/newsroom" onClick={() => setMobileOpen(false)}>Newsroom</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-4 inline-block bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-6 py-3 rounded-full w-fit">Talk to Sales</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
