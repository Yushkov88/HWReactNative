import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAaZsIKLDFuw3wIsRVK8_VzckCD7hJpbI",
  authDomain: "practicehw-dc05f.firebaseapp.com",
  projectId: "practicehw-dc05f",
  storageBucket: "practicehw-dc05f.appspot.com",
  messagingSenderId: "588998255464",
  appId: "1:588998255464:web:3f7f39afb1deb9fcf7ecdd",
  measurementId: "G-88ZJWNZHF4",
};

let app;
let auth;
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth();
}
export { app, auth };
export const db = getFirestore(app);
