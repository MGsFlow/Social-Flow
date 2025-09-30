'use client';

import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, localeConfig } from '@/lib/i18n';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  
  // 현재 언어 추출
  const currentLocale = pathname.split('/')[1] as 'ko' | 'en' || 'ko';
  
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLocale = event.target.value as 'ko' | 'en';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="language-select-label">언어</InputLabel>
      <Select
        labelId="language-select-label"
        value={currentLocale}
        label="언어"
        onChange={handleLanguageChange}
        sx={{
          '& .MuiSelect-select': {
            fontSize: '0.875rem',
          },
        }}
      >
        {locales.map((locale) => (
          <MenuItem key={locale} value={locale}>
            {localeNames[locale]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
