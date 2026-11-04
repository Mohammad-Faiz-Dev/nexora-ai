import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Nexora AI | Intelligence, engineered for enterprise',
  description: 'Premium AI and enterprise technology platform. AI Agents, Data Platform, Cloud, Cybersecurity and Consulting trusted by 400+ global enterprises.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
