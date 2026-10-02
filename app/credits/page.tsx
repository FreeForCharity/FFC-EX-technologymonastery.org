import { Metadata } from 'next';
import Photo from '@/components/Photo';
import { photoCredits } from '@/lib/photo-credits';

export const metadata: Metadata = {
  title: 'Photo Credits - The Technology Monastery',
  description:
    'Attribution for the public-domain and Creative Commons photographs used on the Technology Monastery website.',
};

export default function Credits() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Photo credits</h1>
            <p className="text-xl text-gray-300">
              The photographers whose work appears on this site, and the licences they chose.
            </p>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <p className="leading-relaxed">
                The photographs on this site are public domain or released under Creative Commons
                licences that allow reuse with attribution. They show the region around the planned
                campus (Cook Forest State Park, Clear Creek State Park, the Clarion River and the
                Allegheny National Forest) and generic scenes of people working together. None shows
                the project property. Each image was resized and re-encoded for the web; the two hero
                backgrounds were also cropped and softened slightly to sit under a dark overlay.
              </p>
            </div>

            <ul className="space-y-6 list-none p-0">
              {photoCredits.map((c) => (
                <li
                  key={c.file}
                  className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 border border-purple-500/20 rounded-lg p-4 bg-[#15102a]"
                >
                  <Photo
                    src={`/images/photos/${c.file}`}
                    width={320}
                    height={240}
                    alt={c.subject}
                    className="w-full sm:w-40 rounded object-cover aspect-[4/3]"
                  />
                  <div className="text-sm space-y-1">
                    <h2 className="text-lg font-bold text-white">
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition underline decoration-purple-500/50"
                      >
                        {c.title}
                      </a>
                    </h2>
                    <p>{c.subject}</p>
                    <p>
                      <span className="text-white font-semibold">Author:</span>{' '}
                      <a
                        href={c.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 transition underline"
                      >
                        {c.author}
                      </a>
                    </p>
                    <p>
                      <span className="text-white font-semibold">Licence:</span>{' '}
                      <a
                        href={c.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 transition underline"
                      >
                        {c.license}
                      </a>
                    </p>
                    <p>
                      <span className="text-white font-semibold">Source:</span>{' '}
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 transition underline break-all"
                      >
                        {c.sourceUrl.replace('https://', '')}
                      </a>
                    </p>
                    <p className="text-gray-400">
                      File: <code className="text-gray-300">{c.file}</code>
                      {c.variants.length > 0 && (
                        <>
                          {' '}
                          (also <code className="text-gray-300">{c.variants.join(', ')}</code>)
                        </>
                      )}
                      {' · '}Used on: {c.usedOn.join(', ')}
                      {' · '}
                      {c.modifications}.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
