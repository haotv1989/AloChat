
import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles'
const Header = (props) => (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => console.log('searching for ', text)}
      />
    </View>
  );
  
  export default Header;