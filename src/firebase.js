// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pv5rP-Awk_VojSU2hmXhltrPEbY9A80",
  authDomain: "aiwardrobe-ded7d.firebaseapp.com",
  projectId: "aiwardrobe-ded7d",
  storageBucket: "aiwardrobe-ded7d.appspot.com",
  messagingSenderId: "251390804991",
  appId: "1:251390804991:web:3ab6c91d343fb6013eddca",
  measurementId: "G-J8LSR2BG4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { app, analytics };  // Exporting app and analytics
export default app;  // Exporting app as default (you can change this to the configuration object if needed)