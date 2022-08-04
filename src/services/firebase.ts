import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCeJNO77Icm6QO_eFcCfKhgNxXBDZWeOE",
  authDomain: "rocketside-d5251.firebaseapp.com",
  projectId: "rocketside-d5251",
  storageBucket: "rocketside-d5251.appspot.com",
  messagingSenderId: "267581373923",
  appId: "1:267581373923:web:97011407dd3e24c09774d6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
