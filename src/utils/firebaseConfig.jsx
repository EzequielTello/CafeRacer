import { initializeApp } from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8BQeokP7-ABK7Ie-wmpfCgoZVtIW7IKk",
  authDomain: "caferacer-82c0b.firebaseapp.com",
  projectId: "caferacer-82c0b",
  storageBucket: "caferacer-82c0b.appspot.com",
  messagingSenderId: "625063870593",
  appId: "1:625063870593:web:3b040fe4a50628b23ecd80",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

export { storage };
