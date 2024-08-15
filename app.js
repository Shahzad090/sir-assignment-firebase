// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDQ21PoPj9pYs1t6lBFLUHAuzcJsWPQM",
  authDomain: "sir-assignment-project.firebaseapp.com",
  projectId: "sir-assignment-project",
  storageBucket: "sir-assignment-project.appspot.com",
  messagingSenderId: "776793860879",
  appId: "1:776793860879:web:280b2f797ba1c21e372c7a",
  measurementId: "G-H8NPMNEL2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const Signup_btn = document.getElementById("Signup_btn");

Signup_btn.addEventListener("click", creatUserAccount);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is login===>");

    const uid = user.uid;
    // ...
  } else {
    console.log("user is not login===>");
  }
});

function creatUserAccount() {
  console.log("email=>", signup_email.value);
  console.log("password=>", signup_password.value);
  createUserWithEmailAndPassword(
    auth,
     signup_email.value, 
     signup_password.value,
    )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>, user")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
