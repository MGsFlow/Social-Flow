import type { Metadata } from "next";
import { getLocaleMetadata } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Providers } from "../providers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  if (!['ko', 'en'].includes(locale)) {
    notFound();
  }
  
  const localeMetadata = getLocaleMetadata(locale as 'ko' | 'en');
  
  return {
    title: {
      default: localeMetadata.title,
      template: `%s | SocialFlow`
    },
    description: localeMetadata.description,
    keywords: localeMetadata.keywords,
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
      canonical: `/${locale}`,
      languages: {
        'ko-KR': '/ko',
        'en-US': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      url: `/${locale}`,
      title: localeMetadata.title,
      description: localeMetadata.description,
      siteName: 'SocialFlow',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: localeMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localeMetadata.title,
      description: localeMetadata.description,
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
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  
  if (!['ko', 'en'].includes(locale)) {
    notFound();
  }
  
  return (
    <Providers>
      {children}
    </Providers>
  );
}
