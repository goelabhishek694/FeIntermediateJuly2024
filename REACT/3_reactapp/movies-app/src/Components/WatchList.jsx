import React, { useEffect, useState } from "react";
import genreids from "../utils/utility";
console.log(genreids);
function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([
    "All Genres",
    "Thriller",
    "Action",
  ]);
  const [currGenre, setCurrGenre] = useState("All Genres")
  useEffect(() => {
    let moviesFromLS = localStorage.getItem("watchlist");
    if (!moviesFromLS) return;
    setWatchlist(JSON.parse(moviesFromLS));
    console.log(watchlist);
  }, []);

  useEffect(()=>{
    let temp=watchlist.map(movie=>genreids[movie.genre_ids[0]]);
    temp=new Set(temp);
    console.log(temp);
    setGenreList(["All Genres", ...temp])
  },[watchlist])

  const handleAscendindRatings = () => {
    // console.log("low to high");
    let sortedAscending = watchlist.sort(
      (m1, m2) => m1.vote_average - m2.vote_average
    );
    // console.log(sortedAscending);
    setWatchlist([...sortedAscending]);
  };

  const handleDecendindRatings = () => {
    // console.log("hight to low");
    let sortedDescending = watchlist.sort(
      (m1, m2) => m2.vote_average - m1.vote_average
    );
    // console.log(sortedDescending);
    setWatchlist([...sortedDescending]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  

  return (
    <>
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <>
              <div onClick={()=>handleFilter(genre)} className={genre==currGenre ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl" :"flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"}>{genre}</div>
            </>
          );
        })}
      </div>
      <div>
        <input
          className="h-[3rem] w-[19rem] bg-gray-200 px-4 outline-none border border-slate-600"
          placeholder="Search Movies"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <i
                    onClick={handleAscendindRatings}
                    class="fa-solid fa-arrow-up"
                  ></i>
                  <div>Ratings</div>
                  <i
                    onClick={handleDecendindRatings}
                    class="fa-solid fa-arrow-down"
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
              .filter(movie=>{
                if(currGenre == "All Genres") return true;
                else return genreids[movie.genre_ids[0]] == currGenre
              })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map(
                ({
                  id,
                  poster_path,
                  title,
                  vote_average,
                  popularity,
                  genre_ids,
                }) => {
                  return (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                        <img
                          className="h-[6rem] w-[10rem] object-fit"
                          src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        />
                        <div className="font-medium text-gray-700 text-sm">
                          {title}
                        </div>
                      </td>
                      <td className="pl-6 py-4">{vote_average}</td>
                      <td className="pl-6 py-4">{popularity}</td>
                      <td className="pl-6 py-4">{genreids[genre_ids?.[0]]}</td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
