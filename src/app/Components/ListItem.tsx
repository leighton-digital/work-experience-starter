'use client'
import Link from 'next/link';
import { Box } from '@radix-ui/themes';

export default function ListItem({
  poster,
  title,
  id,
  inList = false,
  size='200px'
}: {
  poster: string;
  title: string;
  id: string;
  inList?: boolean
  size?: string
}) {
  if (poster === 'N/A') {
    return (
      <>
        <Link href={`/${id}`} className="flex flex-col items-center justify-center">
          <h1 style={{ color: 'Orange' }} className="text-center">{title} {inList && <img src='/Checkmark.png' className='centered-image'/>}</h1>
          <style jsx>{`
  .centered-image {
    display: block;
    margin: 0 auto; /* Centers the image */
  }
`}</style>
          <img src={'/Qmark.png'} alt={`${title} movie poster`} width={size} />
        </Link>
      </>
    );
  } else {
    return (
      <Box>
        <Link href={`/${id}`} className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 style={{ color: 'orange' }} className="text-center">{title} {inList && <img src='/Checkmark.png' className='centered-image'/>}</h1>
            <img src={poster} alt={`${title} movie poster`} width={size} />
          </div>
        </Link>
      </Box>
    );
  }
}