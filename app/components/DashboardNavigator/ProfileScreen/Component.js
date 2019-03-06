import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity} from 'react-native'
import { Badge } from 'react-native-elements'
import styles from './Styles'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class ProfileComponent extends Component {  
   render() {
    const data = this.props.data;       
      return (
        <View style={styles.container}>
            <View style={styles.header}>
           
            </View>
            <View>
            <Image style={styles.avatar} source={{uri: data.Image_Avatar}}/>
            <Badge  status="success"  style={{ position: 'absolute', top: -4, right: -4 }}  />
             </View>
          
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{data.DisplayName}</Text>
                <Text style={styles.info}>{data.Sex} / {data.BirthDate}</Text>
                <Text style={styles.description}>{data.StatusAccount}</Text>
                
                <TouchableOpacity style={styles.buttonContainer}  onPress={ () => { this.props.navigation.navigate('EditProfile') } }>
                  <Text>Change Information</Text>  
                </TouchableOpacity>       
               
              </View>
          </View>
        </View>
      );
    }
  }
  ProfileComponent.propTypes = {
    data: PropTypes.array.isRequired,
    navigation:PropTypes.object.isRequired
   
  }
export default  withNavigation(ProfileComponent)
