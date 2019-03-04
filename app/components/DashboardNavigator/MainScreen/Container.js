import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { restoreSession } from '../../../store/session'
import MainScreenComponent from './Component'

const MainScreenContainer = props =>
  <MainScreenComponent 
        navigation={props.navigation}
        restoring={props.restoring}
        logged={props.logged} />

const mapStateToProps = state => ({
  restoring: state.session.restoring,
  logged: state.session.user != null,
})

const mapDispatchToProps = {
  restore: restoreSession
}

MainScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  restore: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreenContainer)
