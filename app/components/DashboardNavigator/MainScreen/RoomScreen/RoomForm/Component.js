import React,{Component} from 'react'
import { View,FlatList } from 'react-native'
import {  ListItem,Header } from "react-native-elements";
import AddRoom from '../AddButton'
import SearchBar from '../SearchBar'
import styles from './Styles'

class RoomFormComponent extends Component {
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
 
  renderHeader = () => {    
    return ( 
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={<SearchBar/>}
      rightComponent={<AddRoom/>}
    />        
    );  
  }; 
 
  render () {    
    return (  
    
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.dataSource}
        renderItem={this.renderItem}      
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}  
      />
    )
  }
}



export default RoomFormComponent
