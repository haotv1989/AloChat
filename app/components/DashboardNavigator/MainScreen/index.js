//export { default } from './Container'


import React,{Component} from "react";
import { View, Text,Button } from "react-native";

export default class MainScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Main',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons
            name="Main"
            size={24}
            style={{ color: tintColor }}
        />
    )
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


