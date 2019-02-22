import React,{Component} from 'react'
import { View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './Styles'
import PropTypes from 'prop-types';
import User from '../ProfileStructure'
import t from 'tcomb-form-native'; 

var Form = t.form.Form;
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});
var User = t.struct({
  displayName : t.String,
  sex: Gender,
  staffCode: t.String,
  birthDate: t.Date,
  status: t.maybe(t.t.String)
});
var options = {
  fields: {
    displayName: { placeholder: 'Display Name'
    ,
    error: 'Insert a Display Name'
  },
    sex: { placeholder: 'Gender'},
    staffCode: { placeholder: 'UserName - Leasys',
    error: 'Insert a UserName - Leasys'},  
    birthDate: {
      mode: 'date' // display the Date field as a DatePickerAndroid
      ,
      error: 'Choose your birth date'}
    },
    status: { placeholder: 'How do you feel, today!!'},
  };

class ProfileFormComponent extends Component {  
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
       <Form
          ref="form"
          type={User}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default ProfileFormComponent
