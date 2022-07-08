// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe1SzgarSRjALEdvga52crI0boaXfPjOo",
  authDomain: "poker-underdog.firebaseapp.com",
  projectId: "poker-underdog",
  storageBucket: "poker-underdog.appspot.com",
  messagingSenderId: "597718734337",
  appId: "1:597718734337:web:ad09ef814639ffd7cc5200",
  measurementId: "G-BZ3RE474D6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
// export { app, analytics };
