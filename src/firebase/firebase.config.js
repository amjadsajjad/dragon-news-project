// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR1da2k0SglBfMlfSV-dlIV3JziDiHrbo",
  authDomain: "dragon-news-project-743a1.firebaseapp.com",
  projectId: "dragon-news-project-743a1",
  storageBucket: "dragon-news-project-743a1.appspot.com",
  messagingSenderId: "173333087493",
  appId: "1:173333087493:web:083a42f4a50657260d236c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;