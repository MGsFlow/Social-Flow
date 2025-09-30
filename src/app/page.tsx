import { redirect } from 'next/navigation';

export default function Home() {
  // 기본 언어(한국어)로 리다이렉트
  redirect('/ko');
}
