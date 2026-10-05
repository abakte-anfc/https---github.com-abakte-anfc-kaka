import type { MetadataRoute } from 'next';
import { seo } from '@/lib/seo';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', ...(seo.url ? { allow: '/' } : { disallow: '/' }) }, ...(seo.url ? { sitemap: `${seo.url}/sitemap.xml` } : {}) };
}
