//DOM Manipulation & Event Handling
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

function sayHello(event) {
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
    console.log(message);
//     // Putting the message into the div whose id is content
//     document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;
     if(name === "student"){
        var title = document.querySelector("#title")
        .textContent;
        title += " & Lovin' it";
        document.querySelector("#title").textContent = title
     }
}


//Unobstrusive event handling - HTML doesn't need to know anything about your JS
