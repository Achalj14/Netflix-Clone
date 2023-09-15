import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({title,fetchUrl,isLargeRow = false}) => {
   const [movies,setMovies] = useState([])
   const [trailerUrl,setTrailerUrl] = useState("");

   useEffect(()=>{
   async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
   }
   fetchData();
   },[fetchUrl]);

   console.log(movies)
   const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          alert("Trailer for this new movie is not available");
        });
    }
  };

  const opts = {
    height : "390",
    width :"100%",
    playerVar :{
      autoplay :1
    }
  }
  return (
    <div className='row'>
    <h2>{title}</h2>
    <div className="row__posters">
    {movies?.map((movie) => 
      ((isLargeRow && movie.poster_path) || 
      (!isLargeRow && movie.backdrop_path)) && (
        <img
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        key={movie.id}
         // Add a unique key for each image
        onClick={()=> handleClick(movie)}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      />
      )
     
    )}
    

    </div>
    {trailerUrl && <YouTube videoId= {trailerUrl} opts={opts}/>}
  </div>
  );
}

export default Row
