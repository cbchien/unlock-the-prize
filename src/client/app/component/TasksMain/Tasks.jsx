import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectKeyword,
  fetchJobsIfNeeded,
  invalidateKeyword
} from '../../action'
import Header from '../header';
import Footer from '../footer'


class Tasks extends Component {
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  handleRefreshClick(e) {
    e.preventDefault()

  }

  render() {
    const { lastUpdated } = this.props
    return (
      <div>
        <Header />
        <h2> Tasks Page </h2>
        <Footer />
      </div>
    )
  }
}

Tasks.propTypes = {
  lastUpdated: PropTypes.number
}

function mapStateToProps(state) {
  const { selectedKeyword, jobsByKeyword } = state.jobReducer

  return {
    selectedKeyword
  }
}

export default connect(mapStateToProps)(Tasks)
export { Tasks };
