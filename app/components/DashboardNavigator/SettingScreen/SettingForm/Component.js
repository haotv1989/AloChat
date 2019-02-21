import React, { Component } from 'react';
import { View,  FlatList,TouchableOpacity,Alert  } from "react-native";
import styles from './Styles'
import PropTypes from 'prop-types'
import {ListItem} from "react-native-elements";
import ListDataMenu from '../MockData/DataMenu'

class SettingFormComponent extends Component {
 
  constructor(props) {
    super(props);    
    this.state = {
      dataSource: ListDataMenu  
    };
     
  };
  
  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }; 
  
  _onPressButton = (text) => {
    switch(text) {
      case 'My Profile':
        return this._onPressButton=this.props.navigation.navigate('Profile');
      case 'Change Password':
        return Alert.alert("Change Password");
      case 'Notifications':
        return Alert.alert("Notifications");;    
      default:
        return this._onPressButton =  this.props.logout;
    }   
  };
  keyExtractor = (item, index) => index  
  renderItem = ({ item }) => (
    <TouchableOpacity Button   activeOpacity={0.8}    onPress={() => this._onPressButton(item.name)} >
    <ListItem
      title={item.name}    
      leftIcon ={{name:item.avatar_url       
      }}      
      
    />
    </TouchableOpacity>
  )  
  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.dataSource}
        renderItem={this.renderItem}      
        ItemSeparatorComponent={this.renderSeparator}
       
      />
    )
  }
}
export default SettingFormComponent
