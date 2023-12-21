// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJd7UaSex2UQod0jo5KpO5k30v7bXSNY",
  authDomain: "task-management-68eaf.firebaseapp.com",
  projectId: "task-management-68eaf",
  storageBucket: "task-management-68eaf.appspot.com",
  messagingSenderId: "463534690291",
  appId: "1:463534690291:web:90f44d16905426f1068c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;