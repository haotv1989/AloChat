import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity, Alert} from 'react-native'
import { Badge,Avatar } from 'react-native-elements'
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
  componentWillMount() {
    let _sex,_status, _date;
    const data =this.props.data;
    var  _gender=data.map(data => data.Sex);
    var statusAccount= data.map(data => data.StatusAccount)
    if (_gender === 'F') {
      _sex = 'Female';  
    } else {
      _sex = 'Male';
    }
    
    if (statusAccount ==='On') {
      _status = 'success';
    } else if (statusAccount ==='Idle') {
      _status = 'warning';
    } else {
      _status = 'none';
    }
     var _birthDate=data.map(data => data.BirthDate);
     console.log(_birthDate)
     _date= moment(new Date(_birthDate)).format('DD/MM/YYYY')
    this.setState({ sex:_sex,statusAccount: _status,birthDate:_date });
  }
 
   render() {  
     const data =this.props.data;
   const displayName =data.map(data => data.DisplayName)
   
    //const birthDate=  moment(data.map(data => data.BirthDate)).format('DD/MM/YYYY')
    const image_Avatar= data.map(data => data.Image_Avatar);
    //const  gender=data.map(data => data.Sex)
    const staffCode=  data.map(data => data.StaffCode)
    const  status=data.map(data => data.Status)
    //const statusAccount= data.map(data => data.StatusAccount)
    return (

        <View style={styles.container}>
            <View style={styles.header}>           
            </View>
            <View style={styles.avatar_bagde}>
            <Image style={styles.avatar} source={{uri: image_Avatar  ? 'https://bootdey.com/img/Content/avatar/avatar6.png': image_Avatar}}/>
            <Badge style={styles.bagde} status={ this.state.statusAccount}    />
            </View>          
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{ displayName}</Text>
                <Text style={styles.info}>{ staffCode}</Text>
                <Text style={styles.info}>{ this.state.sex} / { this.state.birthDate}</Text>
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
    //data: PropTypes.object,
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
