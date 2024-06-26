import {Component} from 'react'

import './index.css'

class Pagination extends Component {
  state = {pageNo: 1}

  onClickNext = () => {
    const {onClickNextBtn} = this.props
    onClickNextBtn()
  }

  onClickPrev = () => {
    const {onClickPrevBtn} = this.props
    onClickPrevBtn()
  }

  /* onClickNext = () => {
    const {apiCallback, totalPages} = this.props

    this.setState(
      prevState => ({
        pageNo:
          prevState.pageNo < totalPages
            ? prevState.pageNo + 1
            : prevState.pageNo,
      }),
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  } 

  onClickPrev = () => {
    const {apiCallback} = this.props

    this.setState(
      prevState => ({
        pageNo: prevState.pageNo > 1 ? prevState.pageNo - 1 : prevState.pageNo,
      }),
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  } */

  render() {
    const {pageNo} = this.props
    return (
      <div className="pagination">
        <button
          type="button"
          className="pagination-btn"
          onClick={this.onClickPrev}
        >
          Prev
        </button>
        <p>{pageNo}</p>
        <button
          type="button"
          className="pagination-btn"
          onClick={this.onClickNext}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Pagination
