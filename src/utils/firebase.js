// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2DLDCSxXvb_ujGqJSf37iJfRCleHvPn8",
  authDomain: "netflixgpt-7afca.firebaseapp.com",
  projectId: "netflixgpt-7afca",
  storageBucket: "netflixgpt-7afca.appspot.com",
  messagingSenderId: "398074844512",
  appId: "1:398074844512:web:90347a67726fe4f70b3a05",
  measurementId: "G-667Z8YFF78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);
export const auth = getAuth();