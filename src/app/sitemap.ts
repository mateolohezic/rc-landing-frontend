import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: 'https://rcgym.com.ar',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://rcgym.com.ar/planes',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://rcgym.com.ar/pileta',
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://rcgym.com.ar/running',
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
