'use client'
import { Button } from "@radix-ui/themes"
import { useState } from "react";
export default function Watchlistbox({imdbID}:{imdbID:string}){
    var arr = (localStorage.getItem('watchlist')||'').split(',');
    const [inWatchlist, setInWatchlist] = useState(arr.includes(imdbID))
    const toggleHandler = (id:string) => {
        if (arr.includes(id)){
            arr = arr.filter((item) => item !== id);
            setInWatchlist(false)
        }
        else if (arr.length === 1 && arr[0] === ''){
            arr=[id]
            setInWatchlist(true)
        }
        else{
            arr.push(id)
            setInWatchlist(true)
        }
        localStorage.setItem('watchlist', arr.join(','))
    }
    return (
        <Button style={{backgroundColor:'orange'}} onClick={()=>toggleHandler(imdbID)}>{inWatchlist?'Remove from watchlist':'Add to watchlist'}</Button>
    )
}