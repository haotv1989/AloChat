import React, { Component } from 'react'
import ProfileFormComponent from './Component'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProfileMessage } from '../../../../store/profile'
const  ProfileFormContainer  = props =>
<ProfileFormComponent 
      navigation={props.navigation}     
      updateProfile={props.updateProfile}   
      />   
  const mapDispatchToProps = {
    updateProfile:updateProfileMessage 

    }

ProfileFormContainer.propTypes = {
navigation:  PropTypes.object.isRequired,
updateProfile: PropTypes.func.isRequired,

}
export default connect(null, mapDispatchToProps)(ProfileFormContainer)
