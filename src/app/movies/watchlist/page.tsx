"use client";

import { useEffect, useState } from "react";
import ListItem from "../_components/ListItem";
import { usePathname } from "next/navigation";
import { Grid, Box } from "@radix-ui/themes";
import Link from 'next/link';

export default function Page() {
    const pathName = usePathname();
    const watchlistItems = JSON.parse(localStorage.getItem("watchlist") || '[]');
    const [watchlist, setWatchList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMoviesForWatchList = async () => {
            setLoading(true);
            const movieData = await Promise.all(
                watchlistItems?.map(async (id: string) => {
                    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&i=${id}`);
                    return response.json();
                })
            );
            setWatchList(movieData);
            setLoading(false);
        };
        fetchMoviesForWatchList();
    }, [pathName]);

    return (
        <div style={styles.container}>
            <div style={styles.headerContainer}>
                <h1 style={styles.header}>
                    {Array.from('Movie Watchlist').map((char, index) => (
                        <span key={index} style={{ ...styles.letter, color: getColor(index) }}>{char}</span>
                    ))}
                </h1>
            </div>
            {loading ? (
                <div style={styles.loading}>Loading...</div>
            ) : (
                <Grid columns={2} gap="20px" style={styles.grid}>
                    {watchlist.map(movie => (
                        <Link key={movie.imdbID} href={`/movies/${movie.imdbID}`}>
                            <Box style={styles.box}>
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

const getColor = (index: number) => {
    const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff']; // Red, yellow, green, blue
    return colors[index % colors.length];
};

const styles = {
    container: {
        fontFamily: 'SuperMario, Roboto, sans-serif',
        padding: '20px',
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f0f0f0',
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        position: 'relative',
    },
    header: {
        fontSize: '48px', // Increased font size
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 20px', // Space between the images and the text
        letterSpacing: '2px', // Adjusted letter spacing
        flex: 1, // Allow the header to take up remaining space
        textDecoration: 'underline', // Underline the text
    },
    letter: {
        WebkitTextStroke: '4px black', // Thicker black outline
        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // More noticeable shadow
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
        backgroundColor: '#ffffff',
        transition: 'transform 0.3s, box-shadow 0.3s',
    },
    posterContainer: {
        border: '2px solid #dddddd',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    poster: {
        width: '100%',
        height: 'auto',
    },
    movieTitle: {
        color: '#333333',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
    },
    loading: {
        textAlign: 'center',
        fontSize: '24px',
        color: '#555555',
    },
};