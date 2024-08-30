import React from 'react'

function MovieCard({movieObj,addToWatchlist,removeFromWatchlist,watchlist}) {
    //does it contains movie in watchlist
  function doesContain(){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id == movieObj.id) return true;
    }
    return false;
  }
  return (
    <div
              className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj["poster_path"]})`,
              }}
            >
              <div className="text-white w-full text-center text-2xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.title}
              </div>
              {
                doesContain()==false ? (
                <div onClick={()=>addToWatchlist(movieObj)} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">😍</div>):(
                <div onClick={()=>removeFromWatchlist(movieObj)} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">❌</div>)
              }
            </div>
  )
}

export default MovieCard