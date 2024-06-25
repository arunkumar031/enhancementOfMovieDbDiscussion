import {Link, withRouter} from 'react-router-dom'
import MovieContext from '../../context/movieContext'

import './index.css'

const Navbar = props => {
  const renderSearchBar = () => (
    <MovieContext.Consumer>
      {value => {
        const {searchInput, onChangeSearchInput, onClickSearchBtn} = value

        const onChangeInput = event => {
          onChangeSearchInput(event.target.value)
        }

        const onClickSearch = event => {
          event.preventDefault()
          const {history} = props
          onClickSearchBtn()
          history.push('/search/movie')
        }

        return (
          <div className="input-container">
            <input
              type="text"
              value={searchInput}
              onChange={onChangeInput}
              className="searchInput"
              placeholder="Search"
            />
            <button type="button" onClick={onClickSearch}>
              Search
            </button>
          </div>
        )
      }}
    </MovieContext.Consumer>
  )

  return (
    <div className="navbar">
      <h1>movieDB</h1>
      {renderSearchBar()}
      <ul className="categories">
        <li className="nav-btn">
          <Link to="/">Popular</Link>
        </li>
        <li className="nav-btn">
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li className="nav-btn">
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>
    </div>
  )
}
export default withRouter(Navbar)
