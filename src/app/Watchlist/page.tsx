'use client'
import Display from "../Components/Display"
import { Grid, Box } from '@radix-ui/themes';
export default function page(){
    const values = (localStorage.getItem('watchlist')||'').split(',')
    const movies = async (value:string) => {
        if (!value) return;
        return <Display value={value} filt = 'i' cols = {false}/>
    }
    return(
        <b className="text-center">
            <h1 style={{ color: "Cyan" , margin:'20px'}} className='text-center'>
                <a style={{padding:'10px'}} className="text-center text-5xl p-4 m-4">Displaying Watchlist{`\n`}{`\n`}</a>
            </h1>
        <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" width="auto" className="grid place-items-center">{values.map((i) => movies(i))}</Grid>
        </b>
    )
}