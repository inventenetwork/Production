import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://inventenetwork.com';

/**
 * Normalizes route pathnames into canonical URLs:
 * - Root path '/' becomes 'https://inventenetwork.com/'
 * - Any subpath like '/education/' or '/education' becomes 'https://inventenetwork.com/education'
 * - Strips query strings and hash anchors so search engines index the definitive URL
 */
export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.replace(/\/+$/, '');
  if (!cleanPath || cleanPath === '') {
    return `${BASE_URL}/`;
  }
  return `${BASE_URL}${cleanPath}`;
}

export default function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(pathname);

    // 1. Update or create <link rel="canonical">
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 2. Update Open Graph and Twitter URL tags
    const ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', canonicalUrl);
    }

    const twitterUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="twitter:url"], meta[name="twitter:url"]');
    if (twitterUrlMeta) {
      twitterUrlMeta.setAttribute('content', canonicalUrl);
    }
  }, [pathname]);

  return null;
}
