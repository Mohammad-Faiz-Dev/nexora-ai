import Link from 'next/link';
import WorkflowDemo from '../components/WorkflowDemo';

export default function Home() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl leading-tight">Move documents forward.<br />Keep people in control.</h1>
            <p className="mt-6 text-lg text-muted max-w-md">
              Nexora helps operations teams turn incoming documents into reviewed, traceable workflows—from extraction to approval.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/product" className="bg-ink text-canvas px-5 py-3 text-sm">Explore the product</Link>
              <a href="#demo" className="border border-ink px-5 py-3 text-sm">Try the workflow demo</a>
            </div>
          </div>
          <div className="border border-rule bg-white p-4 text-sm">
            <div className="flex justify-between text-xs text-muted mb-3">
              <span>Incoming</span>
              <span>Review</span>
              <span>Approved</span>
            </div>
            <div className="space-y-2">
              <div className="border border-rule p-3 flex justify-between">
                <span>INV-1042.pdf</span>
                <span className="text-xs text-muted">3 fields flagged</span>
              </div>
              <div className="border border-rule p-3 flex justify-between">
                <span>PO-8821.pdf</span>
                <span className="text-xs text-muted">awaiting review</span>
              </div>
              <div className="border border-rule p-3 flex justify-between bg-canvas">
                <span>SF-17.pdf</span>
                <span className="text-xs">approved</span>
              </div>
            </div>
            <div className="mt-4 text-xs font-mono text-muted">Activity · synthetic</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-rule">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-6">Documents arrive. Someone has to check them.</h2>
          <div className="space-y-4 text-muted">
            <p>Invoices, purchase orders and supplier forms arrive in different formats. Someone extracts the fields, flags exceptions, and decides what can move forward.</p>
            <p>Nexora proposes extracted values and routes the ones that need attention. A person still reviews and approves. The activity is recorded so the path from intake to approved output stays traceable.</p>
            <p className="text-sm">This site demonstrates the review step with synthetic data. Extraction is simulated locally.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-rule">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-6">Workflow demo</h2>
          <p className="text-muted mb-6 max-w-2xl">Select a document, inspect the extracted fields, edit a flagged value, and approve the example. Nothing leaves the browser.</p>
          <WorkflowDemo />
        </div>
      </section>

      <section className="py-16 px-4 border-t border-rule">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-4">What the product proposes</h2>
            <ul className="space-y-3 text-muted">
              <li><strong className="text-ink">Extraction</strong> — structured fields from varied document layouts.</li>
              <li><strong className="text-ink">Review rules</strong> — flag low-confidence or mismatched values for a person.</li>
              <li><strong className="text-ink">Approval routing</strong> — send exceptions to the right reviewer.</li>
              <li><strong className="text-ink">Activity history</strong> — keep a record of what was changed and approved.</li>
            </ul>
            <p className="mt-4 text-sm">These are proposed product capabilities. Only the review interface is implemented in this demo.</p>
          </div>
          <div className="border border-rule p-6">
            <div className="text-sm font-mono text-muted mb-2">Proposed flow</div>
            <div className="space-y-2 text-sm">
              <div>Document intake</div>
              <div className="pl-4">→ extraction</div>
              <div className="pl-8">→ human review</div>
              <div className="pl-12">→ approved output</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-rule">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-4">See the review step in context</h2>
          <p className="text-muted mb-8">Explore the product pages or request a walkthrough of the demo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/product" className="bg-ink text-canvas px-5 py-3 text-sm">Explore the product</Link>
            <Link href="/walkthrough" className="border border-ink px-5 py-3 text-sm">Request a walkthrough</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
