// pages/_app.tsx
import '@/pages/globals.css';  // Tailwind 지시문 포함 파일
import React from 'react';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}