import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from './ContentScreen'
const AppNavigator = createStackNavigator({
  Chat: {
    screen: ChatScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
