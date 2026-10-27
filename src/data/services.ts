// The services shown on the home page. A service with an `href` has its own page and is
// clickable; the others aren't links until their page exists.
// TODO(content): confirm names from contents/.

export interface Service {
  slug: string;
  name: string;
  href?: string;
}

export const services: Service[] = [
  { slug: 'graphic-design', name: 'Graphic Design' },
  { slug: 'branding', name: 'Branding', href: '/branding' },
  { slug: 'video-editing', name: 'Video Editing' },
];
