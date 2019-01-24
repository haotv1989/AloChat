//import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation'
import Icon from 'react-native-ionicons';
import RoomScreen from './MainScreen/RoomScreen'
import SettingScreen from './MainScreen/SettingScreen'
import ChatScreen from './ChatScreen'
import MainSreen from './MainScreen'

const HomeStack = createStackNavigator({
  Main: { screen: MainSreen },
  Chat: { screen: ChatScreen}
 
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Room: { screen: RoomScreen },
    Setting: { screen: SettingScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home'${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Room') {
          iconName = `people'${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Setting') {
          iconName = `settings'${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showIcon: true ,
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;

