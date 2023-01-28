import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDg1iMp2TJv7comT68LcPURW3Or0B_N91A",
  authDomain: "crazy-messenger.firebaseapp.com",
  projectId: "crazy-messenger",
  storageBucket: "crazy-messenger.appspot.com",
  messagingSenderId: "125041015916",
  appId: "1:125041015916:web:ff193bfdf338e59a4cec49",
};

export const app = initializeApp(firebaseConfig);
