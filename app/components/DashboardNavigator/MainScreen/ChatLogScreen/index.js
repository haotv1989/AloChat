import React,{Component} from "react";
import { View, Text } from "react-native";
import HeaderScreen from '../HeaderScreen'
//import ChatLogScreen from '../ChatLogScreen'
import FooterScreen from '../FooterScreen'
export default class ChatLogScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'ChatLog',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons
            name="ChatLog"
            size={24}
            style={{ color: tintColor }}
        />
    )
};
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Log Screen</Text>
      </View>
    );
  }

 
}

