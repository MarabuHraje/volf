// Central configuration for site-wide constants
export const siteConfig = {
  name: 'Rybářské a chovatelské služby Volf',
  // Prefer explicit env var, fallback to Vercel provided URL or localhost
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://volf-rybarsky-web.vercel.app',
  defaultLocale: 'cs-CZ',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '{{EMAIL}}',
  telephone: '{{PHONE}}'
}

export function absoluteUrl(path: string = '/') {
  return siteConfig.url.replace(/\/$/, '') + path
}
