// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWhw-K3zkGas1AwYj6qpEQz2gjUG6TyA8",
  authDomain: "vue-invoices-bcdc6.firebaseapp.com",
  projectId: "vue-invoices-bcdc6",
  storageBucket: "vue-invoices-bcdc6.appspot.com",
  messagingSenderId: "907423733758",
  appId: "1:907423733758:web:ec8c48f4943d135ce452af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
