import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyDmCIBP2TpKzMYmY9rN4kmE9TQkDCI6WSU",
  authDomain: "qpick-c4f10.firebaseapp.com",
  projectId: "qpick-c4f10",
  storageBucket: "qpick-c4f10.appspot.com",
  messagingSenderId: "294880599872",
  appId: "1:294880599872:web:b6e222ca28b9bcf11da4a5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app