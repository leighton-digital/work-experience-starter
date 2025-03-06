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
      <h1 style={{color:'orange'}}>Movie Details </h1>
      <ListItem poster = {movie.Poster} title = {movie.Title} id = {movie.imdbID}/>
      <h4 style={{color:'orange'}}>Rating: {movie.Rated}</h4>
      <h5 style={{color:'orange'}}>Release Date: {movie.Released}</h5>
      <h6 style={{color:'orange'}}>Length: {movie.Runtime}</h6>
      <h5 style={{color:'orange'}}>Genres: {movie.Genre}</h5>
      <h4 style={{color:'orange'}}>Writer: {movie.Writer}</h4>
      <h3 style={{color:'orange'}}>Director: {movie.Director}</h3>
      <h2 style={{color:'orange'}}>Actors: {movie.Actors}</h2>
      <h1 style={{color:'orange'}}>Plot Summary: {movie.Plot}</h1>
      <h2 style={{color:'orange'}}>Language: {movie.Language}</h2>
      <h3 style={{color:'orange'}}>Awards Won: {movie.Awards}</h3>
      <h4 style={{color:'orange'}}>Media Type: {movie.Type}</h4>
      <h5 style={{color:'orange'}}>IMDB Rating: {movie.imdbRating}</h5>
      <h6 style={{color:'orange'}}><Watchlistbox imdbID = {movie.imdbID} /></h6>
      <h5 style={{color:'orange'}}><Link legacyBehavior href = '/'><a style={{'color':'blue', 'textDecoration': 'underline'}}>Return to home</a></Link></h5>
    </>
  );
}
