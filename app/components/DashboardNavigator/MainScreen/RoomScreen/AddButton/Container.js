import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createRoom } from '../../../../../store/room'

import AddButton from './Component'

const AddButtonContainer = props =>
  <AddButton add={props.add} />

const mapDispatchToProps = {
  add: createRoom
}

AddButtonContainer.propTypes = {
  Add: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(AddButtonContainer)
