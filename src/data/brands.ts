// The brands behind the doors on /branding; each has its own page at /branding/<slug>.
// TODO(content): placeholders until the real projects arrive in contents/ (names, colours, marks).

import type { ImageMetadata } from 'astro';
import cover01 from '../assets/projects/brand-01.jpg';
import cover02 from '../assets/projects/brand-02.jpg';
import cover03 from '../assets/projects/brand-03.jpg';
import cover04 from '../assets/projects/brand-04.jpg';

export type BrandMarkShape = 'ring' | 'square' | 'triangle' | 'bars';

export interface Brand {
  slug: string;
  name: string;
  /** Short line under the name on the brand's page. */
  tagline: string;
  /** The brand's key colour: the light behind its door and on its page (white text must stay readable on it). */
  color: string;
  mark: BrandMarkShape;
  /** The project's artwork in the gallery (placeholder photo until the real project images arrive). */
  cover: ImageMetadata;
}

// Placeholder artworks, free to use (Unsplash License): brand-01 Ernest Brillo (clouds at sunset),
// brand-02 Cadu de Castro Alves (mountain lake), brand-03 Joel Vodell (waves meeting sand),
// brand-04 Sven Pieren (mountain ridges at dusk). TODO(content): replace with the real projects' images.

export const brands: Brand[] = [
  { slug: 'brand-01', name: 'Brand 01', tagline: 'Placeholder project', color: '#d6248f', mark: 'ring', cover: cover01 },
  { slug: 'brand-02', name: 'Brand 02', tagline: 'Placeholder project', color: '#2a5bd7', mark: 'square', cover: cover02 },
  { slug: 'brand-03', name: 'Brand 03', tagline: 'Placeholder project', color: '#0e8f86', mark: 'triangle', cover: cover03 },
  { slug: 'brand-04', name: 'Brand 04', tagline: 'Placeholder project', color: '#c2410c', mark: 'bars', cover: cover04 },
];
