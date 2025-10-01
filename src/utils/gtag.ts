// Google Analytics 4 이벤트 추적 유틸리티

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// GA4 이벤트 추적
export const trackEvent = (action: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'engagement',
      ...parameters,
    });
  }
};

// 광고 클릭 추적
export const trackAdClick = (adId: string, adData: { brand?: string; cta?: string }) => {
  trackEvent('ad_click', {
    ad_id: adId,
    ad_brand: adData.brand,
    ad_cta: adData.cta,
    event_category: 'advertising',
    event_label: 'ad_click',
  });
};

// 광고 조회 추적
export const trackAdView = (adId: string, adData: { brand?: string }) => {
  trackEvent('ad_view', {
    ad_id: adId,
    ad_brand: adData.brand,
    event_category: 'advertising',
    event_label: 'ad_view',
  });
};

// 포스트 좋아요 추적
export const trackPostLike = (postId: string, isLiked: boolean) => {
  trackEvent('post_like', {
    post_id: postId,
    action: isLiked ? 'like' : 'unlike',
    event_category: 'engagement',
  });
};

// 포스트 조회 추적
export const trackPostView = (postId: string) => {
  trackEvent('post_view', {
    post_id: postId,
    event_category: 'engagement',
  });
};

// 페이지 뷰 추적
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
