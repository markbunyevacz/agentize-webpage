/**
 * Security utilities for safe external link handling and input validation
 */

/**
 * Validates if a URL is safe to open (http/https only)
 */
export const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Safely opens an external URL with security precautions
 * - Validates URL protocol (http/https only)
 * - Uses noopener,noreferrer for security
 */
export const safeOpenExternal = (url: string): void => {
  if (!isValidUrl(url)) {
    console.warn('Attempted to open invalid URL:', url);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Creates a safe external link element with security attributes
 */
export const createSafeLink = (url: string, text: string): HTMLAnchorElement | null => {
  if (!isValidUrl(url)) {
    console.warn('Attempted to create link with invalid URL:', url);
    return null;
  }

  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = text;
  
  return link;
};