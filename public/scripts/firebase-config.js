// firebase-config.js (for static HTML + JS app)

// Initialize Firebase (non-modular version for browser)
const firebaseConfig = {
  apiKey: "AIzaSyD3ZrwJ3Jx3x8SkAgPl4sBCtd2SlUefu8w",
  authDomain: "uber-clone-8e40b.firebaseapp.com",
  projectId: "uber-clone-8e40b",
  storageBucket: "uber-clone-8e40b.appspot.com", // fixed: should be .app**spot**.com
  messagingSenderId: "392995610259",
  appId: "1:392995610259:web:64258f3260cb3bd73b7766",
  measurementId: "G-NXVRM5Q90X",
  databaseURL: "https://uber-clone-8e40b-default-rtdb.firebaseio.com" // add this manually for Realtime DB
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
