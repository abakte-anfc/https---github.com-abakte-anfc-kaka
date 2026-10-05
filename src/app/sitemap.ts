import type { MetadataRoute } from 'next';
import { seo } from '@/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
  return seo.url ? [{ url: seo.url, changeFrequency: 'monthly', priority: 1 }] : [];
}
