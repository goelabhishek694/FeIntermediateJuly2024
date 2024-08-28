import React, { useState } from "react";

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
  const[pageNo,setPageNo] = useState(1);
  const handleNext=()=>{
    setPageNo(pageNo+1);
  }
  const handlePrevious=()=>{
    if(pageNo==1)return
    setPageNo(pageNo-1)
  }
  return <div>
    <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
    </div>
    <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj,idx)=>{
            return (
                <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end" key={idx} style={{backgroundImage:`url(${movieObj.url})`}}>
                    <div className="text-white w-full text-center text-2xl p-2 bg-gray-900/70 rounded-lg">{movieObj.title}</div>
                </div>
            )
        })}
    </div>
    <div className="flex justify-center gap-2 bg-gray-400 p-4 h-[50px] w-full mt-8">
        <div onClick={handlePrevious} className="px-8"><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className="px-8"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  </div>;
}

export default Movies;
