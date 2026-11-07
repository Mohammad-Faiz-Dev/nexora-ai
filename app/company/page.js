export default function CompanyPage() {
  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Company</h1>
      <p className="text-lg text-muted mb-8">
        Nexora is a fictional product created for this portfolio demonstration. It exists to show how an enterprise document-workflow tool might be presented online.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl mb-3">Purpose</h2>
        <p className="text-muted">Operations teams spend time extracting and checking fields from documents before those records can move into finance or procurement systems. The product story is about assisting that review while keeping a person responsible for approval and an activity trail of what happened.</p>
      </section>
      <section>
        <h2 className="text-2xl mb-3">What is not claimed</h2>
        <p className="text-muted text-sm">No customers, funding, offices, certifications, or performance metrics are stated. The site does not process real documents or call an external model.</p>
      </section>
    </div>
  );
}
