import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth,gooogleAuthprovider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBk2uW6CujNZhhFPaoaX_fJ0aVNP1B9nQg",
    authDomain: "login-2af18.firebaseapp.com",
    projectId: "login-2af18",
    storageBucket: "login-2af18.firebasestorage.app",
    messagingSenderId: "1079215249286",
    appId: "1:1079215249286:web:447d6b0f2fad4128e97e07"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new gooogleAuthprovider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click",function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../navigation.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})
