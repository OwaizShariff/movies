import React from 'react';
import { useState,useEffect } from 'react';



function Header(props) {
  // const [data, setData] = useState(title);
  // const [search, setSearch ] = useState();
  
  return <div >
      <header className='header' >
          <img className='logo'  src="https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png" />
          <img className='logo-one'  src="https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg" />
      </header>
       <div className='banner'>
          </div>
          <h1 className='img_h'>Spider-Man: No Way Home</h1>
          <p className='img-p'>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
          
  </div>;
}
export default Header;
