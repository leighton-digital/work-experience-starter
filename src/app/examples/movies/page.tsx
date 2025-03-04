export default async function Page() {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=Inception`
  );
  const movies = await data.json();

  return (
    <ul>
      {movies.Search.map((movie) => (
        <li key={movie.imdbID}>
          <h1>{movie.Title}</h1>
          {movie.Poster !== 'N/A' && (
            <p>
              <img src={movie.Poster} />
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
