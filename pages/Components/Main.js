import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Preview } from '@mui/icons-material';
import Header from "./Header";
import SearchIcon from '@mui/icons-material/Search';
import Details from './Details';

function Main(props) {
  const [movies, setMovies ] = useState([]);
  const [visible, setVisible ] = useState(5);
  const [search, setSearch ] = useState('');
  const [data, setData] = useState([]);
  
  
  const showMoreItems = () => {
    setVisible((visible) => visible + 5);
  }

  function fetch() {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
    .then((res)=>{
      setMovies(res.data.results)
      setData(res.data.results)
    })
    .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    fetch();
  },[])
  console.log(movies);
  
 
  const result = () => {
    if(search) {
      const MyResult = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      });
      return MyResult ? (
        MyResult.map((movie) => <Details key={movie.id} movie={movie.poster_path}/>
      )
      ):(
        <h1>Results not found</h1>
      )
      }
      else{
        return movies.slice(0, visible).map((movie) => 
        <Details key={movie.id} id={movie.id} movie={movie.poster_path} />
        
      )
    }
}

  return (
        <div>
        <div className="search">
            <input className='input' type="text" placeholder="Search Movie and click Enter" onChange={(e)=> setSearch(e.target.value)}/>
            <SearchIcon className='icon'/>
            </div>

            <div className='main_header'>
                <h1>Popular Movies</h1>
              </div>
              <div className='mov'>
              
            {result()}
           
            </div>
            <button onClick={showMoreItems} className='button'>Load More</button>
            </div>
  );
}

export default Main;
 