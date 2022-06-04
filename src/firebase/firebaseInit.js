import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration

var firebaseConfig = {

};

const firebaseApp   = firebase.initializeApp(firebaseConfig);
const timestamp     = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
