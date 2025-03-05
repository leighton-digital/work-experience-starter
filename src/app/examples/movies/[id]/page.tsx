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
      <h1>Movie Details </h1>
      {movie.Title}
    </>
  );
}
