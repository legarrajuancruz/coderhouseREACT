import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4mlU6xcGr1bOQi1Y6TeiX7uUO1apz2DM",
  authDomain: "datacom-7c889.firebaseapp.com",
  projectId: "datacom-7c889",
  storageBucket: "datacom-7c889.appspot.com",
  messagingSenderId: "881925708787",
  appId: "1:881925708787:web:828a90f35400dfdae69086",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
