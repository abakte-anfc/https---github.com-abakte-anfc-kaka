import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { seo } from '@/lib/seo';
import './globals.css';
const bodyFont = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });
const titleFont = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-heading', display: 'swap' });
export const metadata: Metadata = {
  title: seo.title, description: seo.description,
  metadataBase: seo.url ? new URL(seo.url) : undefined,
  alternates: seo.url ? { canonical: seo.url } : undefined,
  openGraph: { title: seo.title, description: seo.description, locale: 'pt_BR', type: 'website', siteName: 'KaKa Pneus & Rodas', ...(seo.url ? { url: seo.url } : {}) },
  robots: { index: Boolean(seo.url), follow: Boolean(seo.url) },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${bodyFont.variable} ${titleFont.variable}`}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>{children}</body></html>;
}
