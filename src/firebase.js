import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAA7G4ZzUzGokOTxCAatjbf6RYGJmDwab8',
  authDomain: 'react-redux-firebase-e5846.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-e5846.firebaseio.com',
  projectId: 'react-redux-firebase-e5846',
  storageBucket: 'react-redux-firebase-e5846.appspot.com',
  messagingSenderId: '503611905646',
  appId: '1:503611905646:web:24275e6f80e0b30dfcb87f'
};
firebase.initializeApp(config);

export default firebase;
const databaseRef = firebase.firestore();
export const employeesLogsRef = databaseRef.collection('employeesLogs');

export const timestamp = firebase.firestore.Timestamp;
