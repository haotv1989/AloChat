import React, { Component } from 'react'
import SettingFormComponent from './Component'
import { logoutUser } from '../../../../store/session'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const SettingFormContainer = props =>
  <SettingFormComponent
  navigation={props.navigation}
    loading={props.loading}
    error={props.error}
    logout={props.logout} />

const mapStateToProps = state => ({
  loading: state.session.loading, 
  error: state.session.error,
  navigation:state.navigation
})
const mapDispatchToProps = {
  logout: logoutUser
}
SettingFormContainer.propTypes = {
  navigation:  PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingFormContainer)
