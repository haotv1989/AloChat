import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity,TouchableHighlight} from 'react-native'
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
var Form = t.form.Form;
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});
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
        options: ['Open camera', 'Select from gallery', 'Cancel']
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
  }};
 
class ProfileFormComponent extends Component {  
  constructor (props) {
    super(props);
   
    this.onPress = this.onPress.bind(this);
  }
  onPress = () => {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      this.clearForm();
    }
  };
  getInitialState= () => {
    return {
      options: options,
      value: null
    }
  };

  onChange(value) {    
    var options = t.update(this.state.options, {
      fields: {
        displayName: {
          editable: {'$set': !value.disable}
        }
      }
    });
    this.setState({options: options, value: value});
  }
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
       <Form    style=    {styles.fontCamera}
          ref="form"
          type={User}
          //value={this.state.value}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ProfileFormComponent
