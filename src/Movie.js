function Movie({movie}){
  return <div>
  <img src={movie.medium_cover_image} alt={movie.title}/>
  <h2>{movie.title}</h2>
  <div>{movie.summary}</div>
  <ul>
    {movie.genres
      ? movie.genres.map((g) => <li key={g}>{g}</li>)
      : null}
  </ul>
</div>
}

export default Movie;