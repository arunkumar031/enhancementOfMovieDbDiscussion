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
  state = {input: '', searchInput: ''}

  onChangeInput = searchInput => {
    this.setState({searchInput})
  }

  onClickSearchBtn = () => {
    const {searchInput} = this.state
    this.setState({input: searchInput, searchInput: ''})
  }

  render() {
    const {input, searchInput} = this.state
    return (
      <MovieContext.Provider
        value={{
          searchInput,
          input,
          onChangeSearchInput: this.onChangeInput,
          onClickSearchBtn: this.onClickSearchBtn,
        }}
      >
        <Navbar />
        {input ? (
          <SearchedMovies input={input} />
        ) : (
          <Switch>
            <Route exact path="/" component={Popular} />
            <Route exact path="/top-rated" component={TopRated} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Switch>
        )}
      </MovieContext.Provider>
    )
  }
}

export default App

// <Route exact path="/search/movie" component={SearchedMovies} />
