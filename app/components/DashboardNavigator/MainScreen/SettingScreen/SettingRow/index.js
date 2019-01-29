import React from 'react';
import Icon from 'react-native-ionicons';
import { View, Text } from 'react-native';
import styles from './Styles'
const Row = (props) => (
    <View style={styles.container}>
      <Icon  name={props.image}  style={styles.photo} />
      <Text style={styles.text}>
        {`${props.title}`}
      </Text>
    </View>
  );
export default Row;