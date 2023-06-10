import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzfkvTvv59xvflexRdD2bvnTK7A_8GXrk",
  authDomain: "isuru-manod.firebaseapp.com",
  projectId: "isuru-manod",
  storageBucket: "isuru-manod.appspot.com",
  messagingSenderId: "728791462428",
  appId: "1:728791462428:web:6ed47dbbc3bee48101e5d9",
  measurementId: "G-VPF573PY2P"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);



export default app;