import firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyAXYA5LJ2YVZncqtk6_0dS1zNBm_FsCuEE",
    authDomain: "communityforum-f833c.firebaseapp.com",
    projectId: "communityforum-f833c",
    storageBucket: "communityforum-f833c.appspot.com",
    messagingSenderId: "26489721206",
    appId: "1:26489721206:web:21697b83e84d6dd2842a57"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
   // export
 
   export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  