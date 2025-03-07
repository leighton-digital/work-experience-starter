'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Grid, Box } from "@radix-ui/themes";
import SearchForm from "./_components/SearchForm";
import ListItem from "./_components/ListItem";
import Link from 'next/link';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery) return;
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&s=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
      setLoading(false);
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div style={styles.container}>
      <SearchForm onSearch={setSearchQuery} />
      <h2 style={styles.subHeader}>Movie/Series List</h2>
      {loading ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <Grid columns={2} gap="20px" style={styles.grid}>
          {movies.map((movie) => (
            <Link key={movie.imdbID} href={`/movies/${movie.imdbID}`}>
              <Box key={movie.imdbID} style={styles.box}>
                <div style={styles.movieTitle}>{movie.Title}</div>
                <div style={styles.posterContainer}>
                  <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
                </div>
              </Box>
            </Link>
          ))}
        </Grid>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    padding: '20px',
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f0f0f0', // Light grey background
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    textDecoration: 'underline',
    color: '#333333', // Dark grey text color
  },
  subHeader: {
    borderBottom: '2px solid #bdc3c7',
    paddingBottom: '10px',
    fontSize: '24px',
    color: '#555555', // Medium grey text color
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  box: {
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#ffffff', // White background for boxes
    transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for hover effect
  },
  boxHover: {
    transform: 'scale(1.05)', // Slightly enlarge on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover
  },
  posterContainer: {
    border: '2px solid #dddddd', // Light grey border for poster
    borderRadius: '8px', // Border radius for poster
    overflow: 'hidden', // Ensure border radius is applied to the image
  },
  poster: {
    width: '100%',
    height: 'auto',
  },
  movieTitle: {
    color: '#333333', // Dark grey text color for movie titles
    fontSize: '18px', // Bigger font size
    fontWeight: 'bold', // Bold font
    textAlign: 'center', // Center align the text
    marginBottom: '10px', // Space between title and poster
  },
  loading: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#555555', // Medium grey text color
  },
  imageLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200px',
    height: 'auto',
    borderRadius: '15px',
  },
  imageRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '200px',
    height: 'auto',
    borderRadius: '15px',
  },
};