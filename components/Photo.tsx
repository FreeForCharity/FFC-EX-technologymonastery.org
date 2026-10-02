import { assetPath } from '@/lib/asset-path';

interface PhotoProps {
  /** Path under public/, e.g. /images/photos/foo.webp */
  src: string;
  /** Descriptive alt text; pass "" for purely decorative images. */
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Optional smaller variant (path under public/) served below `breakpoint` px. */
  mobileSrc?: string;
  mobileWidth?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

// Plain <img> on purpose: the site is a static export with next/image
// optimisation disabled, and every asset path must go through assetPath().
export default function Photo({
  src,
  alt,
  width,
  height,
  className = '',
  mobileSrc,
  mobileWidth,
  loading = 'lazy',
  fetchPriority = 'auto',
}: PhotoProps) {
  const full = assetPath(src);
  const srcSet = mobileSrc && mobileWidth ? `${assetPath(mobileSrc)} ${mobileWidth}w, ${full} ${width}w` : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; see note above
    <img
      src={full}
      srcSet={srcSet}
      sizes={srcSet ? '100vw' : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
    />
  );
}
