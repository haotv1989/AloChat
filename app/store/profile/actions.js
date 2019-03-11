import * as types from './actionTypes'
import firebaseService from '../../services/firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import {Platform} from 'react-native';


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const FIREBASE_REF_PROFILE = firebaseService.database().ref('Profiles')
const FIREBASE_REF_MESSAGES_LIMIT = 1
export const updateProfileMessage = (urlPath,displayName,sex,staffCode,
  birthDate,status,statusAccount) => {
  return (dispatch) => {
    dispatch(profileMessageLoading())   
    
    let currentUser = firebaseService.auth().currentUser    
    let createdAt = new Date().getTime()
    let profileMessage = {
      UserID: currentUser.uid,
      Image_Avatar:urlPath,
      DisplayName:displayName,
      Sex:sex,
      StaffCode:staffCode,
      BirthDate:birthDate ,
      Status:status,
      StatusAccount:statusAccount,
      UpdatedAt: createdAt,     
    }
    //uploadImage(urlPath);
    FIREBASE_REF_PROFILE.orderByChild("UserID").equalTo(currentUser.uid).on("value", snapshot => {
      if (snapshot.exists()){
        FIREBASE_REF_PROFILE.child(currentUser.uid).update().set(profileMessage, (error) => {
          if (error) {
            dispatch(profileMessageError(error.message))
          } else {
            dispatch(profileMessageSuccess())
          }
        })
       }
       else
       {
        FIREBASE_REF_PROFILE.push().set(profileMessage, (error) => {
          if (error) {
            dispatch(profileMessageError(error.message))
          } else {
            dispatch(profileMessageSuccess())
          }
        })
         
       }
   })
   
  }
}

export const updateMessage =  (urlPath,displayName,sex,staffCode,
  birthDate,status,statusAccount) => {
  return (dispatch) => {
    dispatch(profileUpdateMessage(urlPath,displayName,sex,staffCode,
      birthDate,status,statusAccount))
  }
}

export const loadProfileMessages = () => {
  return (dispatch) => {
    let currentUser = firebaseService.auth().currentUser  
    FIREBASE_REF_PROFILE.orderByChild("UserID").equalTo(currentUser.uid).once('value', (snapshot) => {
      dispatch(loadProfileMessagesSuccess(snapshot.val()))
      console.log('Reducer- get data')
      console.log(snapshot.val())
      //dispatch(profileUpdateMessage(currentUser))
    }, (errorObject) => {
      dispatch(loadProfileMessagesError(errorObject.message))
    })
  }
}
export const uploadImage=(uri, mime = 'application/octet-stream')=> {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    let uploadBlob = null

    const imageRef = firebaseService.storage().ref('avatar')

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        console.log('Reducer-upload image')
        console.log(error)
        reject(error)
    })
  })
}

const profileMessageLoading = () => ({
  type: types.PROFILE_MESSAGE_LOADING
})

const profileMessageSuccess = () => ({
  type: types.PROFILE_MESSAGE_SUCCESS
})

const profileMessageError = error => ({
  type: types.PROFILE_MESSAGE_ERROR,
  error
})

const profileUpdateMessage = profile => ({
  type: types.PROFILE_MESSAGE_UPDATE,
  profile
})
const loadProfileMessagesSuccess = profile => ({
  type: types.PROFILE_LOAD_MESSAGES_SUCCESS,
  profile
})

const loadProfileMessagesError = error => ({
  type: types.PROFILE_LOAD_MESSAGES_ERROR,
  error
})

