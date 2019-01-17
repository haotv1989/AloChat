import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Alert } from 'react-native'

import HeadScreen from './HeaderScreen'
import FootScreen from './FooterScreen'
import ChatLogScreen from './ChatLogScreen'
import LoadingIndicator from './LoadingIndicator'

import translations from '../../i18n'

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
       <HeadScreen />
       <ChatLogScreen />
        <FootScreen />
        {this.props.loading && <LoadingIndicator />}
      </View>)
  }
}

AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default AuthScreenComponent
