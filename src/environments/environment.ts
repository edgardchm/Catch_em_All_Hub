import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: "AIzaSyAcp27p6zUBT6LTnSGHJXeN1uEFi-KtPAw",
  authDomain: "appmobilepokemon.firebaseapp.com",
  projectId: "appmobilepokemon",
  storageBucket: "appmobilepokemon.appspot.com",
  messagingSenderId: "540027940044",
  appId: "1:540027940044:web:9b15dc0d7595f8be9be669",
  measurementId: "G-5W4SNNHJEF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
