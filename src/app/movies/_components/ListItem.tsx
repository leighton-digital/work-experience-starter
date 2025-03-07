import Link from 'next/link';
import { Heading } from '@radix-ui/themes';

export default function ListItem({
  poster,
  title,
  id,
}: {
  poster: string;
  title: string;
  id: string;
}) {
  return (
    <>
      <Link href={`/movies/${id}`}>
        <Heading as="h2" className="py-4">{title}</Heading>
        <img src={poster} alt={title} width="150px" />
      </Link>
    </>
  );
}
