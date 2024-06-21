import {Link, Redirect} from 'react-router-dom'
import MovieContext from '../../context/movieContext'

import './index.css'

const Navbar = () => (
  <MovieContext.Consumer>
    {value => {
      const {searchInput, onChangeSearchInput, onClickSearchBtn} = value

      const onChangeInput = event => {
        onChangeSearchInput(event.target.value)
      }

      const onClickSearch = () => {
        onClickSearchBtn()
        return <Redirect to="/search/movie/" />
      }

      return (
        <div className="navbar">
          <h1>movieDB</h1>
          <div className="input-container">
            <input
              type="search"
              value={searchInput}
              onChange={onChangeInput}
              className="searchInput"
            />

            <button type="button" onClick={onClickSearch}>
              Search
            </button>
          </div>
          <div className="categories">
            <Link to="/">
              <button type="button" className="nav-btn">
                Popular
              </button>
            </Link>
            <Link to="/top-rated">
              <button type="button" className="nav-btn">
                Top Rated
              </button>
            </Link>
            <Link to="/upcoming">
              <button type="button" className="nav-btn">
                Upcoming
              </button>
            </Link>
          </div>
        </div>
      )
    }}
  </MovieContext.Consumer>
)

export default Navbar
