// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('eeeeei',import.meta.env.VITE_apiKey);
const firebaseConfig = {
  // apiKey: "AIzaSyAL-BNa01yBe4yRJ4W7kveOxsu33XTYDS0",
  // authDomain: "news-dragon-firebase.firebaseapp.com",
  // projectId: "news-dragon-firebase",
  // storageBucket: "news-dragon-firebase.appspot.com",
  // messagingSenderId: "2235639311",
  // appId: "1:2235639311:web:8dd1317dc84f1c03ba257a"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;