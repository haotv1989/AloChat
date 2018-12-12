import {  createStackNavigator, createAppContainer  } from 'react-navigation'

import ChatScreen from './ChatScreen'

const routeConfig = {
  Chat: { screen: ChatScreen  }
}
export default createAppContainer(routeConfig);


 