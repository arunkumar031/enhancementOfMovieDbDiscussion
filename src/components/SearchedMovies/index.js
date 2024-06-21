import {Component} from 'react'

import MovieCard from '../MovieCard'
import MovieContext from '../../context/movieContext'

class SearchedMovies extends Component {
  state = {moviesList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {input} = this.props
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US&query=${input}&page=1`,
    )
    const data = await response.json()
    const moviesList = data.results
    this.setState({moviesList})
  }

  render() {
    const renderMovies = () => {
      const {moviesList} = this.state
      console.log(moviesList)
      return (
        <ul className="movies-list">
          {moviesList.map(each => (
            <MovieCard key={each.id} details={each} />
          ))}
        </ul>
      )
    }

    return <div>{renderMovies()}</div>
  }
}

export default SearchedMovies
