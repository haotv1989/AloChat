import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity} from 'react-native'

import styles from './Styles'
import Icon from 'react-native-ionicons';

const AddButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.add}>

    <Icon name='ios-add'/>
  </TouchableOpacity>

AddButtonComponent.propTypes = {
  add: PropTypes.func.isRequired
}

export default AddButtonComponent
