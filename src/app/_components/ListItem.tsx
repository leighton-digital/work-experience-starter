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
        <h1><a className='text-indigo-700 !important'>{title}</a></h1>
        <img src={poster} alt={title} width="200px" />
      </Link>
    </>
  );
}
