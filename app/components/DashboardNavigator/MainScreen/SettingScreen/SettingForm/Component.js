import React from 'react'
import PropTypes from 'prop-types'
import { View,ActivityIndicator,ListView } from 'react-native'
import styles from './Styles'
import SettingRow from '../SettingRow'

var data =[{title:"My Profile", image:'person' }, {title:"Change Password", image: 'lock'}, {title:"Logout", image: 'log-out'}];
const SettingComponent = props => {     
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  if (props.restoring) {
    return <ActivityIndicator style={styles.activityIndicator} />
  } else {
    if (props.logged) {
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
}

SettingComponent.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
}

export default SettingComponent
