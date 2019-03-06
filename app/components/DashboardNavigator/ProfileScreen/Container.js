import React, { Component } from 'react'
import ProfileComponent from './Component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadProfileMessages } from '../../../store/profile/actions'
import { getProfileItems } from '../../../store/profile/selectors'

class ProfileContainer extends Component { 

  render() {
    const data = getProfileItems(this.props.profiles).reverse();
    return (
      <ProfileComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  profiles: state.profile,
  error: state.profile.loadMessagesError
})

const mapDispatchToProps = {
  loadProfileMessages
}

ProfileContainer.propTypes = {
 profiles: PropTypes.object,
  error: PropTypes.string, 
  navigation:PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


