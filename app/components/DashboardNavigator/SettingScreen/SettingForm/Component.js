import React, { Component } from 'react';
import { View,  FlatList,TouchableOpacity,Alert  } from "react-native";
import styles from './Styles'
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
      logout:props.logout,
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
      Alert.alert("Hello");
    }
    else if (text==='Change Password')
    {

    }
    else if (text==='Notifications')
    {

    }
    else
    {
     
      this.setState({
        logout: !this.state.logout});
    }
  };
  keyExtractor = (item, index) => index
  
  renderItem = ({ item }) => (
    <TouchableOpacity   activeOpacity={0.8}    onPress={() => this._onPressButton(item.name)} >
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
