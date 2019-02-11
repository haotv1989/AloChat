//import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation'
import Icon from 'react-native-ionicons';
import RoomScreen from './MainScreen/RoomScreen'
import SettingScreen from './MainScreen/SettingScreen'
import ChatScreen from './ChatScreen'
import MainScreen from './MainScreen'
import ProfileScreen from '../DashboardNavigator/MainScreen/SettingScreen/ProfileForm' 
import PasswordScreen from '../DashboardNavigator/MainScreen/SettingScreen/PasswordForm' 

const HomeStack = createStackNavigator({
  Main: { screen: MainScreen },
  Chat: { screen: ChatScreen}
 
});
const SettingStack = createStackNavigator({
  Setting: {screen: SettingScreen},
  Profile: { screen: ProfileScreen },
  ChangePassword: { screen: PasswordScreen}
 
});

const TabNavigator = createBottomTabNavigator(  
  {
    Home: { screen: HomeStack,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
    Room: { screen: RoomScreen, 
      path: '/Rooms',
      navigationOptions: {
        tabBarLabel: 'Room',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-contacts' : 'ios-contacts'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },  
    Setting: { screen: SettingStack,
      path: '/Settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-settings' : 'ios-settings'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      }, 
    }
  },
  
);

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;

