// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrcgiSR4aVqj729dp9dY80Q8VQZHcOews",
  authDomain: "trip-tone-d33c4.firebaseapp.com",
  projectId: "trip-tone-d33c4",
  storageBucket: "trip-tone-d33c4.appspot.com",
  messagingSenderId: "1093103500328",
  appId: "1:1093103500328:web:b1e3d965b99f5c2afe491d",
  measurementId: "G-VNBR7963GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=initializeAuth(app,{
    persistence: getReactNativePersistence
    (ReactNativeAsyncStorage)
})
export const storage=getStorage(app);