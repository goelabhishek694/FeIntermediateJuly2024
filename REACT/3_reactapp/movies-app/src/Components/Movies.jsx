import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
function Movies() {
  const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 5",
    },
  ]);
  const [pageNo, setPageNo] = useState(1);
  const [watchlist,setWatchlist] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: pageNo },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTcyNDk4MjM3OS42MTM2MDgsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mu6GBcEikhicTypNxIJkLmrXpsy53e8rpwjN75NYIc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pageNo]);

  useEffect(()=>{
    let moviesFromLS = localStorage.getItem("watchlist");
    if(!moviesFromLS) return;
    setWatchlist(JSON.parse(moviesFromLS));
  },[])

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo == 1) return;
    setPageNo(pageNo - 1);
  };

  const addToWatchlist=(movieObj)=>{
    const updatedWatchList = [...watchlist,movieObj];
    console.log(updatedWatchList);
    setWatchlist(updatedWatchList);
    localStorage.setItem("watchlist",JSON.stringify(updatedWatchList));
  };

  const removeFromWatchlist=(movieObj)=>{
    let updatedWatchList = watchlist.filter(obj=>obj.id!=movieObj.id)
    console.log(updatedWatchList);
    setWatchlist(updatedWatchList);
    localStorage.setItem("watchlist",JSON.stringify(updatedWatchList))
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard 
            key={movieObj.id} 
            movieObj={movieObj} 
            addToWatchlist={addToWatchlist} 
            removeFromWatchlist={removeFromWatchlist}
            watchlist = {watchlist}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-2 bg-gray-400 p-4 h-[50px] w-full mt-8">
        <div onClick={handlePrevious} className="px-8">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className="px-8">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Movies;
