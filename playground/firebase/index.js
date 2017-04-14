import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'ToDo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Nicholas',
    age: 31
  }
}).then(() => {
  console.log('Set Worked');
}, (e) => {
  console.log('Set Failed');
});




// firebaseRef.set({
//   appName: 'ToDo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Veronika'
// });

// firebaseRef.child('app').set({
//   name: 'React ToDo Application'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'ToDo Application'
// }).then(() => {
//   console.log('Update Worked');
// }, () => {
//   console.log('Update Failed');
// });

// firebaseRef.update({'app/name': 'ToDo Application', 'user/name': 'Veronika'});

// firebaseRef.child('app').update({name: 'ToDo Application'});
// firebaseRef.child('user').update({name: 'Veronika'});

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({version: '2.0', name: null});

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got Entire Database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got Value', snapshot.val());
// });
// firebaseRef.update({isRunning: false});
