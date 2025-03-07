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
  if (poster === 'N/A') {
    return (
      <>
        <Link href={`/${id}`} className="flex flex-col items-center justify-center">
          <h1 style={{ color: 'Orange' }} className="text-center">{title}</h1>
          <img src={'/Qmark.png'} alt={`${title} movie poster`} width="150px" />
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link href={`/${id}`} className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 style={{ color: 'orange' }} className="text-center">{title}</h1>
            <img src={poster} alt={`${title} movie poster`} width="150px" />
          </div>
        </Link>
      </>
    );
  }
}