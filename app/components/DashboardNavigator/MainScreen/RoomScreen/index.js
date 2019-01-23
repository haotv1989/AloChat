import React,{Component} from "react";
import { ListView,View, Text } from "react-native";
import Header from './Header'
import styles from './styles'
export default class RoomScreen extends Component {
  render() {
    return (   
    <ListView
        style={styles.container}
        renderHeader={() =><Header/>}
      />
    );
  }
}