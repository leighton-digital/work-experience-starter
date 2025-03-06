'use client'
import { useState, useEffect } from 'react';
import ListItem from './ListItem'
import { Grid, Box } from '@radix-ui/themes';

export default function Display({ value, filt = 's' }:{value:string, filt?:string}) {
    const [filter, setFilter] = useState<any[]>([]);

    useEffect(() => {
        const movies = async () => {
            if (!value) return;
            const response = await fetch (`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_APIKEY}&${filt}=${value}`);
            //console.log(response)
            const data = await response.json();
            console.log(data)
            if (filt==='s'){
            setFilter(data.Search || []);}
            else{
                setFilter([data])
            }
            //console.log(filter)
        };


        movies();
    }, [value]);


    return (
        <div>
            <h1 style={{color:'orange'}}>
                {filt ==='s'&&<>Displaying Movies</>}
            </h1>
            <h2>
                <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" width="auto">
                    {filter.length === 0 ? (
                        <h2 style={{color:'orange'}}>No movies found</h2>
                    ) : (
                        filter.map((i) => (
                            <Box key={i.imdbID}>
                                <ListItem poster = {i.Poster} title = {i.Title} id = {i.imdbID}/>
                            </Box>
                        ))
                    )}
                </Grid>
            </h2>
        </div>
    );
}