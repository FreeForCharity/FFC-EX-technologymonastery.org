// Single source of truth for the site's origin + base path, shared by
// next.config.js (CJS) and lib/site-config.ts (TS re-export).
//
// The committed public/CNAME file is the custom-domain source of truth
// (GitHub Pages standard — the binding, the artifact, and the build all key
// off the same file). The CUSTOM_DOMAIN env var applies only in build
// contexts where public/CNAME is absent (e.g. the deploy workflow's
// custom_domain preview input on a branch without the file).
//   no CNAME -> GitHub Pages project URL:
//               basePath /FFC-EX-technologymonastery.org
//   CNAME    -> custom-domain build (cutover, #726): basePath '',
//               origin https://<domain>
// Development always serves from the root.
// This file must stay CJS so next.config.js can load it, which is why the
// require() calls below are exempted rather than converted to imports.
/* eslint-disable @typescript-eslint/no-require-imports */
const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');
/* eslint-enable @typescript-eslint/no-require-imports */

const repoBase = '/FFC-EX-technologymonastery.org';
const cnamePath = join(__dirname, '..', 'public', 'CNAME');
const fileCname = existsSync(cnamePath) ? readFileSync(cnamePath, 'utf8').trim() : '';
const customDomain = fileCname || process.env.CUSTOM_DOMAIN || '';

const isProd = process.env.NODE_ENV === 'production';
const basePath = customDomain ? '' : isProd ? repoBase : '';
const siteOrigin = customDomain
  ? `https://${customDomain}`
  : `https://freeforcharity.github.io${repoBase}`;

module.exports = { basePath, siteOrigin, customDomain };
