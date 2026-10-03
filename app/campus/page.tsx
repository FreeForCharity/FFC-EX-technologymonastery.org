import type { Metadata } from 'next';
import Link from 'next/link';
import { placeHref, siteConfig } from '@/lib/site.config';

// The place used to be called "the campus" and lived at /campus/. That URL was
// shared with funders and partners, so on a static host it must keep working:
// this page is a client-free redirect (meta refresh) plus a visible link, and it
// is excluded from search indexing so only the new route is canonical.
const target = placeHref();

export const metadata: Metadata = {
  title: `This page has moved - ${siteConfig.name}`,
  description: `The ${siteConfig.place.noun} page has moved to ${target}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: target },
};

export default function CampusRedirect() {
  return (
    <>
      {/* Rendered here rather than through `metadata.other`, which emits
          name="refresh" and is ignored by browsers; the pragma needs http-equiv. */}
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <section className="pt-36 pb-20 min-h-[60vh] bg-[#0f0a1e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">This page has moved</h1>
          <p className="text-lg text-gray-300 mb-8">
            The {siteConfig.place.noun} page now lives at{' '}
            <Link href={target} className="text-purple-300 underline hover:text-white">
              {target}
            </Link>
            . You should be taken there automatically.
          </p>
          <Link
            href={target}
            className="inline-block px-6 py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            This page has moved to {target}
          </Link>
        </div>
      </section>
    </>
  );
}
