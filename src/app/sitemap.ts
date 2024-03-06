import { APP_LINKS, REGISTRATION_ROUTE } from '@/constants/app';
import { MetadataRoute } from 'next';

export default function siemap(): MetadataRoute.Sitemap {
  return [...APP_LINKS, REGISTRATION_ROUTE].map(({ href }) => ({ url: `${process.env.NEXT_PUBLIC_BASE_URL}${href}` }));
}
