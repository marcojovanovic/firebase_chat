import firebase from 'firebase'
 
const firebaseConfig = {
  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain: "fir-chat-1e81c.firebaseapp.com",
  projectId: "fir-chat-1e81c",
  storageBucket: "fir-chat-1e81c.appspot.com",
  messagingSenderId: "616583693085",
  appId: "1:616583693085:web:b7cd5d9889738f796517f4"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const authDb = firebase.auth()
const chatDatabase = firebase.firestore();

 
const timestamp = firebase.firestore.FieldValue.serverTimestamp(); // ne treba da pravis posebno polje za timestamp, dodajes ga u ostalo sto ubacujes

 

 
export { authDb,  chatDatabase};