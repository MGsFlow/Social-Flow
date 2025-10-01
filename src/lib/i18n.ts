// 다국어 지원 설정

export const locales = ['ko', 'en'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'ko';

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
};

export const localeConfig = {
  ko: {
    name: '한국어',
    dir: 'ltr',
    hreflang: 'ko-KR',
  },
  en: {
    name: 'English',
    dir: 'ltr',
    hreflang: 'en-US',
  },
} as const;

// 언어별 메타데이터
export const getLocaleMetadata = (locale: Locale) => {
  const metadata = {
    ko: {
      title: 'SocialFlow | 차세대 소셜 광고 플랫폼',
      description: 'AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.',
      keywords: [
        '소셜플로우',
        '소셜미디어광고',
        'AI광고플랫폼',
        '디지털마케팅',
        '브랜드마케팅',
        '소셜마케팅',
        '광고자동화',
        '마케팅분석',
        '소셜커머스',
        '인플루언서마케팅'
      ],
    },
    en: {
      title: 'SocialFlow | Next-Gen Social Advertising Platform',
      description: 'AI-powered social media advertising platform SocialFlow. Revolutionize your brand\'s social marketing with real-time analytics and automated optimization.',
      keywords: [
        'socialflow',
        'social media advertising',
        'AI advertising platform',
        'digital marketing',
        'brand marketing',
        'social marketing',
        'ad automation',
        'marketing analytics',
        'social commerce',
        'influencer marketing'
      ],
    },
  };
  
  return metadata[locale];
};
