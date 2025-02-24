import React from "react";
const MovieCard=({movie: {imdbID,Year, Poster,Title,Type}})=>{
   return (
    <div>
        <div className="movie" key={imdbID}>
            <div>
              <p>{movie.Year}</p>
            </div>
              <img src={movie.Poster !== 'NA'?movie.Poster : 'http://via.placeholder.com/400'} alt={Title}/>
            <div>
              <span>{Type}</span>
              <h3>{Title}</h3>
            </div>          
          </div>
    </div>
   ) 
}
export default MovieCard;