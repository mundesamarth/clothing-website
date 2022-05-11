import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

// setting up google authentication/ signin option through pop up
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInGooglePopUp = () => signInWithPopup(auth, provider);

// setting up the database
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userRef);

  // if user snapshot  does not exist,  we create one
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userRef; // if user snapshot does exist
};

// This method is used to sign up with email and password direatly
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
