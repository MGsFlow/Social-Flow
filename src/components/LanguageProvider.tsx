'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState('ko');
  const pathname = usePathname();

  useEffect(() => {
    // URL에서 언어 추출
    const pathSegments = pathname.split('/');
    const detectedLocale = pathSegments[1] || 'ko';
    
    if (['ko', 'en'].includes(detectedLocale)) {
      setLocale(detectedLocale);
    }
  }, [pathname]);

  useEffect(() => {
    // HTML lang 속성 업데이트
    document.documentElement.lang = locale;
    document.documentElement.dir = 'ltr';
  }, [locale]);

  return <>{children}</>;
}
