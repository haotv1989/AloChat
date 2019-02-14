import React,{Component} from 'react'
import { View,FlatList } from 'react-native'
import {  ListItem } from "react-native-elements";
import styles from './Styles'
var data =[{title:"BOD", image:'person' },{title:"MIS", image:'person' },{title:"Credit Dept", image:'person' }, {title:"Marketing Dept", image: 'person'}, {title:"Customer Service", image: 'person'}];
class RoomFormComponent extends Component {
  static navigationOptions = {
    tabBarLabel: 'Room!',
  };
   constructor() {
    super();   
    this.state = {
      dataSource: data,
    };
  }; 
  renderSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  };
  keyExtractor = (item, index) => index  
  renderItem = ({ item }) => (
    <ListItem
      title={item.title}    
      leftIcon ={{name:item.image       
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
export default RoomFormComponent
