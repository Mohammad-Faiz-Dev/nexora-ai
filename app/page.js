'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Bot, Database, Cloud, Shield, Users, BarChart3 } from 'lucide-react';

const solutions = [
  { icon: Bot, title: 'AI Agents', desc: 'Autonomous agents that execute complex enterprise workflows with full auditability.' },
  { icon: Database, title: 'Data Platform', desc: 'Unified lakehouse and real-time pipelines built for scale and governance.' },
  { icon: Cloud, title: 'Cloud', desc: 'Multi-cloud infrastructure optimised for AI workloads and cost efficiency.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust architecture and continuous threat detection across the stack.' },
  { icon: Users, title: 'Consulting', desc: 'From strategy to production: our experts accelerate your AI roadmap.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Decision intelligence that turns operational data into measurable outcomes.' },
];

function Counter({ end, suffix = '' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let s = 0;
        const step = end / 60;
        const t = setInterval(() => {
          s += step;
          if (s >= end) { setN(end); clearInterval(t); }
          else setN(Math.floor(s));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.25), transparent 40%), radial-gradient(circle at 70% 80%, rgba(34,211,238,0.2), transparent 40%)' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Intelligence, engineered for enterprise.
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            The platform global enterprises trust to deploy production-grade AI with governance, scale and measurable ROI.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-medium">Talk to Sales</Link>
            <Link href="/solutions" className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/5">Explore Solutions</Link>
          </div>
          <p className="mt-8 text-sm opacity-60">Trusted by 400+ global enterprises</p>
        </div>
      </section>

      <section className="py-12 border-y border-white/10 overflow-hidden">
        <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap opacity-50 text-sm font-medium">
          {['Stripe', 'NVIDIA', 'Accenture', 'Siemens', 'Unilever', 'HSBC', 'Reliance', 'Infosys'].map((c) => (
            <span key={c} className="px-4">{c}</span>
          ))}
          {['Stripe', 'NVIDIA', 'Accenture', 'Siemens', 'Unilever', 'HSBC', 'Reliance', 'Infosys'].map((c) => (
            <span key={c + '2'} className="px-4">{c}</span>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm uppercase tracking-widest text-cyan-400 mb-2">Solutions</div>
          <h2 className="text-4xl md:text-5xl font-semibold">Everything you need to operationalise AI</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6 hover:border-white/20 transition-all group">
              <s.icon className="text-cyan-400 mb-4" size={28} />
              <h3 className="text-xl font-medium mb-2">{s.title}</h3>
              <p className="opacity-70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div><div className="text-4xl md:text-5xl font-semibold text-cyan-400"><Counter end={2.1} />B</div><div className="mt-2 opacity-70">saved for clients</div></div>
          <div><div className="text-4xl md:text-5xl font-semibold text-cyan-400"><Counter end={99.99} />%</div><div className="mt-2 opacity-70">uptime</div></div>
          <div><div className="text-4xl md:text-5xl font-semibold text-cyan-400"><Counter end={120} />+</div><div className="mt-2 opacity-70">countries</div></div>
        </div>
      </section>

      <section className="py-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">Build your AI roadmap</h2>
        <p className="mt-4 opacity-70 max-w-xl mx-auto">Talk to our enterprise team and get a tailored assessment.</p>
        <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-medium">Talk to Sales</Link>
      </section>
    </div>
  );
}
