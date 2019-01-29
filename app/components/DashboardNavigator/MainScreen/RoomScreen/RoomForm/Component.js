import React,{Component} from 'react'
import { View,ListView } from 'react-native'
import styles from './Styles'
import RoomRow from '../RoomRow' 
var data =[{title:"BOD", image:'person' },{title:"MIS", image:'person' },{title:"Credit Dept", image:'person' }, {title:"Marketing Dept", image: 'person'}, {title:"Customer Service", image: 'person'}];
class RoomFormComponent extends Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(data),
      };
    }; 
    render() {
          return (
            <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <RoomRow {...data} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            
          );
        }
      }


export default RoomFormComponent
