import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-semibold mb-4">404</h1>
      <p className="opacity-70 mb-8">This page does not exist.</p>
      <Link href="/" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white">Back to home</Link>
    </div>
  );
}
