'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '1000-5000', interest: 'AI Agents', message: '' });
  const [success, setSuccess] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    if (form.name && form.email.includes('@') && form.company) setSuccess(true);
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Talk to Sales</h1>
      <p className="opacity-70 mb-10">Tell us about your organisation and we’ll schedule a tailored briefing.</p>
      {success ? (
        <div className="glass rounded-2xl p-8 text-center">Thank you. A member of our enterprise team will reach out within one business day.</div>
      ) : (
        <form onSubmit={handle} className="space-y-5">
          <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400" />
          <input required type="email" placeholder="Work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400" />
          <input required placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-400" />
          <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none">
            <option>1-200</option><option>200-1000</option><option>1000-5000</option><option>5000+</option>
          </select>
          <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none">
            <option>AI Agents</option><option>Data Platform</option><option>Cloud</option><option>Cybersecurity</option><option>Consulting</option>
          </select>
          <textarea placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none" />
          <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 font-medium">Submit</button>
        </form>
      )}
    </div>
  );
}
