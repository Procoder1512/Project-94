var firebaseConfig = {
      apiKey: "AIzaSyAipjFJwPFelCj-De4TKrha_S20QFABiM4",
      authDomain: "kwitter-18ff5.firebaseapp.com",
      databaseURL: "https://kwitter-18ff5-default-rtdb.firebaseio.com",
      projectId: "kwitter-18ff5",
      storageBucket: "kwitter-18ff5.appspot.com",
      messagingSenderId: "946320463093",
      appId: "1:946320463093:web:fc52692c97bd6149ac21bc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" +Room_names);
      row = "<div class='room_name' id=" + Room_names+" onclock='redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function login()
{
      localStorage.addItem("user_name")
}