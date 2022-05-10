import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBkxKeUwyfQHVAObch10mUCSyc1x5pLSP8",
  authDomain: "bicycles-eda32.firebaseapp.com",
  projectId: "bicycles-eda32",
  storageBucket: "bicycles-eda32.appspot.com",
  messagingSenderId: "41890118617",
  appId: "1:41890118617:web:cc546f2f8cb35355bef7c8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
