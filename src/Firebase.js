import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkHDpMeOry3aMIcaHdZ4Gz54TXvlG1lzw",
    authDomain: "openinappasmt.firebaseapp.com",
    projectId: "openinappasmt",
    storageBucket: "openinappasmt.appspot.com",
    messagingSenderId: "5147266023",
    appId: "1:5147266023:web:8e4254c9f7f757988b4b42",
    measurementId: "G-L3ZGTE3XP1"
};
const initializedFirebase = firebase.initializeApp(firebaseConfig);
const auth = initializedFirebase.auth();
export { auth};