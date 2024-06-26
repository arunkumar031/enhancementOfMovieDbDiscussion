import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import MovieContext from './context/movieContext'

import Navbar from './components/Navbar'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import MovieDetails from './components/MovieDetails'
import SearchedMovies from './components/SearchedMovies'

import './App.css'

// write your code here
class App extends Component {
  state = {
    searchInput: '',
    apiStatus: '',
    searchMoviesList: [],
    searchMoviesData: {},
  }

  onChangeInput = searchInput => {
    this.setState({searchInput})
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

  onClickSearchBtn = async () => {
    this.setState({apiStatus: 'IN_PROGRESS'})
    const {searchInput} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a3f2c13e5f49ad957ea405931074c495&language=en-US&query=${searchInput}&page=1`,
    )
    const data = await response.json()
    if (response.ok === true) {
      const newData = this.getUpdatedData(data)
      this.setState({
        apiStatus: 'SUCCESS',
        searchMoviesList: newData.results,
        searchMoviesData: newData,
      })
    }
  }

  render() {
    const {
      searchInput,
      apiStatus,
      searchMoviesList,
      searchMoviesData,
    } = this.state
    return (
      <MovieContext.Provider
        value={{
          searchMoviesData,
          searchMoviesList,
          apiStatus,
          searchInput,
          onChangeSearchInput: this.onChangeInput,
          onClickSearchBtn: this.onClickSearchBtn,
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Popular} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Route exact path="/search/movie" component={SearchedMovies} />
        </Switch>
      </MovieContext.Provider>
    )
  }
}

export default App

// <Route exact path="/search/movie" component={SearchedMovies} />
