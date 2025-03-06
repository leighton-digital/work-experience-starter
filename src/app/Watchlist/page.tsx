'use client'
import Link from "next/link";
import Display from "../Components/Display"
import { Grid, Box } from '@radix-ui/themes';
export default function page(){
    const values = (localStorage.getItem('watchlist')||'').split(',')
    const movies = async (value:string) => {
        if (!value) return;
        return <Display value={value} filt = 'i'/>
    }
    return(
        <>
        <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" width="auto">{values.map((i) => movies(i))}</Grid>
        </>
    )
}