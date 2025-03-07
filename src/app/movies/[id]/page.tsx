import { Flex, Text } from "@radix-ui/themes";
import MovieWatchlistButton from "../_components/WatchListButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params; // Get the id of the movie from the url of page

  // use the id variable above to make a call to the movie api
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&i=${id}` // Look at the 'i' property in the docs - https://www.omdbapi.com/
  );

  // Extract the movie form the returned API response
  const movie = await data.json();

  //Show the movie details
  return (
    <>
      
      <Flex direction="column" align="center">
      <h1>Movie Details </h1>
        <p className="text-4xl font-bold">{movie.Title}</p> 
        <p className="italic pb-6">{movie.Year} {movie.Runtime} {movie.Rated}</p>
        <img src={movie.Poster} alt={movie.Title}/>
        <Text as="p" className="pt-8 pb-4" weight="medium">{movie.Plot}</Text>
        <Text as="p" weight="medium">{movie.Awards}</Text>
        <MovieWatchlistButton imdbID={movie.imdbID}/>
      </Flex>
    </>
  );
}
