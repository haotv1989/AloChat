import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ChatScreen from './ChatScreen'

const AppNavigator = createStackNavigator({
  Chat: {
    screen: ChatScreen
  }
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;



 