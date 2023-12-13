import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/client';
import { Header } from '@/components/header';
import { ArticleCard } from '@/components/articleCard';

export default async function Home() {
  const data = await getList();
  return (
    <>
      <Header />
      <main>
        <h1>トップページ</h1>
        <Link href="/company">companyへ</Link>
        {data.contents.map((item) => (
          <ArticleCard 
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.eyecatch.url}
            width={300}
            aspectRatio={item.eyecatch.width / item.eyecatch.height}
          />
        ))}
      </main>
    </>
  );
}
