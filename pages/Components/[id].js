import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

function movie() {
    const router = useRouter();
    const [mov, setMov] = React.useState([]);
    const [char, setChar] = React.useState([]);
    const {id} = router.query;
    

    const img_one = "https://image.tmdb.org/t/p/w1280"
    const img_two = "https://image.tmdb.org/t/p/w500"

    const fetch =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0122f66b835be1351367d17f60ca287b&language=en-US`)
        .then((result)=>{   
            setMov(result.data)
        }
        )
        .catch((err)=> console.log(err))
    }
    const fetch_one =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4eb0f63066123e2dc99ea2a934d543da`)
        .then((result)=>{   
            setChar(result.data.cast)
        }
        )
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        fetch(); 
       
    },[])

    useEffect(()=>{
        console.log('mov',mov);
    },[mov])

    useEffect(()=>{
        fetch_one();  
    },[])

    useEffect(()=>{
        
        console.log('char',char);
    },[char])

    const mapchar = () => {
        return char.map((char)=>{
            return(
                <div className="char" key={char.id}>
                    <div className='actor_box'>
                    <img className='actor' src={img_two + char.profile_path} alt=""/>
                    <h3>{char.name}</h3>
                    <p>{char.character}</p>
                    </div>
                </div>
            )
        })
    }

  return (

    <div>
        <header className='header' >
          <img className='logo'  src="https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png" />
          <img className='logo-one'  src="https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg" />
      </header>
      <div className='header_'>
          <h1 className='line'>Home</h1>
          <p className='line'>|</p>
          <p className='line'>{mov.title}</p>
      </div>
      <div> 
          <img className='banner_drop' src={img_one + mov.backdrop_path} alt="" />
      </div>
        <div className='background_one'>
        </div>
        <div>
            <img className='img_two' src={img_two + mov.poster_path} alt=''/>
        </div>
        <div className='details_'>
        <h1>{mov.title}</h1>
        <h3 className='plot'>PLOT</h3>
        <p className='plot'>{mov.overview}</p>
        <h3 className='plot'>IMDB RATING</h3>
        <p className='rating'>{mov.vote_average}</p>
        </div >
        
        <div className='box'>
        <div className='box_o'>
        <p className='box_'>Running Time:</p>
        <p className='box_'>{mov.runtime} minutes</p>
        </div>

        <div className='box_o'>
            <p className='box_'>Budget:</p>
            <p className='box_'>${mov.budget}</p>
            </div>

        <div className='box_o'>
       <p className='box_'>Revenue:</p>
        <p className='box_'>${mov.revenue}</p>
       </div>
        </div>
        <h1 className='actor_'>Actors</h1>

        <div className='cards'>
              {mapchar()}
           </div>

        
            
            

       
            
    </div>
  
  )
}

export default movie;