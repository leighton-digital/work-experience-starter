'use client';
import { useState, useEffect } from 'react';
 
type MovieWatchlistButtonProps = {
  imdbID: string;
};
 
const MovieWatchlistButton: React.FC<MovieWatchlistButtonProps> = ({
  imdbID,
}) => {
  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(false);
 
  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setIsInWatchlist(watchlist.includes(imdbID));
  }, [imdbID]);
 
  const toggleWatchlist = () => {
    const watchlist: string[] = JSON.parse(
      localStorage.getItem('watchlist') || '[]'
    );
    let updatedWatchlist;
 
    if (watchlist.includes(imdbID)) {
      updatedWatchlist = watchlist.filter((id) => id !== imdbID);
      setIsInWatchlist(false);
    } else {
      updatedWatchlist = [...watchlist, imdbID];
      setIsInWatchlist(true);
    }
 
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };
 
  return (
    <button
      onClick={toggleWatchlist}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
};
 
export default MovieWatchlistButton;