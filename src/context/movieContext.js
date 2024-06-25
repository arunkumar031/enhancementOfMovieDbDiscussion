import React from 'react'

const MovieContext = React.createContext({
  searchInput: '',
  searchMoviesList: [],
  apiStatus: '',
  onChangeSearchInput: () => {},
  onClickSearchBtn: () => {},
})

export default MovieContext
