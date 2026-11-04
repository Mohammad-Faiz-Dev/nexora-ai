export default function NewsroomPage() {
  const posts = [
    { cat: 'Product', title: 'Nexora Agents 2.0: multi-agent orchestration at scale', date: '12 Oct 2025' },
    { cat: 'Research', title: 'How we achieved 99.99% uptime for production AI workloads', date: '28 Sep 2025' },
    { cat: 'Company', title: 'Nexora opens Singapore office', date: '15 Sep 2025' },
    { cat: 'Customer', title: 'Case study: transforming risk management at a global bank', date: '02 Sep 2025' },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Newsroom</h1>
      <p className="opacity-70 mb-10">Product updates, research and company news.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <div key={p.title} className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">{p.cat}</div>
            <h3 className="text-lg font-medium mb-2">{p.title}</h3>
            <div className="text-sm opacity-60">{p.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
