import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 bg-navy/50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        <div>
          <div className="text-lg font-semibold mb-4">Nexora AI</div>
          <p className="opacity-70">Intelligence engineered for the enterprise.</p>
        </div>
        <div>
          <div className="font-medium mb-3">Solutions</div>
          <div className="space-y-2 opacity-70">
            <div>AI Agents</div><div>Data Platform</div><div>Cloud</div><div>Cybersecurity</div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <div className="space-y-2 opacity-70">
            <Link href="/about">About</Link><div>Careers</div><div>Newsroom</div><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-medium mb-3">Offices</div>
          <div className="space-y-2 opacity-70">
            <div>Bengaluru</div><div>London</div><div>New York</div><div>Singapore</div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-3">Certifications</div>
          <div className="flex flex-wrap gap-2 text-xs opacity-70">
            <span className="border border-white/20 px-2 py-1 rounded">ISO 27001</span>
            <span className="border border-white/20 px-2 py-1 rounded">SOC 2</span>
            <span className="border border-white/20 px-2 py-1 rounded">GDPR</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Nexora AI. All rights reserved.</p>
        <p className="mt-1">Website by <a href="https://mohammadfaiz.dev" className="underline">Mohammad Faiz</a></p>
      </div>
    </footer>
  );
}
