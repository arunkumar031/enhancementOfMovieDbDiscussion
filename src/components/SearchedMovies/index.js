import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'
import Navbar from '../Navbar'
import MovieContext from '../../context/movieContext'

const SearchedMovies = () => (
  <MovieContext.Consumer>
    {value => {
      const {apiStatus, searchMoviesList} = value

      const renderMovies = () => (
        <>
          <ul className="movies-list">
            {searchMoviesList.map(each => (
              <MovieCard key={each.id} details={each} />
            ))}
          </ul>
        </>
      )

      const renderLoadingView = () => (
        <div>
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )

      if (apiStatus === 'IN_PROGRESS') {
        return renderLoadingView()
      }
      return <div>{renderMovies()}</div>
    }}
  </MovieContext.Consumer>
)

export default SearchedMovies

// const {input} = this.props
