import React from 'react'

const MovieContext = React.createContext({
  input: '',
  searchInput: '',
  onChangeSearchInput: () => {},
  onClickSearchBtn: () => {},
})

export default MovieContext
