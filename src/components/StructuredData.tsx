'use client';

import React from 'react';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'WebPage' | 'SocialMediaPosting';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    switch (type) {
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SocialFlow",
          "alternateName": "차세대 소셜 광고 플랫폼",
          "url": baseUrl,
          "description": "AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.",
          "publisher": {
            "@type": "Organization",
            "name": "SocialFlow",
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`,
              "width": 200,
              "height": 200
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SocialFlow",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "AI 기반 소셜 미디어 광고 플랫폼",
          "foundingDate": "2024",
          "sameAs": [
            "https://twitter.com/socialflow_ai",
            "https://linkedin.com/company/socialflow-ai"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Korean", "English"]
          }
        };

      case 'WebPage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title || "SocialFlow",
          "description": data.description || "AI 기반 소셜 미디어 광고 플랫폼",
          "url": `${baseUrl}${data.url || ''}`,
          "mainEntity": {
            "@type": "WebSite",
            "name": "SocialFlow"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": data.breadcrumbs || []
          }
        };

      case 'SocialMediaPosting':
        return {
          "@context": "https://schema.org",
          "@type": "SocialMediaPosting",
          "headline": data.caption || "소셜 미디어 포스트",
          "description": data.caption || "SocialFlow의 소셜 미디어 포스트",
          "image": data.imageUrl,
          "author": {
            "@type": "Person",
            "name": data.username,
            "url": `${baseUrl}/user/${data.username}`
          },
          "publisher": {
            "@type": "Organization",
            "name": "SocialFlow",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": data.timestamp,
          "interactionStatistic": [
            {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/LikeAction",
              "userInteractionCount": data.likes
            },
            {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/CommentAction",
              "userInteractionCount": data.comments
            }
          ]
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
