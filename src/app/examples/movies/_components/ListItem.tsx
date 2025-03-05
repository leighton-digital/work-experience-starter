import Link from 'next/link';

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
      <Link href={`movies/${id}`}>
        <h1>{title}</h1>
        <img src={poster} alt={title} width="150px" />
      </Link>
    </>
  );
}
