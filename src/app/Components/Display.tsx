'use client'
import { useState, useEffect } from 'react';
import ListItem from './ListItem'
import { Grid, Box } from '@radix-ui/themes';

export default function Display({ value, filt = 's', cols=true }:{value:string, filt?:string, cols?:boolean}) {
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

    if (cols){
        return (
            <div className="flex justify-center items-center flex-col">
            <h1 style={{ color: "Cyan" , margin:'20px'}} className='text-center'>
                {filt === 's' && <p><a style={{padding:'10px'}} className="text-center text-5xl p-4 m-4">Displaying Movies{`\n`}{`\n`}</a></p>}
            </h1>
            <div className="w-full">
            <div className="flex justify-center items-center">
    {filter.length === 0 && (
        <h2 style={{ color: "orange" }} className="text-center">
        No movies found
        </h2>
    )}
    </div>

    <Grid
    columns={{ initial: "1", md: "2", lg: "3" }}
    gap="3"
    width="auto"
    className="grid place-items-center"
    >
    {filter.map((i) => {
        const arr = (localStorage.getItem('watchlist')||'').split(',');
        const inList = arr.includes(i.imdbID)
        return (
            <Box key={i.imdbID}>
            <ListItem poster={i.Poster} title={i.Title} id={i.imdbID} inList={inList}/>
            </Box>
        )
    })}
    </Grid>
            </div>
            </div>
        );
    }
    else{
        return (
            <div className="flex justify-center items-center flex-col">
            <h1 style={{ color: "Cyan" , margin:'20px'}} className='text-center'>
                {filt === 's' && <p><a style={{padding:'10px'}} className="text-center text-5xl p-4 m-4">Displaying Watchlist{`\n`}{`\n`}</a></p>}
            </h1>
            <div className="w-full">
            <div className="flex justify-center items-center">
    {filter.length === 0 && (
        <h2 style={{ color: "orange" }} className="text-center">
        No movies found
        </h2>
    )}
    </div>

    <Grid
    columns={{ initial: "1", md: "1", lg: "1" }}
    gap="3"
    width="auto"
    className="grid place-items-center"
    >
    {filter.map((i) => (
        <Box key={i.imdbID}>
        <ListItem poster={i.Poster} title={i.Title} id={i.imdbID} />
        </Box>
    ))}
    </Grid>
            </div>
            </div>
        );
    }
}