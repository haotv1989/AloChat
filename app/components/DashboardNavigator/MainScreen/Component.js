import React, { Component } from 'react'
import { View, Text,Button } from "react-native";
import Icon from "react-native-ionicons";

class MainScreenComponent extends Component {
  static navigationOptions = {
    title: 'Home!',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
       
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </View>
    );
  }
}


export default MainScreenComponent
