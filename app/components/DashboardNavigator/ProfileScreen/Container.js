import React, { Component } from 'react'
import ProfileComponent from './Component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { restoreSession } from '../../../store/session'
const ProfileContainer = props =>
  <ProfileComponent
  navigation={props.navigation}
    loading={props.loading}
    error={props.error}
    logout={props.logout} />

const mapStateToProps = state => ({
  loading: state.session.loading, 
  error: state.session.error,
})
const mapDispatchToProps = {
  restore: restoreSession
}
ProfileContainer.propTypes = {
  navigation:  PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
