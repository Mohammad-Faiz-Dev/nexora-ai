'use client';

import { useState } from 'react';

const documents = {
  invoice: {
    name: 'Invoice INV-1042',
    type: 'Invoice',
    fields: [
      { key: 'vendor', label: 'Vendor', value: 'Northwind Supplies', confidence: 0.96 },
      { key: 'amount', label: 'Amount', value: '₹48,250', confidence: 0.91 },
      { key: 'date', label: 'Date', value: '12 Oct 2026', confidence: 0.98 },
      { key: 'po', label: 'PO reference', value: 'PO-8821', confidence: 0.74, flagged: true },
    ],
  },
  po: {
    name: 'Purchase order PO-8821',
    type: 'Purchase order',
    fields: [
      { key: 'buyer', label: 'Buyer', value: 'Acme Ops', confidence: 0.95 },
      { key: 'total', label: 'Total', value: '₹1,12,000', confidence: 0.89 },
      { key: 'delivery', label: 'Delivery', value: '18 Nov 2026', confidence: 0.93 },
      { key: 'terms', label: 'Payment terms', value: 'Net 30', confidence: 0.68, flagged: true },
    ],
  },
  onboarding: {
    name: 'Supplier form SF-17',
    type: 'Supplier onboarding',
    fields: [
      { key: 'name', label: 'Legal name', value: 'Rivera Components Pvt Ltd', confidence: 0.97 },
      { key: 'gst', label: 'GSTIN', value: '07AABCR1234A1Z5', confidence: 0.88 },
      { key: 'bank', label: 'Bank account', value: 'HDFC ···4521', confidence: 0.71, flagged: true },
      { key: 'contact', label: 'Contact', value: 'ops@rivera.example', confidence: 0.94 },
    ],
  },
};

export default function WorkflowDemo() {
  const [docId, setDocId] = useState('invoice');
  const [fields, setFields] = useState(documents.invoice.fields);
  const [approved, setApproved] = useState(false);
  const [log, setLog] = useState(['Document received', 'Fields extracted (simulated)']);

  const select = (id) => {
    setDocId(id);
    setFields(documents[id].fields.map((f) => ({ ...f })));
    setApproved(false);
    setLog(['Document received', 'Fields extracted (simulated)']);
  };

  const updateField = (key, value) => {
    setFields((fs) => fs.map((f) => (f.key === key ? { ...f, value, flagged: false } : f)));
  };

  const approve = () => {
    setApproved(true);
    setLog((l) => [...l, 'Reviewed and approved']);
  };

  const reset = () => select(docId);

  const doc = documents[docId];

  return (
    <div id="demo" className="border border-rule bg-white">
      <div className="px-4 py-3 border-b border-rule flex items-center justify-between text-sm">
        <span className="font-medium">Interactive demo · synthetic data</span>
        <span className="text-xs text-muted font-mono">extraction simulated locally</span>
      </div>
      <div className="grid md:grid-cols-[200px_1fr] min-h-[420px]">
        <div className="border-r border-rule p-3 space-y-1">
          {Object.entries(documents).map(([id, d]) => (
            <button
              key={id}
              onClick={() => select(id)}
              className={`w-full text-left px-3 py-2 text-sm ${docId === id ? 'bg-canvas border-l-2 border-accent' : 'hover:bg-canvas/60'}`}
            >
              {d.name}
            </button>
          ))}
        </div>
        <div className="p-4">
          <div className="text-xs text-muted mb-1">{doc.type}</div>
          <h3 className="text-xl mb-4">{doc.name}</h3>
          <div className="space-y-3">
            {fields.map((f) => (
              <div key={f.key} className="grid grid-cols-[140px_1fr_80px] gap-3 items-center text-sm">
                <label htmlFor={f.key} className="text-muted">{f.label}</label>
                <input
                  id={f.key}
                  value={f.value}
                  onChange={(e) => updateField(f.key, e.target.value)}
                  className={`border px-2 py-1 ${f.flagged ? 'border-accent' : 'border-rule'}`}
                />
                <span className="text-xs font-mono text-right">{Math.round(f.confidence * 100)}%</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button onClick={approve} disabled={approved} className="bg-accent text-white px-4 py-2 text-sm disabled:opacity-50">
              {approved ? 'Approved' : 'Approve example'}
            </button>
            <button onClick={reset} className="border border-ink px-4 py-2 text-sm">Reset</button>
          </div>
          <div className="mt-6 text-xs text-muted">
            <div className="font-medium mb-1">Activity</div>
            <ul className="space-y-0.5 font-mono">
              {log.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
