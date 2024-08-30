import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Banner() {
  const [bannerImage,setBannerImage] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68");
  const [title,setTitle] = useState("PlaceHolder title");

  useEffect(()=>{
    console.log("use effect fetching data");
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=1`).then(res=>{
      console.log(res);
      const firstMovie=res.data.results[0];
      const firstMovieTitle = firstMovie.title;
      const firstMovieBanner = firstMovie["backdrop_path"];
      setTitle(firstMovieTitle);
      setBannerImage(`https://image.tmdb.org/t/p/original${firstMovieBanner}`)
    }).catch(err=>console.log(err))
  },[])

  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover flex items-end' style={{backgroundImage:`url(${bannerImage})`}}>
        <div className='text-white w-full text-center text-2xl'>{title}</div>
    </div>
  )
}

export default Banner