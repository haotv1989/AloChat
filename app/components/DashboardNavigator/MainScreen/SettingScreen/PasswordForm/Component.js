import React,{Component} from 'react'
import { View,Text} from 'react-native'
import PropTypes from 'prop-types';

const PasswordFormComponent = props => {
  return(
    <View >
       <Text >{props.title} </Text>
    </View>
 );   
}

PasswordFormComponent.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
}

export default PasswordFormComponent
