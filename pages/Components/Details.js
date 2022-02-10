import React from 'react';
import Link from 'next/link';


function Details(props) {
 
  const img1 = "https://image.tmdb.org/t/p/w500" ;

  return(
    <Link href={`/Components/${props.id}`} key={props.id}>
    <div className="container" >
    <img className="photo" src={img1 + props.movie} alt="" />
    </div> 
    </Link>
  )
}

export default Details;
