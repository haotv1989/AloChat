import React, { Component } from 'react'
import PasswordFormComponent from './Component'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const PasswordFormContainer = props =>
  <PasswordFormComponent
    title={props.title}
    error={props.error} />

const mapStateToProps = state => ({
  title: state.session.title,
  error: state.session.error,
})

PasswordFormContainer.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
}

export default connect(mapStateToProps)(PasswordFormContainer)
