import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity, Alert} from 'react-native'
import { Badge } from 'react-native-elements'
import styles from './Styles'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

loadData = (data)=> {
  console.log(data)
}
class ProfileComponent extends Component { 
  constructor (props) {
    super(props);
      
    //this.getImage = this.getImage.bind(this)
  }
 
   render() {
    const data = this.props.data;  
    loadData(data);
    //Alert.alert(this.props.data); 
       
      return (
        <View style={styles.container}>
            <View style={styles.header}>
           
            </View>
            <View>
            <Image style={styles.avatar} source={{uri: this.props.data.Image_Avatar}}/>
            <Badge  status="success"  style={{ position: 'absolute', top: -4, right: -4 }}  />
             </View>
          
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{this.props.data.DisplayName}</Text>
                <Text style={styles.info}>{this.props.data.Sex} / { this.props.data.BirthDate}</Text>
                <Text style={styles.description}>{this.props.data.Status}</Text>
                
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
    data: PropTypes.object,
    navigation:PropTypes.object.isRequired
   
  }
export default  withNavigation(ProfileComponent)
