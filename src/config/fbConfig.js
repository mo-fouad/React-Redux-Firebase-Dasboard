import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCBp2eDmdGDWevFf2FLYsxpQpVn2s8gQq4",
    authDomain: "proapp-27a23.firebaseapp.com",
    databaseURL: "https://proapp-27a23.firebaseio.com",
    projectId: "proapp-27a23",
    storageBucket: "proapp-27a23.appspot.com",
    messagingSenderId: "240670959917"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
