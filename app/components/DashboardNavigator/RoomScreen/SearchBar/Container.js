import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { searchRoom } from '../../../../store/room'

import SearchBar from './Component'

const SearchBarContainer = props =>
  <SearchBar search={props.search} />

const mapDispatchToProps = {
  search: searchRoom
}

SearchBarContainer.propTypes = {
  search: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SearchBarContainer)
