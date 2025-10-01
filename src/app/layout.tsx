import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import StructuredData from "@/components/StructuredData";
import LanguageProvider from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SocialFlow | 차세대 소셜 광고 플랫폼",
    template: "%s | SocialFlow"
  },
  description: "AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.",
  keywords: [
    "소셜플로우",
    "소셜미디어광고",
    "AI광고플랫폼",
    "디지털마케팅",
    "브랜드마케팅",
    "소셜마케팅",
    "광고자동화",
    "마케팅분석",
    "소셜커머스",
    "인플루언서마케팅"
  ],
  authors: [{ name: "SocialFlow Team" }],
  creator: "SocialFlow",
  publisher: "SocialFlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/ko',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    title: 'SocialFlow | 차세대 소셜 광고 플랫폼',
    description: 'AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.',
    siteName: 'SocialFlow',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SocialFlow - 차세대 소셜 광고 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialFlow | 차세대 소셜 광고 플랫폼',
    description: 'AI 기반 소셜 미디어 광고 플랫폼 SocialFlow. 실시간 분석과 자동화된 최적화로 브랜드의 소셜 마케팅을 혁신하세요.',
    images: ['/og-image.jpg'],
    creator: '@socialflow_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" dir="ltr">
      <head>
        {/* Google Tag Manager will be loaded via Script component */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <StructuredData type="WebSite" data={{}} />
        <StructuredData type="Organization" data={{}} />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
          `}
        </Script>
        
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}');
          `}
        </Script>
        
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
