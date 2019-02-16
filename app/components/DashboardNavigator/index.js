import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation'
import Icon from 'react-native-ionicons';
import RoomScreen from './RoomScreen'
import SettingScreen from './SettingScreen'
import ChatScreen from './ChatScreen'
import MainScreen from './MainScreen'
import ProfileScreen from './ProfileScreen' 
import PasswordScreen from './PasswordScreen' 

const HomeStack = createStackNavigator({
  Main: { screen: MainScreen },
  Chat: { screen: ChatScreen}
 
});
const RoomStack = createStackNavigator({
  Room: { screen: RoomScreen }
  
 
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
      title:'Home',
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
    Room: { screen: RoomStack, 
      path: '/Rooms',
      navigationOptions: {
        title:'Room',
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
        title:'Settings',
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
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
  
);

TabNavigator.navigationOptions = ({ navigation }) => { 
  let title; let focusedRouteName = navigation.state.routes[navigation.state.index].routeName; 
  if (focusedRouteName === 'Home') 
  { 
    title = 'Home'; 
// of course in this case it's the same, but do whatever you want here 
} 
else if (focusedRouteName === 'Settings') 
{ 
  title = 'Room';
 } 
 else
 {
  title='Settings';
 }

return { title, }; 
};

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;

