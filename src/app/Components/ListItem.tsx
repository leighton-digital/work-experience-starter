import Link from 'next/link';
import customColour from '/globals.css'

export default function ListItem({
  poster,
  title,
  id,
}: {
  poster: string;
  title: string;
  id: string;
}) {
  if (poster === 'N/A'){  
    return (
      <>
        <Link href={`/${id}`}>
          <h1 style={{color:}}>{title}</h1>
          <img src={'/Qmark.png'} alt='${title} movie poster' width="150px" />
        </Link>
      </>
    );
  }
  else{  
    return (
      <>
        <Link href={`/${id}`}>
          <h1>{title}</h1>
          <img src={poster} alt='${title} movie poster' width="150px" />
        </Link>
      </>
    );
  }

}
