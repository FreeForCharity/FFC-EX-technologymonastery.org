import { basePath } from './site-config';

// Prefix a public/ asset path with the deployment basePath so plain <img>
// and background references resolve on both the GitHub Pages project URL
// (/FFC-EX-technologymonastery.org/...) and the custom domain (/...).
// Use this for every image or static-asset reference (README rule).
export function assetPath(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${clean}`;
}
