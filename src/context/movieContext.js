import React from 'react'

const MovieContext = React.createContext({
  searchInput: '',
  searchMoviesData: {},
  searchMoviesList: [],
  apiStatus: '',
  onChangeSearchInput: () => {},
  onClickSearchBtn: () => {},
})

export default MovieContext
