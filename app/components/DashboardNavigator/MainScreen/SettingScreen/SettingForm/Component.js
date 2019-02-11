import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
const list = [
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
  
  constructor() {
    super();   
    this.state = {
      dataSource: list,
    };
  }; 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  keyExtractor = (item, index) => index
  
  renderItem = ({ item }) => (
    <ListItem
      title={item.name}    
      leftIcon ={{name:item.avatar_url       
      }}      
      
    />
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
