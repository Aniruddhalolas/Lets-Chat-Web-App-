var firebaseConfig = {
      apiKey: "AIzaSyBXnlHAYJ5xq7BHUK3mAIU_VhLbU8E_UqM",
      authDomain: "lets-chat-web-app-39424.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-39424-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-39424",
      storageBucket: "lets-chat-web-app-39424.appspot.com",
      messagingSenderId: "353261874956",
      appId: "1:353261874956:web:7d481229ddcf0293b3e329",
      measurementId: "G-GN4093Q8PL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
    }

    function logout() {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});} 
getData();
