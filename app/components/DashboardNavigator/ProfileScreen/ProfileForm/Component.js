import React,{Component} from 'react'
import { View,Text,Alert,ScrollView,TouchableHighlight} from 'react-native'
import styles from './Styles'
import PropTypes from 'prop-types';
import t from 'tcomb-form-native'; 
import ImageFactory from 'react-native-image-picker-form';
import ImagePicker from 'react-native-image-crop-picker';

ImagePicker.openPicker({
  width: 300,
  height: 400,
  cropping: true
}).then(image => {
  console.log(image);
});
ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
  console.log(image);
});

ImagePicker.showImagePicker(options.urlPath, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    // let source = { uri: response.uri };
    this.setState({urlPath: response.uri})

    // You can also display the image using data:
    // let image_uri = { uri: 'data:image/jpeg;base64,' + response.data };

  this.props.uploadImage(response.uri)
    .then(url => { alert('uploaded'); this.setState({image_uri: url}) })
    .catch(error => console.log(error))

  }
});


var Form = t.form.Form;
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});
var moment = require('moment');
var statusAcount = t.enums({
  On: 'Online',
  Off: 'Offline',
  idle:'Idle'
});
const User = t.struct({
  urlPath:t.String,
  displayName : t.String,
  sex: Gender,
  staffCode: t.String,
  birthDate: t.Date,
  status:t.maybe(t.String),
  statusAccount: statusAcount
});
var options = {  
  auto: 'placeholders',
  
  fields: {
    urlPath:{
      config: {
        title: 'Select image',
        options: ['Open camera', 'Select from gallery', 'Cancel'],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
        // Used on Android to style BottomSheet
        
      },
      error: 'No image provided',
      factory: ImageFactory
    },
    displayName: { //placeholder: 'Display Name'
    
    error: 'Insert a Display Name'
  },
    sex: { //placeholder: 'Gender'
    label: 'Gender',
  },
    staffCode: { //placeholder: 'UserName - Leasys',
    error: 'Insert a UserName - Leasys'},  
    birthDate: {
      config: {
        format: (date) => moment(date).format('DD/MM/YYYY'), 
      },
      mode: 'date' // display the Date field as a DatePickerAndroid
      ,
      blurOnSubmit: true
      ,
      error: 'Choose your birth date'
    }
    ,
    status: { 
      placeholder: 'How do you feel, today!!'
  },
  statusAccount: {
    hidden: true
  },
  userId: {
    hidden: true
  },
  }}; 
class ProfileFormComponent extends Component {  
  constructor (props) {
    super(props);
    this.state = {
			form: {      
				urlPath: null,
        displayName: null,
        sex: null, 
        staffCode: null,
        birthDate: null,
        status: null,
        statusAccount: null,
			},
      isValid: false,
      options:{options},
      
		};        
    this.getImage = this.getImage.bind(this)
  }


  onChange = (value)=> {
    this.setState({value: value});
  }
  handleSubmit = () => {
    var value = this.state.value;
    // console.log("value form");
    // console.log(this.state.value);
    // console.log("value");
    // console.log(value);
    if (value) {
      value.statusAccount='On';
      //console.log(value.statusAccount);
      console.log(value.status);
      if (value.status)
      {
        value.status='';
      }
    this.props.updateProfile( value.urlPath, value.displayName,value.sex, value.staffCode,value.birthDate,value.status, value.statusAccount );
      clearForm();
    }

  };
  
  getInitialState= () => {
    return {
      options: options,
      value: null
    }
  };

 
  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }
  componentDidMount() {
    // give focus to the name textbox
    this.refs.form.getComponent('displayName').refs.input.focus();
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
       <Form    style=    {styles.fontCamera}
         ref='form'
          type={User}
          value={this.state.value}
          onChange={this.onChange}
          options={options}         
        />
        <TouchableHighlight style={styles.button}   onPress={this.handleSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
ProfileFormComponent.propTypes = {  
  navigation:  PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  uploadImage:PropTypes.func.isRequired
}
export default ProfileFormComponent
