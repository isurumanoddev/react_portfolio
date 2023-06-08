import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyBMNoZGMkPDug1cxRz6Jt4K1hGID-h5VIU",
  authDomain: "isurumanod-portfolio.firebaseapp.com",
  projectId: "isurumanod-portfolio",
  storageBucket: "isurumanod-portfolio.appspot.com",
  messagingSenderId: "621582225066",
  appId: "1:621582225066:web:7f101a808a54723f5dcad3",
  measurementId: "G-700WHB7ZLE"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)


export default app;