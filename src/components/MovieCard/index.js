import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {details} = props

  return (
    <li className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt={details.id}
      />
      <p>{details.title}</p>
      <p>{details.vote_average}</p>
      <Link to={`/movie/${details.id}`}>
        <button type="button" className="view-details-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
