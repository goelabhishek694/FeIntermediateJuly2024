import React, { useEffect, useState } from 'react'
import genreids from "../utils/utility";
console.log(genreids);
function WatchList() {
  const[watchlist,setWatchlist]=useState([]);
  useEffect(()=>{
    let moviesFromLS = localStorage.getItem("watchlist");
    if(!moviesFromLS) return
    setWatchlist(JSON.parse(moviesFromLS));
    console.log(watchlist);
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map(({id,poster_path,title,rating,popularity,genre_ids})=>{
            return (<tr key={id}>
              <td>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
                <div>{title}</div>
              </td>
              <td>{rating}</td>
              <td>{popularity}</td>
              <td>{genreids[genre_ids?.[0]]}</td>
            </tr>)
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default WatchList