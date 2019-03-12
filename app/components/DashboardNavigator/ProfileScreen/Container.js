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
  error: PropTypes.string, 
  navigation:PropTypes.object.isRequired,
  data: PropTypes.shape({
    DisplayName: PropTypes.string.isRequired,
    BirthDate: PropTypes.string.isRequired,
    Image_Avatar: PropTypes.string.isRequired,
    StaffCode: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
    StatusAccount: PropTypes.string.isRequired,
    UpdatedAt: PropTypes.string.isRequired,
    UserID: PropTypes.string.isRequired
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


