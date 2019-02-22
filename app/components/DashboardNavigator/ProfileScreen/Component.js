import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './Styles'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
class ProfileComponent extends Component {  
   render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.info}>UX Designer / Mobile developer</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                
                <TouchableOpacity style={styles.buttonContainer}  onPress={ () => { this.props.navigation.navigate('EditProfile') } }>
                  <Text>Change Information</Text>  
                </TouchableOpacity>       
               
              </View>
          </View>
        </View>
      );
    }
  }
export default  withNavigation(ProfileComponent)
