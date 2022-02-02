import React from 'react';
import axios from 'axios';
import Layout from "./Layout";
import { useState, useEffect } from "react";
import { Preview } from '@mui/icons-material';

function Main() {
  const [movies, setMovies ] = useState([]);

  const [visible, setVisible ] = useState(5);

  const showMoreItems = () => {
    setVisible((visible) => visible + 5);
  }


  function fetch() {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
    .then((res)=>{
      setMovies(res.data.results)
    })
    .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    fetch();
  },[])
  
  console.log(movies);

  function mapping(){
    return movies.slice(0, visible).map((movie,id)=><Layout key={id} src={movie.poster_path} />)
  }

  return (
  <div >
    <div className='mov'>
    {mapping()}
    </div>

<button onClick={showMoreItems} className='button'>Load More</button>
  </div>
  );
}

export default Main;
