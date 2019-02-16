import React, { Component } from 'react'
import { View, Text,Button } from "react-native";
import Icon from "react-native-ionicons";

const MainScreenComponent = (navigation) =>(
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main Screen</Text>
       <Button
          title="Go to Chat"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
)
export default MainScreenComponent

