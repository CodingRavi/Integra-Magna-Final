// Navebar and footer Add 
$(function () {
    $("#nav-placeholder").load("/nav-bar.html");
    $("#Footer_placeholder").load("/footer.html");
  });
var formUpText = document.getElementsByClassName("footer-upperline");
     function showAlert() {
         
         myform.reset();
         document.getElementById("alertBox").style.display = "block";
         myform.style.display = "none";
         formUpText[0].style.display = "none";
         
     }
     function closeAlert() {
         document.getElementById("alertBox").style.display = "none";
         myform.style.display = "block";
         formUpText[0].style.display = "block";
 
     }
     var name, email, text;
     var myform = document.getElementById("my_form");
     myform.addEventListener("submit", function (e) {
         e.preventDefault();
         nameUser = myform.elements.item(0).value;
         emailUser = myform.elements.item(1).value;
         textUser = myform.elements.item(2).value;
         if (!validateEmail(emailUser)) {
             alert("Please enter a valid email address. \n" + emailUser);
             return;
         }
         bodytxt =
             "Name: " +
             `<b>${nameUser} </b>` +
             "<br>" +
             "\n\ Email: " +
             `<b>${emailUser} </b>` +
             "\n\ Message: " +
             "<br>" +
             `<b>${textUser} </b>`;
         Email.send({
             Host: "smtp.elasticemail.com",
             Username: "iminfo@integramagna.com",
             Password: "F63AAC721194CFB801A7F3163DBC96920A2B",
             To: "hi@integramagna.com",
             From: "hi@integramagna.com",
             Subject: "Enquiery - Integra Magna",
             Port: 2525,
             Body: bodytxt,
         }).then((message) => showAlert());
     });
     function validateEmail(email) {
         var re = /\S+@\S+\.\S+/;
         return re.test(email);
     }
     function InvalidMsg(textbox) {
         if (textbox.value === "") {
             textbox.setCustomValidity("Entering an email-id is necessary!");
         } else if (textbox.validity.typeMismatch) {
             textbox.setCustomValidity(
                 "Please enter an email address which is valid!"
             );
         } else {
             textbox.setCustomValidity("");
         }
         return true;
     }