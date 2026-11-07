import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Product</h1>
      <p className="text-lg text-muted mb-8">
        Nexora is a proposed system for turning incoming operational documents into reviewed, approved records with an activity trail.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl mb-3">Stages</h2>
        <ol className="list-decimal pl-5 space-y-2 text-muted">
          <li>Documents arrive (email, upload, or system).</li>
          <li>Fields are extracted and presented for review.</li>
          <li>Low-confidence or mismatched values are flagged.</li>
          <li>A person edits and approves.</li>
          <li>Approved data is available downstream with a history of changes.</li>
        </ol>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl mb-3">What is demonstrated here</h2>
        <p className="text-muted">The interactive demo on the homepage shows field review, editing a flagged value, and approval with a local activity log. Extraction, routing rules and downstream delivery are described, not executed.</p>
      </section>
      <Link href="/#demo" className="border border-ink px-5 py-3 text-sm inline-block">Try the demo</Link>
    </div>
  );
}
