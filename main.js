var telegram_bot_id = "7818825099:AAEcCxKHlPnjqjiA9_9l3mUUogc2x1Qp2PM";
var chat_id = 8096816796;
var u_name, Id, ZoneId, age, hr, email, role, message;

var ready = function () {
    u_name = document.getElementById("name").value;
    Id = document.getElementById("Id").value;
    ZoneId = document.getElementById("ZoneId").value;  // Z ကိုက်အောင်
    age = document.getElementById("age").value;
    hr = document.getElementById("hr").value;
    email = document.getElementById("email").value;
    ph = document.getElementById("ph").value;
    role = document.getElementById("role").value;
    
    message = "Name: " + u_name +
              "\nId: " + Id +
              "\nZone Id: " + ZoneId +
              "\nAge: " + age +
              "\nHigh Ranked: " + hr +
              "\nEmail: " + email +
              "\nContact Number: " + ph +
              "\nRole: " + role;
};

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    // clear form
    document.getElementById("name").value = "";
    document.getElementById("Id").value = "";
    document.getElementById("ZoneId").value = "";
    document.getElementById("age").value = "";
    document.getElementById("hr").value = "";
    document.getElementById("email").value = "";
     document.getElementById("ph").value = "";
    document.getElementById("role").value = "";
    return false;
};