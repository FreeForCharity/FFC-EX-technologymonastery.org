import nextPlugin from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

// ESLint 9 uses flat config, and Next 16 dropped `next lint`, so the old
// .eslintrc.json no longer applies. That file extended BOTH
// `next/core-web-vitals` and `next/typescript`; eslint-config-next 16
// publishes those as separate flat-config entrypoints, and the base export
// does not include the TypeScript set. Spreading all three keeps coverage
// identical to the .eslintrc.json this replaces -- verified with
// `eslint --print-config`, which shows @typescript-eslint rules present
// (they are absent from the base export alone).
const eslintConfig = [
  ...nextPlugin,
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      'react/no-unescaped-entities': 'off',

      // New in react-hooks 7 (shipped with eslint-config-next 16). It fires on
      // CookieConsent and GoogleTagManager, which read localStorage inside an
      // effect and then setState — the standard way to pick up client-only
      // state without a hydration mismatch on a statically exported site.
      // Reworking that is a behaviour change on a live site and does not
      // belong in a dependency bump, so it stays visible as a warning rather
      // than being silenced or hastily "fixed" here.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
