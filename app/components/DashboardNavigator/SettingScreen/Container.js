import React, { Component } from 'react'
import SettingScreenComponent from './Component'
import PropTypes from 'prop-types'

  const SettingScreenContainer = props =>
      <SettingScreenComponent navigation={props.navigation}  />


SettingScreenContainer.propTypes = {
  navigation:  PropTypes.object.isRequired
}
export default SettingScreenContainer