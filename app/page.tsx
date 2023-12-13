import Link from 'next/link';
import { getList } from '@/libs/client';

export default async function Home() {
  const data = await getList();
  return (
    <main>
      <h1>トップページ</h1>
      <Link href="/company">companyへ</Link>
      {data.contents.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </main>
  );
}
