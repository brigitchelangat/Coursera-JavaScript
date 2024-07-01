// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
      
      // Unobtrusive event binding
      document.querySelector("button")
        .addEventListener("click", function () {
          
          // Call server to get the name
          $ajaxUtils
            .sendGetRequest("name.json", 
              function (res) {
                var message = 
                  res.firstName + " " + res.lastName
                if (res.isKenyan) {
                  message += " is Kenyan";
                }
                else {
                  message += " isn't Kenyan";
                }
                message += " and uses ";
                message += res.numberOfDisplays + 1;
                message += " displays for coding.";
  
                document.querySelector("#content")
                  .innerHTML = "<h2>" + message + "</h2>";
              });
        });
    }
  );
  
  
  
  
  
  