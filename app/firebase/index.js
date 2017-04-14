import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNXOIqRRCXcOj0lRKBdAhbV-QICaisGWw",
    authDomain: "nicks-net-react-todo-app.firebaseapp.com",
    databaseURL: "https://nicks-net-react-todo-app.firebaseio.com",
    projectId: "nicks-net-react-todo-app",
    storageBucket: "nicks-net-react-todo-app.appspot.com",
    messagingSenderId: "104484554120"
  };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
