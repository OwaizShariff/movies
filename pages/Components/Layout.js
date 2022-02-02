export default function Layout(props) {

  const img1 = "https://image.tmdb.org/t/p/w500" ;
  
    return (
     <div className="container" >
     <img className="photo" src={img1 + props.src} alt="" />

     {/* <p>{props.title}</p> */}
     </div>
    )
  }