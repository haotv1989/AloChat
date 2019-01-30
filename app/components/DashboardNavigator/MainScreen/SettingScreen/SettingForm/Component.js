import React,{Component} from 'react'
import { View,ListView,ScrollView } from 'react-native'
import styles from './Styles'
import SettingRow from '../SettingRow' 
var data =[{title:"My Profile", image:'person' }, {title:"Change Password", image: 'lock'}, {title:"Logout", image: 'log-out'}]; 
class SettingFormComponent extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(data),
      };
    };    
    static navigationOptions =
      {
        title: 'Settings',
      };
    render() {
          return (
            <ScrollView scrollsToTop={false}>
            <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <SettingRow {...data}  onPress={() => this.props.navigation.navigate('Chat')} />  }
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            </ScrollView>
            
          );
        }
      }


export default SettingFormComponent
