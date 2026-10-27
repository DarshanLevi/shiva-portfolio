// The brands behind the doors on /branding; each has its own page at /branding/<slug>.
// TODO(content): placeholders until the real projects arrive in contents/ (names, colours, marks).

export type BrandMarkShape = 'ring' | 'square' | 'triangle' | 'bars';

export interface Brand {
  slug: string;
  name: string;
  /** Short line under the name on the brand's page. */
  tagline: string;
  /** The brand's key colour: the light behind its door and on its page (white text must stay readable on it). */
  color: string;
  mark: BrandMarkShape;
}

export const brands: Brand[] = [
  { slug: 'brand-01', name: 'Brand 01', tagline: 'Placeholder project', color: '#d6248f', mark: 'ring' },
  { slug: 'brand-02', name: 'Brand 02', tagline: 'Placeholder project', color: '#2a5bd7', mark: 'square' },
  { slug: 'brand-03', name: 'Brand 03', tagline: 'Placeholder project', color: '#0e8f86', mark: 'triangle' },
  { slug: 'brand-04', name: 'Brand 04', tagline: 'Placeholder project', color: '#c2410c', mark: 'bars' },
];
