import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'
import MovieCard from '../MovieCard'

import './index.css'

class Popular extends Component {
  state = {moviesData: {}, moviesList: [], apiStatus: ''}

  componentDidMount() {
    this.getData()
  }

  getUpdatedData = data => ({
    totalPages: data.total_pages,
    totalResults: data.total_results,
    results: data.results.map(each => ({
      id: each.id,
      posterPath: `https://image.tmdb.org/t/p/w500/${each.poster_path}`,
      voteAverage: each.vote_average,
      title: each.title,
    })),
  })

  getData = async () => {
    this.setState({apiStatus: 'IN_PROGRESS'})
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US&page=1',
    )
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const newData = this.getUpdatedData(data)
      this.setState({
        apiStatus: 'SUCCESS',
        moviesData: newData,
        moviesList: newData.results,
      })
    }
  }

  renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderMovies = () => {
    const {moviesList} = this.state

    return (
      <>
        <ul className="movies-list">
          {moviesList.map(each => (
            <MovieCard key={each.id} details={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    if (apiStatus === 'IN_PROGRESS') {
      return this.renderLoadingView()
    }
    return <div>{this.renderMovies()}</div>
  }
}

export default Popular
