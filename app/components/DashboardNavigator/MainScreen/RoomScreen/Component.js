import React, { Component } from 'react'
import { View  } from 'react-native';
import HeaderRoom from './Header'
import RoomForm from './RoomForm'
import styles from './styles'

export default class RoomScreenComponent extends Component {
  render() {
    return (
    <View>  
      <RoomForm/>
      </View>
      )
      
  }
}