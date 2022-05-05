import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr82NLmXYHqg-NuKYAhkI0ospVWP06jiE",
  authDomain: "clothin-web-db.firebaseapp.com",
  projectId: "clothin-web-db",
  storageBucket: "clothin-web-db.appspot.com",
  messagingSenderId: "356612356638",
  appId: "1:356612356638:web:f5bcf3c5d05ddd43a88c0f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)