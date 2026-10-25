/**
 * Analytics tracking dispatcher
 * Safe wrapper for Google Analytics (gtag) or lightweight logging
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | 'click_whatsapp'
  | 'click_category'
  | 'click_marketplace'
  | 'click_maps'
  | 'click_instagram'
  | 'click_tiktok'
  | 'submit_collab_form';

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters?: Record<string, unknown>
): void {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters);
    }
    // Also log in development for debugging
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event: ${eventName}]`, parameters);
    }
  } catch (error) {
    console.error('Failed to log event', error);
  }
}

