import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.REACT_APP_PROJECTID,
  storageBucket: process.REACT_APP_STORGABUCKET,
  messagingSenderId: process.REACR_APP_MESSANGINGSENDERID,
  appId: process.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
