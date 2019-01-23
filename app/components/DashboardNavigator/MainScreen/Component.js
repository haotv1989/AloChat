import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Alert } from 'react-native'
import HeaderScreen from '../MainScreen/HeaderScreen'
import FooterScreen from '../MainScreen/FooterScreen/FooterForm'
import ChatLogScreen from '../MainScreen/ChatLogScreen/ChatLogForm'
import LoadingIndicator from '../../AuthScreen/LoadingIndicator'
import translations from '../../../i18n'
import styles from './Styles'
class MainScreenComponent extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert(translations.t('error'), this.props.error);
    }
  }

  render() {
    return (     
        <View style={styles.container}>
        <RootChatLog/>       
          {this.props.loading && <LoadingIndicator />}
        </View>
     
      )
  }
}

MainScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

const RootChatLog = StackNavigator ({
  Head        : { screen: HeaderScreen },
  Content       : { screen: ChatLogScreen },
  Footer              : { screen: FooterScreen },
})
// const RootRoom = StackNavigator ({
//   Head        : { screen: HeadScreen },
//   Content       : { screen: RoomScreen },
//   Footer              : { screen: FootScreen },
// })
// const RootSetting = StackNavigator ({
//   Head        : { screen: HeadScreen },
//   Content       : { screen: SettingScreen },
//   Footer              : { screen: FootScreen },
// })

export default MainScreenComponent
