'use client'
import MovieWatchlistButton from '../_components/WatchListButton';
import { useState, useEffect } from 'react';

export default function Page({ params }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = await params;
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&i=${id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Movie Details</h1>
      <div style={styles.content}>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} style={styles.poster} />
        <div>
          <div style={styles.detail}><strong>Plot:</strong> {movie.Plot}</div>
          <div style={styles.detail}><strong>Runtime:</strong> {movie.Runtime}</div>
          <div style={styles.detail}><strong>Director:</strong> {movie.Director}</div>
          <div style={styles.detail}><strong>Actors:</strong> {movie.Actors}</div>
          <div style={styles.detail}><strong>Genre:</strong> {movie.Genre}</div>
          <div style={styles.detail}><strong>Type:</strong> {movie.Type}</div>
          <div style={styles.detail}><strong>Released:</strong> {movie.Released}</div>
          <div style={styles.detail}><strong>IMDb Rating:</strong> {movie.imdbRating}</div>
          <MovieWatchlistButton imdbID={movie.imdbID} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px 8px 0 0',
  },
  content: {
    display: 'flex',
    gap: '20px',
  },
  poster: {
    width: '100%',
    borderRadius: '8px',
  },
  detail: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};