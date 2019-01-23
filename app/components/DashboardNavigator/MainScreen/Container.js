import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MainScreenComponent from './Component'

const MainScreenContainer = props =>
  <MainScreenComponent
    loading={props.loading}
    error={props.error} />

const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error,
})

MainScreenContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps)(MainScreenContainer)
