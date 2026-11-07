import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Solutions</h1>
      <p className="text-lg text-muted mb-10">Focused on two operational contexts. No customer results are claimed.</p>

      <section className="mb-12">
        <h2 className="text-2xl mb-3">Finance operations</h2>
        <p className="text-muted mb-3">Invoices and credit notes arrive with varying layouts. Reviewers check vendor, amount, date and purchase-order reference before posting.</p>
        <ul className="list-disc pl-5 text-sm text-muted space-y-1">
          <li>Inputs: PDF or image invoices</li>
          <li>Review decisions: amount match, PO validity, tax line</li>
          <li>Intended output: approved invoice record for the accounting system</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-3">Procurement</h2>
        <p className="text-muted mb-3">Purchase orders and supplier onboarding forms need consistent fields and a clear approval path before a vendor is activated or an order is released.</p>
        <ul className="list-disc pl-5 text-sm text-muted space-y-1">
          <li>Inputs: PO documents, supplier forms</li>
          <li>Review decisions: delivery terms, bank details, compliance fields</li>
          <li>Intended output: approved supplier or PO record</li>
        </ul>
      </section>

      <Link href="/#demo" className="border border-ink px-5 py-3 text-sm inline-block">See the review interface</Link>
    </div>
  );
}
