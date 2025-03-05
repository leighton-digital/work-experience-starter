'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import SearchForm from './_components/SearchForm';
import ListItem from './_components/ListItem';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState(''); // Default search term
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery) return; // Prevent unnecessary calls
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&s=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    };
    fetchMovies();
  }, [searchQuery]); // Refetch when search query changes

  return (
    <>
      <SearchForm onSearch={setSearchQuery} />
      {movies.length === 0 && <p>Please enter a search</p>}
      <ul>
        {movies?.map((movie: any) => (
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
