import React, { Component } from 'react'
import SettingForm from './SettingForm'
import PropTypes from 'prop-types'
 class SettingScreenComponent extends Component {
  static navigationOptions = {
    title: 'Setting!',
  }; 
  render() {
    return (      
      <SettingForm/>
      )
  }
}
SettingScreenComponent.propTypes = {
  navigation:  PropTypes.object.isRequired
}
export default SettingScreenComponent


