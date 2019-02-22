import React, { Component } from 'react'
import { View, Text,Button } from "react-native";
import PropTypes from 'prop-types'
class MainScreenComponent extends Component {

  render() {
    return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
       <Button
          title="Go to Chat"       
          onPress={() =>this.props.navigation.navigate('Chat')}
        />
      </View>)
    }
}
MainScreenComponent.propTypes = {
  navigation: PropTypes.object.isRequired
}
export default MainScreenComponent

