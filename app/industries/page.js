'use client';

import { useState } from 'react';

const industries = ['All', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Government'];

const cases = [
  { industry: 'Finance', title: 'Risk modelling at scale', desc: 'Reduced fraud losses by 34% for a top-10 global bank.' },
  { industry: 'Healthcare', title: 'Clinical decision support', desc: 'Cut diagnostic turnaround time by 60% across 40 hospitals.' },
  { industry: 'Retail', title: 'Demand forecasting', desc: 'Improved inventory accuracy and reduced stockouts by 28%.' },
  { industry: 'Manufacturing', title: 'Predictive maintenance', desc: 'Avoided 12 hours of unplanned downtime per month.' },
  { industry: 'Government', title: 'Citizen services automation', desc: 'Automated 70% of routine inquiries with full auditability.' },
];

export default function IndustriesPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? cases : cases.filter((c) => c.industry === filter);

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Industries</h1>
      <p className="opacity-70 mb-10">Proven outcomes across regulated and high-stakes environments.</p>
      <div className="flex gap-2 flex-wrap mb-10">
        {industries.map((i) => (
          <button key={i} onClick={() => setFilter(i)} className={`px-4 py-2 rounded-full text-sm border ${filter === i ? 'bg-white text-ink' : 'border-white/20 hover:bg-white/5'}`}>
            {i}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">{c.industry}</div>
            <h3 className="text-xl font-medium mb-2">{c.title}</h3>
            <p className="opacity-70 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
