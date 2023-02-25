// import firebase  from "firebase/app";
// import { initializeApp } from "firebase/app";
// import 'firebase/auth'
// const config={
//     apiKey: "AIzaSyB3oFiIrm6_zh_BeMp6j2rVgWz2Aqd8aFI",
//     authDomain: "united-cobweb-7806.firebaseapp.com",
//     projectId: "united-cobweb-7806",
//     storageBucket: "united-cobweb-7806.appspot.com",
//     messagingSenderId: "223985515027",
//     appId: "1:223985515027:web:4e608ad8ee97c8bfee5de6"
// }
// firebase.initializeApp(config)
// const firebase = initializeApp(config);
// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3oFiIrm6_zh_BeMp6j2rVgWz2Aqd8aFI",
  authDomain: "united-cobweb-7806.firebaseapp.com",
  projectId: "united-cobweb-7806",
  storageBucket: "united-cobweb-7806.appspot.com",
  messagingSenderId: "223985515027",
  appId: "1:223985515027:web:4e608ad8ee97c8bfee5de6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;