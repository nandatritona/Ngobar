import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration DB Google
const firebaseConfig = {
   apiKey: "AIzaSyCzKMTt1Q6WwdxWNvOXfof4Aeg_PQz0VNA",
   authDomain: "istiblogs-c45d8.firebaseapp.com",
   projectId: "istiblogs-c45d8",
   storageBucket: "istiblogs-c45d8.appspot.com",
   messagingSenderId: "51839772670",
   appId: "1:51839772670:web:13db629614e9998d9242af",
};

const firebaseApp   = firebase.initializeApp(firebaseConfig);
const timestamp     = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
