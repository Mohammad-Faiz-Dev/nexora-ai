export default function DevelopersPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Developers</h1>
      <p className="text-lg text-muted mb-8">
        The demo workflow is entirely local. Below is an illustrative shape of the data a real implementation might exchange. No API or package exists for this demo.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl mb-3">Example document object</h2>
        <pre className="bg-white border border-rule p-4 text-sm font-mono overflow-x-auto">{`{
  "id": "inv-1042",
  "type": "invoice",
  "status": "in_review",
  "fields": [
    { "key": "vendor", "value": "Northwind Supplies", "confidence": 0.96 },
    { "key": "amount", "value": "48250", "confidence": 0.91, "flagged": false },
    { "key": "po", "value": "PO-8821", "confidence": 0.74, "flagged": true }
  ],
  "activity": ["extracted", "flagged_for_review"]
}`}</pre>
        <p className="text-xs text-muted mt-2">Illustrative only. No endpoint accepts this payload.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-3">What a real integration would require</h2>
        <ul className="list-disc pl-5 text-muted space-y-1 text-sm">
          <li>Authenticated document intake</li>
          <li>Extraction service with confidence scores</li>
          <li>Review queue and approval actions</li>
          <li>Webhook or export of approved records</li>
        </ul>
      </section>
    </div>
  );
}
