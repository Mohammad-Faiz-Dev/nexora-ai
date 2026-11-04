'use client';

import { useState } from 'react';

const jobs = [
  { title: 'Staff ML Engineer', dept: 'Engineering', loc: 'Bengaluru / Remote' },
  { title: 'Enterprise Account Executive', dept: 'Sales', loc: 'London' },
  { title: 'Solutions Architect', dept: 'Consulting', loc: 'New York' },
  { title: 'Security Engineer', dept: 'Engineering', loc: 'Singapore' },
  { title: 'Product Designer', dept: 'Design', loc: 'Bengaluru' },
];

export default function CareersPage() {
  const [dept, setDept] = useState('All');
  const depts = ['All', 'Engineering', 'Sales', 'Consulting', 'Design'];
  const filtered = dept === 'All' ? jobs : jobs.filter((j) => j.dept === dept);

  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Careers</h1>
      <p className="opacity-70 mb-10">Build systems that matter. Competitive compensation, equity and global mobility.</p>
      <div className="flex gap-2 mb-8">
        {depts.map((d) => (
          <button key={d} onClick={() => setDept(d)} className={`px-4 py-1.5 rounded-full text-sm border ${dept === d ? 'bg-white text-ink' : 'border-white/20'}`}>{d}</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map((j) => (
          <div key={j.title} className="glass rounded-xl px-6 py-4 flex justify-between items-center">
            <div>
              <div className="font-medium">{j.title}</div>
              <div className="text-sm opacity-70">{j.dept} · {j.loc}</div>
            </div>
            <button className="text-sm text-cyan-400">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
