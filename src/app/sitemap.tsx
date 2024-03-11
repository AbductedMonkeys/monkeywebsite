import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://abductedmonkeys.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://abductedmonkeys.com/lockjaw',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
        url: 'https://abductedmonkeys.com/tornadotown',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
    {
      url: 'https://abductedmonkeys.com/teams',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]
}