"use client"

import { useEffect, useState } from "react";
import ListItem from "../_components/ListItem";
import { usePathname } from "next/navigation";
import { Grid, Box }
export default function Page() {
    const pathName = usePathname();
    const watchlistItems=JSON.parse(localStorage.getItem("watchlist")||'')
    const [watchlist, setWatchList]=useState<React.ReactNode[]>([]);

    useEffect(()=>{
        const fetchMoviesForWatchList = async ()=>{
            const movieData = await Promise.all(
                    watchlistItems?.map(async (id: string)=>{
                        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&i=${id}`)
                        
                        return response.json();
                    })
                );
            setWatchList(movieData);
        };
        fetchMoviesForWatchList();
    },[pathName])

    return (
        <>
            <h1>Movie Watchlist</h1>
            <Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
                {watchlist.map(movie=> <ListItem id={movie.imdbID} id={movie.imdbID} poster={movie.Poster} title={movie.Title} />)}
            </Grid>
        </>
    )
}