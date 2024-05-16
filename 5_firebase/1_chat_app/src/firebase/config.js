// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_ryacCRiUUstbRdH-DhQ1yRyj-5PwUjU',
  authDomain: 'hi-chat-da6a0.firebaseapp.com',
  projectId: 'hi-chat-da6a0',
  storageBucket: 'hi-chat-da6a0.appspot.com',
  messagingSenderId: '942844636104',
  appId: '1:942844636104:web:7a9a93d80531adb3272efd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurlumunu yap
export const provider = new GoogleAuthProvider();

// veritabanı hizemetinin referansını al
export const db = getFirestore(app);
