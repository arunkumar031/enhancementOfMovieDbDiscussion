import {Component} from 'react'

import Navbar from '../Navbar'
import MovieCard from '../MovieCard'

import './index.css'

class Popular extends Component {
  state = {moviesList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US&page=1',
    )
    const data = await response.json()
    console.log(data)
    const moviesList = data.results
    this.setState({moviesList})
  }

  renderMovies = () => {
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

  render() {
    return <div>{this.renderMovies()}</div>
  }
}

export default Popular
