import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ProductsSection } from '@/components/sections/products-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { QuoteSteps } from '@/components/sections/quote-steps';
import { ConfirmedSections, ContactSection } from '@/components/sections/contact-section';
import { ScrollMotion } from '@/components/layout/scroll-motion';
export default function Home() {
  return <><SiteHeader /><ScrollMotion><main id="conteudo"><HeroSection /><ProductsSection /><GallerySection /><QuoteSteps /><ConfirmedSections /><ContactSection /></main><SiteFooter /></ScrollMotion></>;
}
