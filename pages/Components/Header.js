import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
// import "bootstrap/dist/css/bootstrap.css";
function Header(props) {
  return <div >
      <header className='header' >
          <img className='logo'  src="https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png" />
          <img className='logo-one'  src="https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg" />
      </header>
       <div className='banner'>
          </div>
          <h1 className='img_h'>Spider-Man: No Way Home</h1>
          <p className='img-p'>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
          <div className="search">
            <input className='input' type="text" placeholder="Search Movie and click Enter"/>
            <SearchIcon className='icon'/>
              </div> 
              <div className='main_header'>
                <h1>Popular Movies</h1>
              </div>
             
  </div>;
}
export default Header;
