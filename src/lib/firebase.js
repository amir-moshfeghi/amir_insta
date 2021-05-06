import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBoQXdxBMwZdIPdNq8FLNaxeYnKnQGuIuA',
  authDomain: 'instagram-c5307.firebaseapp.com',
  projectId: 'instagram-c5307',
  storageBucket: 'instagram-c5307.appspot.com',
  messagingSenderId: '922176208974',
  appId: '1:922176208974:web:2faf7889942a5f90b9031f',
  measurementId: 'G-YTPTW2EQB9'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
