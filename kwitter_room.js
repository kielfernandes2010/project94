
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC3mfiQtQmDy3nKVpnrKA9_iNHTnHSB8-8",
      authDomain: "kwitterapp-2fbe2.firebaseapp.com",
      databaseURL: "https://kwitterapp-2fbe2-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-2fbe2",
      storageBucket: "kwitterapp-2fbe2.appspot.com",
      messagingSenderId: "234864500142",
      appId: "1:234864500142:web:25e5ea4bc30f4aeb303c3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
