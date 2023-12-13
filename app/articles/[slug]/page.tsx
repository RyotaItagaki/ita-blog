import Image from 'next/image';
import parse from 'html-react-parser';
import { getDetail } from '@/libs/client';
import { Header } from '@/components/header';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Article({ params }: Props) {
  const data = await getDetail(params.slug);
  return (
    <>
      <Header />
      <main>
        <Image
          src={data.eyecatch.url}
          alt="xxxx"
          width={data.eyecatch.width / 20}
          height={data.eyecatch.height / 20}
        />
        <h1>{data.title}</h1>
        {parse(data.content)}
      </main>
    </>
  );
}
