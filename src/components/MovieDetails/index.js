import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'

import './index.css'

class MovieDetails extends Component {
  state = {
    movieData: {},
    castData: [],
    genres: [],
    castApiStatus: '',
    movieApiStatus: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({castApiStatus: 'IN_PROGRESS', movieApiStatus: 'IN_PROGRESS'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US`,
    )
    const movieData = await movieResponse.json()
    console.log(movieData)

    const castResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US`,
    )
    const castData = await castResponse.json()
    console.log(castData)
    if (castResponse.ok === true) {
      this.setState({
        castApiStatus: 'SUCCESS',
        castData: castData.cast,
      })
    }
    if (movieResponse.ok === true) {
      this.setState({
        movieApiStatus: 'SUCCESS',
        movieData,
        genres: movieData.genres,
      })
    }
  }

  renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {
      movieData,
      castData,
      genres,
      movieApiStatus,
      castApiStatus,
    } = this.state
    console.log(movieData.genres)
    return (
      <div>
        {movieApiStatus === 'SUCCESS' ? (
          <>
            <div className="movie-container">
              <h1>{movieData.title}</h1>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                alt={movieData.id}
              />
              <p>Rating: {movieData.vote_average}</p>
              <p>Runtime: {movieData.runtime} minutes</p>
              <div>
                <p>Genre:</p>
                <ul className="genre">
                  {genres.map(each => (
                    <li key={each.id}>{each.name}</li>
                  ))}
                </ul>
              </div>
              <p>Release Date: {movieData.release_date}</p>
              <h1>Overview</h1>
              <p>{movieData.overview}</p>
            </div>
          </>
        ) : (
          <>{this.renderLoadingView()}</>
        )}
        {castApiStatus === 'SUCCESS' ? (
          <div className="cast-container">
            <h1>Cast</h1>
            <ul className="cast-list">
              {castData.map(each => (
                <li key={each.id} className="cast">
                  <img
                    className="cast-img"
                    src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`}
                    alt={each.cast_id}
                  />
                  <p>Original Name: {each.original_name}</p>
                  <p>Character Name: {each.character}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>{this.renderLoadingView()}</>
        )}
      </div>
    )
  }
}

export default MovieDetails
