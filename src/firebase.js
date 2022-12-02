import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0w0PlkK3OjMVJmAxrMW_F0fYfwgKxEKk",
  authDomain: "clinic-history-app.firebaseapp.com",
  projectId: "clinic-history-app",
  storageBucket: "clinic-history-app.appspot.com",
  messagingSenderId: "800572986176",
  appId: "1:800572986176:web:1bebeb82151d7a2fe4e0a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { db }