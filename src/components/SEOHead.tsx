'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
}

export default function SEOHead({
  title = 'SocialFlow | 차세대 소셜 광고 플랫폼',
  description = 'AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.',
  keywords = ['소셜플로우', 'AI광고플랫폼', '소셜미디어광고'],
  image = '/og-image.jpg',
  url = '/',
  type = 'website',
  locale = 'ko_KR',
}: SEOHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="SocialFlow Team" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale} />
      <meta name="revisit-after" content="1 days" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="SocialFlow" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@socialflow_ai" />
      
      {/* 추가 SEO 메타 태그 */}
      <meta name="theme-color" content="#6366F1" />
      <meta name="msapplication-TileColor" content="#6366F1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SocialFlow" />
      
      {/* 캐노니컬 URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* 언어 대안 */}
      <link rel="alternate" hrefLang="ko" href={`${siteUrl}/ko`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/ko`} />
      
      {/* DNS 프리페치 */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//picsum.photos" />
      <link rel="dns-prefetch" href="//via.placeholder.com" />
    </Head>
  );
}
