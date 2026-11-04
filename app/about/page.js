export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-semibold mb-6">About Nexora</h1>
      <p className="text-lg opacity-80 mb-12">We exist to make enterprise AI reliable, governable and valuable. Founded by practitioners from OpenAI, Google DeepMind and McKinsey, we partner with the world’s most demanding organisations.</p>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-6">Leadership</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {['Aarav Mehta — CEO', 'Priya Nair — CTO', 'James Chen — CPO'].map((p) => (
            <div key={p} className="glass rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 mx-auto mb-3" />
              <div className="font-medium">{p.split('—')[0]}</div>
              <div className="text-sm opacity-70">{p.split('—')[1]}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-6">Timeline</h2>
        <div className="space-y-6 border-l border-white/20 pl-6">
          <div><div className="font-medium">2019</div><div className="opacity-70">Founded in Bengaluru</div></div>
          <div><div className="font-medium">2021</div><div className="opacity-70">First enterprise deployments in finance</div></div>
          <div><div className="font-medium">2023</div><div className="opacity-70">Expanded to London, New York, Singapore</div></div>
          <div><div className="font-medium">2025</div><div className="opacity-70">400+ enterprise customers</div></div>
        </div>
      </section>
    </div>
  );
}
