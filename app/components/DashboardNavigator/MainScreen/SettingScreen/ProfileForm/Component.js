import React,{Component} from 'react'
import { View,Text} from 'react-native'
import styles from './Styles'
import PropTypes from 'prop-types';

class ProfileFormComponent extends Component {
  static navigationOptions =
  {
     title: 'Profile',
  };
  
  
    render() {
        
            return(
              <View >
       
                 <Text > { this.props.navigation.state.params.ListViewClickItemHolder } </Text>
       
              </View>
           );            
         
        }
      }


export default ProfileFormComponent
