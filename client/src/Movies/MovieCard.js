import React from 'react';

const MovieCard = (props) => {

  return(
  <div className="save-wrapper">
    <div className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <em> {props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    {props.children}
  </div>
  )

}


export default MovieCard;
// if (props.button){
//   return(
//   <div className="save-wrapper">
//     <div className="movie-card">
//       <h2>{props.title}</h2>
//       <div className="movie-director">
//         Director: <em> {props.director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{props.metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {props.stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//     <div className="save-button">Save</div>
//   </div>
// );
// }else if (!props.button){ return(
// <div className="save-wrapper">
//     <div className="movie-card">
//       <h2>{props.title}</h2>
//       <div className="movie-director">
//         Director: <em> {props.director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{props.metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {props.stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   </div>)
// }
// };