import Feed from '@/components/Feed';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  await params; // params를 사용하여 경고 제거
  return <Feed />;
}
