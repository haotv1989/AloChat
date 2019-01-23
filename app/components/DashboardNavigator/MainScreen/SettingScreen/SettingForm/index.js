//export { default } from './Container'
import React,{Component} from "react";
import { View, Text,ListView } from "react-native";
import styles from './Styles'
import SettingRow from '../SettingRow'
// Require all your images here
var data =[{title:"My Profile", image:'person' }, {title:"Change Password", image: 'lock'}, {title:"Logout", image: 'log-out'}];
export default class SettingForm extends Component {

constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows( data),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <SettingRow {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
      
    );
  }
}
