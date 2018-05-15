import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDsQ1r5hgfllHJFlZVjBwI2Bp8btznK5Os",
    authDomain: "linkstasitecs5-18740.firebaseapp.com",
    databaseURL: "https://linkstasitecs5-18740.firebaseio.com",
    projectId: "linkstasitecs5-18740",
    storageBucket: "",
    messagingSenderId: "633569245331"
  };
  const firebaseApp = firebase.initializeApp(config);
  export const ref = firebase.database().ref();
  export const linksRef = firebase.database().ref('links');
  export const firebaseAuth = firebase.auth;
  export default firebaseApp;