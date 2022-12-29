




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';x

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NODE_APP_APIKEY,
  authDomain: process.env.NODE_APP_AUTH_DOMAIN,
  projectId: process.env.NODE_APP_PROJECT_ID,
  storageBucket: process.env.NODE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NODE_APP_MESSAGING_SENDER_ID,
  appId: process.env.NODE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

module.exports={
    db
}