import Watchlistbox from "../Components/Watchlistbox";
import ListItem from "../Components/ListItem";
import Link from "next/link";
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
    <>
      <h1>Movie Details </h1>
      <ListItem poster = {movie.Poster} title = {movie.Title} id = {movie.imdbID}/>
      <h4>Rating: {movie.Rated}</h4>
      <h5>Release Date: {movie.Released}</h5>
      <h6>Length: {movie.Runtime}</h6>
      <h5>Genres: {movie.Genre}</h5>
      <h4>Writer: {movie.Writer}</h4>
      <h3>Director: {movie.Director}</h3>
      <h2>Actors: {movie.Actors}</h2>
      <h1>Plot Summary: {movie.Plot}</h1>
      <h2>Language: {movie.Language}</h2>
      <h3>Awards Won: {movie.Awards}</h3>
      <h4>Media Type: {movie.Type}</h4>
      <h5>IMDB Rating: {movie.imdbRating}</h5>
      <h6><Watchlistbox imdbID = {movie.imdbID} /></h6>
      <h5><Link legacyBehavior href = '/'><a style={{'color':'blue', 'textDecoration': 'underline'}}>Return to home</a></Link></h5>
    </>
  );
}
