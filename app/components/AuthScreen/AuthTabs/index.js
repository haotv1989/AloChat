import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
const TabNavigator = createBottomTabNavigator({
  
    Login:{screen: LoginForm},
    SignUp:{screen: SignUpForm},
  });
export default createAppContainer(TabNavigator);
