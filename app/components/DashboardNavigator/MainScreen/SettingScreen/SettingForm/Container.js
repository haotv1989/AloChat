import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { restoreSession } from  '../../../../../store/session/actions'

import SettingComponent from './Component'

class SettingContainer extends Component {
 
  componentDidMount() {
    this.props.restore()
  }

  render() {
    return (
      <SettingComponent
        restoring={this.props.restoring}
        logged={this.props.logged}/>)
  } 
}

const mapStateToProps = state => ({
  restoring: state.session.restoring,
  logged: state.session.user != null,
})

const mapDispatchToProps = {
  restore: restoreSession
}

SettingContainer.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  restore: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer)
