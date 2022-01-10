import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATebTDry0Kd_xSEEmpM1doDUhXcc4oFQg",
  authDomain: "lab-ferrari-paulosarmento.firebaseapp.com",
  projectId: "lab-ferrari-paulosarmento",
  storageBucket: "lab-ferrari-paulosarmento.appspot.com",
  messagingSenderId: "251704061809",
  appId: "1:251704061809:web:ede8cf5023b749077010d0",
  measurementId: "G-G1QYKKS12J",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
