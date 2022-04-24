// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnHYQ7__H5HlpLYUCq4a4RvvaRftPNys",
  authDomain: "best-mart-19056.firebaseapp.com",
  projectId: "best-mart-19056",
  storageBucket: "best-mart-19056.appspot.com",
  messagingSenderId: "182994072949",
  appId: "1:182994072949:web:1a30907bb277662ed18f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;