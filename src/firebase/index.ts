import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Ou0wtNQ3prCKZwJOQm-WP83zUrAau2M",
  authDomain: "react-authentication-37ec3.firebaseapp.com",
  projectId: "react-authentication-37ec3",
  storageBucket: "react-authentication-37ec3.appspot.com",
  messagingSenderId: "504110458194",
  appId: "1:504110458194:web:ac8b701adbe772c038c68b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
