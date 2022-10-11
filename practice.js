const firebaseConfig = {
    apiKey: "AIzaSyDW6DR8m1dDF8f9uuzSP_0izXe2vxDLzO0",
    authDomain: "kwitter-422e4.firebaseapp.com",
    databaseURL: "https://kwitter-422e4-default-rtdb.firebaseio.com",
    projectId: "kwitter-422e4",
    storageBucket: "kwitter-422e4.appspot.com",
    messagingSenderId: "572163698594",
    appId: "1:572163698594:web:b18ea1098c967b40020cfb"
  };
  firebase.initializeApp(firebaseConfig);

  function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}