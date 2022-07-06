function adduser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
    console.log("username uploaded, redirecting to 'kwitter_room.html'")
}