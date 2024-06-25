import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {details} = props
  const {id, posterPath, title, voteAverage} = details

  return (
    <li className="movie-card">
      <img className="movie-poster" src={posterPath} alt={title} />
      <p>{title}</p>
      <p>Rating: {voteAverage}</p>
      <Link to={`/movie/${id}`}>
        <button type="button" className="view-details-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
