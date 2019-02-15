import React, { Component } from 'react';
import { View,  FlatList,TouchableOpacity,Alert  } from "react-native";
import styles from './Styles'
import PropTypes from 'prop-types'
import {  ListItem} from "react-native-elements";

const list = [
  {
    name: 'My Profile',
    avatar_url: 'person',   
  },
  {
    name: 'Change Password',
    avatar_url: 'person',   
  },
  {
    name: 'Notifications',
    avatar_url: 'notifications',
    
  },
  {
    name: 'Sign Out',
    avatar_url: 'exit',
    
  },
  // more items
]
class SettingFormComponent extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      dataSource: list,
      
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
    //Alert.alert(JSON.stringify(item.name));
    if(text==='My Profile')
    {
      Alert.alert("My Profile");
    }
    else if (text==='Change Password')
    {
      Alert.alert("Change Password");

    }
    else if (text==='Notifications')
    {
      Alert.alert("Notifications");
    }
    else
    {
      //Alert.alert("Sign Out");
      this._onPressButton =  this.props.logout;
      ;
     
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
SettingFormComponent.propTypes = {
  logout: PropTypes.func.isRequired
}
export default SettingFormComponent
