import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity, Alert} from 'react-native'
import { Badge } from 'react-native-elements'
import styles from './Styles'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

loadData = (data)=> {
  console.log('Data component profile:')
  console.log(data)
}
var moment = require('moment');
class ProfileComponent extends Component { 
  
  constructor (props) {
    super(props);
    this.state = {    
         
          image_Avatar: null,
          displayName: null,
          sex: null, 
          staffCode: null,
          birthDate: null,
          status: null,
          statusAccount: null,
        
    }
    //this.getImage = this.getImage.bind(this)
  }
  
 
   render() {    
      
      
      const  data =this.props.data;
      console.log(' Data component profile:')
      console.log(data)
   
    const displayName =data.map(data => data.DisplayName)
    const birthDate=  moment(data.map(data => data.BirthDate)).format('DD/MM/YYYY')
    const image_Avatar= data.map(data => data.Image_Avatar);
    const  sex=data.map(data => data.Sex)
    const staffCode=  data.map(data => data.StaffCode)
    const  status=data.map(data => data.Status)
    const statusAccount= data.map(data => data.StatusAccount)
        
        console.log(' DisplayName component profile:')
        console.log(displayName)
        console.log(birthDate)
      return (

        <View style={styles.container}>
            <View style={styles.header}>           
            </View>
            <View>
            <Image style={styles.avatar} source={{uri: image_Avatar  ? 'http://www.chailease.com.vn//images/new-logo.png': image_Avatar}}/>
            <Badge  status="success"  style={{ position: 'absolute', top: -4, right: -4 }}  />
             </View>
          
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{ displayName}</Text>
                <Text style={styles.name}>{ staffCode}</Text>
                <Text style={styles.info}>{ sex} / {  birthDate}</Text>
                <Text style={styles.description}>{  status}</Text>
                
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
    navigation:PropTypes.object.isRequired,
    data: PropTypes.shape({
      DisplayName: PropTypes.string.isRequired,
      BirthDate: PropTypes.string.isRequired,
      Image_Avatar: PropTypes.string.isRequired,
      StaffCode: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
      StatusAccount: PropTypes.string.isRequired,
      UpdatedAt: PropTypes.string.isRequired,
      UserID: PropTypes.string.isRequired
    })
   
  }
export default  withNavigation(ProfileComponent)
