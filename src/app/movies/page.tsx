'use client';
import { Grid, Box } from "@radix-ui/themes";
import ListItem from "./_components/ListItem";
import SearchForm from "./_components/SearchForm";
import { useState, useEffect } from 'react';

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
      <SearchForm onSearch={setSearchQuery}/>
      <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
        {movies?.map((movie) => (
        <Box key={movie.imdbID} className="p-8 hover:bg-yellow-500/50 hover:shadow-xl">
         <ListItem id={movie.imdbID} poster={movie.Poster} title={movie.Title} />
        </Box>
        ))}
      </Grid>
      </>
    )
  }