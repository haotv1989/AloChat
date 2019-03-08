import React, { Component } from 'react'
import ProfileComponent from './Component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadProfileMessages } from '../../../store/profile/actions'
import { getProfileItems } from '../../../store/profile/selectors'



class ProfileContainer extends Component { 
  componentDidMount() {
    this.props.loadProfileMessages()   
  }
  render() {
    const data = getProfileItems(this.props.profile).reverse(); 
    console.log('--Data--Container---');
    console.log(data);
    return (
      <ProfileComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  error: state.profile.loadMessagesError
})

const mapDispatchToProps = {
  loadProfileMessages
}

ProfileContainer.propTypes = {
 profile: PropTypes.object,
  error: PropTypes.string, 
  navigation:PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


