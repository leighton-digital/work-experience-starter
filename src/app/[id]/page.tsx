import Watchlistbox from "../Components/Watchlistbox";
import ListItem from "../Components/ListItem";
import Link from "next/link";
import { Grid } from "@radix-ui/themes";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params; 

  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&i=${id}` 
  );

  const movie = await data.json();


  return (
    <b className='text-lg md:text-xl lg:text-2xl'>
    <h1 style={{color:'orange'}} className='text-center'>Movie Details </h1>
    <Grid className="text-center grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="col-span-1">
    <ListItem poster={movie.Poster} title={movie.Title} id={movie.imdbID} size='450px'/>
  </div>

  <div className="col-span-1 p-10">
    <h4 style={{ color: 'orange' }}>Rating: {movie.Rated}</h4>
    <h5 style={{ color: 'orange' }}>Release Date: {movie.Released}</h5>
    <h6 style={{ color: 'orange' }}>Length: {movie.Runtime}</h6>
    <h5 style={{ color: 'orange' }}>Genres: {movie.Genre}</h5>
    <h4 style={{ color: 'orange' }}>Writer: {movie.Writer}</h4>
    <h3 style={{ color: 'orange' }}>Director: {movie.Director}</h3>
    <h2 style={{ color: 'orange' }}>Actors: {movie.Actors}</h2>
    <h1 style={{ color: 'orange' }} className="max-w-lg break-words text-center mx-auto">
      Plot Summary: {movie.Plot}
    </h1>
    <h2 style={{ color: 'orange' }}>Language: {movie.Language}</h2>
    <h3 style={{ color: 'orange' }}>Awards Won: {movie.Awards}</h3>
    <h4 style={{ color: 'orange' }}>Media Type: {movie.Type}</h4>
    <h5 style={{ color: 'orange' }}>IMDB Rating: {movie.imdbRating}</h5>
    <h6 style={{ color: 'orange' }}>
      <Watchlistbox imdbID={movie.imdbID}/>
    </h6>
  </div>
</Grid>
    </b>
  );
}
