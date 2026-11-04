export default function SolutionsPage() {
  const items = [
    { id: 'agents', title: 'AI Agents', desc: 'Deploy autonomous agents that reason, plan and act across your systems with full observability and human oversight.', capabilities: ['Multi-agent orchestration', 'Tool use & API calling', 'Audit trails & approvals', 'Fine-tuned domain models'] },
    { id: 'data', title: 'Data Platform', desc: 'A governed lakehouse that unifies batch and streaming data with enterprise-grade security.', capabilities: ['Real-time ingestion', 'Data quality & lineage', 'Feature store', 'Open formats'] },
    { id: 'cloud', title: 'Cloud', desc: 'Purpose-built infrastructure for AI training and inference across AWS, Azure and GCP.', capabilities: ['GPU clusters', 'Cost optimisation', 'Hybrid deployment', 'SLA-backed'] },
    { id: 'security', title: 'Cybersecurity', desc: 'Protect models, data and endpoints with continuous monitoring and zero-trust controls.', capabilities: ['Model security', 'Data loss prevention', 'Threat detection', 'Compliance automation'] },
    { id: 'consulting', title: 'Consulting', desc: 'Strategy, implementation and change management from practitioners who have done this at scale.', capabilities: ['Roadmap design', 'Proof of value', 'Productionisation', 'Enablement'] },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Solutions</h1>
      <p className="opacity-70 text-lg mb-16 max-w-2xl">End-to-end capabilities that let enterprises move from experiment to production with confidence.</p>
      <div className="space-y-20">
        {items.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-3xl font-medium mb-3">{s.title}</h2>
            <p className="opacity-80 mb-6 max-w-3xl">{s.desc}</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.capabilities.map((c) => (
                <li key={c} className="glass rounded-xl px-4 py-3 text-sm">{c}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
