import React, { Component } from 'react'
import ProfileFormComponent from './Component'
import PropTypes from 'prop-types';
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
  logout: logoutUser
}
ProfileContainer.propTypes = {
  navigation:  PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
