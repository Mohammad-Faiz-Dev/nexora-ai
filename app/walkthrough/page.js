'use client';

import { useState } from 'react';

export default function WalkthroughPage() {
  const [form, setForm] = useState({ name: '', email: '', note: '' });
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const eobj = {};
    if (!form.name.trim()) eobj.name = 'Name is required';
    if (!form.email.includes('@')) eobj.email = 'Valid email is required';
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    setPreview(true);
  };

  if (preview) {
    return (
      <div className="py-16 px-4 max-w-xl mx-auto">
        <h1 className="text-3xl mb-4">Inquiry preview</h1>
        <p className="mb-4"><strong>Nothing was sent.</strong> No email, no storage, no follow-up has been triggered.</p>
        <div className="border border-rule bg-white p-4 text-sm space-y-1">
          <div>Name: {form.name}</div>
          <div>Email: {form.email}</div>
          <div>Note: {form.note || '—'}</div>
        </div>
        <p className="text-xs text-muted mt-4">This form is a layout demonstration only.</p>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-xl mx-auto">
      <h1 className="text-4xl mb-4">Request a walkthrough</h1>
      <p className="text-muted mb-8">Preview an inquiry. No message is delivered.</p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">Name</label>
          <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-rule px-3 py-2" />
          {errors.name && <p className="text-accent text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-rule px-3 py-2" />
          {errors.email && <p className="text-accent text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="note" className="block text-sm mb-1">Note (optional)</label>
          <textarea id="note" rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="w-full border border-rule px-3 py-2" />
        </div>
        <button type="submit" className="bg-ink text-canvas px-5 py-3 text-sm">Preview inquiry</button>
      </form>
    </div>
  );
}
