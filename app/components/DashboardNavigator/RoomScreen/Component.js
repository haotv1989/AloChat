import React, { Component } from 'react'
import { View  } from 'react-native';
import RoomForm from './RoomForm'
import styles from './styles'

export default class RoomScreenComponent extends Component {
  static navigationOptions = {
    title: 'Room!',
    
  };
  render() {
    return (
    <View>  
      <RoomForm/>
      </View>
      )
      
  }
}