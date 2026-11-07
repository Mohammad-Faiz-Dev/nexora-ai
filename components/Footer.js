import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="16" height="16" stroke="#C45C26" strokeWidth="1.5" />
              <path d="M5 9h8M9 5v8" stroke="#111" strokeWidth="1.5" />
            </svg>
            <span className="font-display text-lg">Nexora</span>
          </div>
          <p className="text-muted">Document workflows for operations teams.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Product</div>
          <Link href="/product" className="block hover:text-accent">Overview</Link>
          <Link href="/#demo" className="block hover:text-accent">Workflow demo</Link>
        </div>
        <div>
          <div className="font-medium mb-2">Company</div>
          <Link href="/company" className="block hover:text-accent">About</Link>
          <Link href="/developers" className="block hover:text-accent">Developers</Link>
          <Link href="/walkthrough" className="block hover:text-accent">Walkthrough</Link>
        </div>
        <div>
          <div className="font-medium mb-2">Notice</div>
          <p className="text-xs text-muted">Fictional portfolio demo. Not a real product or company. No documents are processed by a live model.</p>
        </div>
      </div>
      <div className="border-t border-rule py-6 text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} Nexora (demo).</p>
        <p className="mt-1">Website by <a href="https://mohammadfaiz.dev" className="underline">Mohammad Faiz</a></p>
      </div>
    </footer>
  );
}
