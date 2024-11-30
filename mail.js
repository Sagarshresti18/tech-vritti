const firebaseConfig = {
  apiKey: "AIzaSyA3WuXKieWREkFozl9aGkixNa7Jbop_vNY",
  authDomain: "contactform-49711.firebaseapp.com",
  databaseURL: "https://contactform-49711-default-rtdb.firebaseio.com",
  projectId: "contactform-49711",
  storageBucket: "contactform-49711.firebasestorage.app",
  messagingSenderId: "190484629276",
  appId: "1:190484629276:web:58c8f331ad30baecd79cd9"
};
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  saveMessages(name, emailid,);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  document.getElementById("contactForm").reset();
}
const saveMessages = (name, emailid,) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
