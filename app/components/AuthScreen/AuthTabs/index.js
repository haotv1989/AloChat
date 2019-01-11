import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const SettingsTabs = createBottomTabNavigator({
  Login: {
      screen: LoginForm,
      
  },
  SignUp: {
      screen: SignUpForm,
     
  }
});
const AppContainer = createAppContainer(SettingsTabs);
export default AppContainer;
