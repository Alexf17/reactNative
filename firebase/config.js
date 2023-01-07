import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz9fw-YNn5W6A1voPQoCX05H_2eXgfe5M",
  authDomain: "newgrambase.firebaseapp.com",
  projectId: "newgrambase",
  storageBucket: "newgrambase.appspot.com",
  messagingSenderId: "392294156502",
  appId: "1:392294156502:web:949178eb879903af032177",
  measurementId: "G-C2365TNQNK",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
