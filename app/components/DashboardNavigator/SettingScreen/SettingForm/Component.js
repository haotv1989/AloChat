import React, { Component } from 'react';
import { View,  FlatList,TouchableOpacity } from "react-native";
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
  static navigationOptions = {
    tabBarLabel: 'Setting!',
  }; 
  constructor() {
    super();   
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
  _onPress(item) {
    this.props.navigation.navigate('Profile', {
      itemId: item.id,
      title: item.name,
    });
  }
  keyExtractor = (item, index) => index
  
  renderItem = ({ item }) => (
    <TouchableOpacity    onPress={() => this._onPress(item)} >
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
