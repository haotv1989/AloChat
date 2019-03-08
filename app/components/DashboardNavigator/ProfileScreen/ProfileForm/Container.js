import React, { Component } from 'react'
import ProfileFormComponent from './Component'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProfileMessage,loadProfileMessages } from '../../../../store/profile'
const  ProfileFormContainer  = props =>
<ProfileFormComponent 
      navigation={props.navigation}
      loadprofile={props.profile}     
      updateProfile={props.updateProfile}   
      />   
  const mapDispatchToProps = {
     loadprofile, loadProfileMessages,
    updateProfile:updateProfileMessage 

    }

ProfileFormContainer.propTypes = {
navigation:  PropTypes.object.isRequired,
updateProfile: PropTypes.func.isRequired,
loadprofile: PropTypes.func.isRequired
}
export default connect(null, mapDispatchToProps)(ProfileFormContainer)
