import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  src?: string;
  width?: number;
  aspectRatio?: number;
};

export function ArticleCard(props: Props) {
  return (
    <div>
      <Link href={`/articles/${props.id}`}>
        {props.src && props.width && props.aspectRatio && (
          <Image
            src={props.src}
            alt="xxxx"
            width={props.width}
            height={props.width / props.aspectRatio}
          />
        )}
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
