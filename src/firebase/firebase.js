import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-t9Xi6lF4qOA7V1A_kasnjL7jaQoA8X8",
  authDomain: "netflix-clone-9a007.firebaseapp.com",
  projectId: "netflix-clone-9a007",
  storageBucket: "netflix-clone-9a007.appspot.com",
  messagingSenderId: "715449763793",
  appId: "1:715449763793:web:c11a1ae4ac3949615482f0",
  measurementId: "G-7BW2EZT7R3",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export { auth, provider };
