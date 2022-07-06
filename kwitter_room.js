const firebaseConfig = {
    apiKey: "AIzaSyBjrAbFbfGMKN1xtILLgFd2TU-u0KHZdwk",
    authDomain: "proj-93-3e9b2.firebaseapp.com",
    projectId: "proj-93-3e9b2",
    storageBucket: "proj-93-3e9b2.appspot.com",
    messagingSenderId: "330662331627",
    appId: "1:330662331627:web:9eea4182ffd418ddd76aae"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

username = localStorage.getItem("user_name", username);

function logout() {
    localStorage.removeItem("user_name")
    window.location = "index.html";
    console.log("logout succesful, redirecting to 'kwitter_login.html'");
}