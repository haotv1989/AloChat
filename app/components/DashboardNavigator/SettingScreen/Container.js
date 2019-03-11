import React, { Component } from 'react'
import SettingScreenComponent from './Component'
import { logoutUser } from '../../../store/session'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const SettingScreenContainer = props =>
  <SettingScreenComponent
  navigation={props.navigation}
    loading={props.loading}
    error={props.error}
    logout={props.logout} />

const mapStateToProps = state => ({
  loading: state.session.loading, 
  error: state.session.error
  
})
const mapDispatchToProps = {
  logout: logoutUser
}
SettingScreenContainer.propTypes = {
  navigation:  PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreenContainer)
