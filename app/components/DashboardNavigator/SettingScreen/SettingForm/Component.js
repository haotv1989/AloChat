import React, { Component } from 'react';
import { View,  FlatList,TouchableOpacity,Alert  } from "react-native";
import styles from './Styles'
import PropTypes from 'prop-types'
import {ListItem} from "react-native-elements";
import ListDataMenu from '../MockData/DataMenu'
import { withNavigation,NavigationActions } from 'react-navigation';

class SettingFormComponent extends Component {
 
  constructor() {
    super();    
    this.state = {
      dataSource: ListDataMenu
             
    };    
    this._onPressButton = this._onPressButton.bind(this);
  };
  
  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };   
  _onPressButton = (text) => {
    //const { navigate }= this.props.navigation;
    switch(text) {
      case 'My Profile':
        return this._onPressButton= this.props.navigation.navigate('Profile');
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
SettingFormComponent.propTypes = {
  logout:PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}
export default withNavigation (SettingFormComponent)
