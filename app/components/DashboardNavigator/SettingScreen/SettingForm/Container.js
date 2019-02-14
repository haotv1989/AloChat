import React, { Component } from 'react'
import SettingFormComponent from './Component'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
const SettingFormContainer = props =>
  <SettingFormComponent
    loading={props.loading}
    error={props.error} />

const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error,
})

SettingFormContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default connect(mapStateToProps)(SettingFormContainer)
