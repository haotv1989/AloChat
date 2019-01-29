import React, { Component } from 'react'
import HeaderRoom from './Header'
import RoomForm from './RoomForm'

export default class RoomScreenComponent extends Component {
  render() {
    return (
    <HeaderRoom/>,     
      <RoomForm/>
      )
  }
}