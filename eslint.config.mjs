import nextPlugin from 'eslint-config-next';

// ESLint 9 uses flat config, and Next 16 dropped `next lint`, so the old
// .eslintrc.json no longer applies. eslint-config-next@16 exports a flat
// config array natively; `next/core-web-vitals` + `next/typescript` are both
// part of that default export, so this covers what the old file extended.
const eslintConfig = [
  ...nextPlugin,
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
