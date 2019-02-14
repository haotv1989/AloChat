import React, { Component } from 'react'
import SettingForm from './SettingForm'
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
export default SettingScreenComponent


