import type { MetadataRoute } from 'next'
import { baseUrl } from './layout'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
    
  ]
}