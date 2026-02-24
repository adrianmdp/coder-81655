import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9IFuPkxLPvGK3ihQISSr6D9kZk--811g",
  authDomain: "coderhouse-1b597.firebaseapp.com",
  databaseURL: "https://coderhouse-1b597-default-rtdb.firebaseio.com",
  projectId: "coderhouse-1b597",
  storageBucket: "coderhouse-1b597.appspot.com",
  messagingSenderId: "645510656328",
  appId: "1:645510656328:web:50b76335f52b83399cc37d"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);