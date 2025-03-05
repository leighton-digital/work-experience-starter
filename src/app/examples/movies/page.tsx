/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchForm from './_components/SearchForm';
import ListItem from './_components/ListItem';

export default async function Page() {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=Inception`
  );
  const movies = await data.json();

  return (
    <>
      <SearchForm />
      <ul>
        {movies.Search.map((movie: any) => (
          <ListItem
            key={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            id={movie.imdbID}
          />
        ))}
      </ul>
    </>
  );
}
