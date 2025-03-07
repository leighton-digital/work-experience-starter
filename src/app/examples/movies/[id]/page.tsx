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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Movie Details</h1>
      <div style={{ marginBottom: '20px' }}>
        <strong>Plot:</strong> {movie.Plot}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Actors:</strong> {movie.Actors}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Genre:</strong> {movie.Genre}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Type:</strong> {movie.Type}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Released:</strong> {movie.Released}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>IMDb Rating:</strong> {movie.imdbRating}
      </div>
    </div>
  );
}
