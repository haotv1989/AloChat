//import  firebase from 'firebase'
//import * as firebase from 'firebase';
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { firebaseConfig } from '../configs/firebase'

let instance = null

class FirebaseService {
  
  constructor() {
    if (!instance) {
      //const firebase = require("firebase");
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance
  }
}

const firebaseService = new FirebaseService().app
export default firebaseService;
