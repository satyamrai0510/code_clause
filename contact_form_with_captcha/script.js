function validateForm() {
    var name = document.getElementById("name").value.trim();
          var phone = document.getElementById("phone").value.trim();
          var email = document.getElementById("email").value.trim();
          var query = document.getElementById("query").value.trim();
          var nameError = document.getElementById("nameError");
          var phoneError = document.getElementById("phoneError");
          var emailError = document.getElementById("emailError");
          var queryError = document.getElementById("queryError");
    var recaptchaError = document.getElementById("g-recaptcha-error");
          var valid = true;
          
          if (name == "") {
              nameError.innerHTML = "Name is required";
              valid = false;
          } else {
              nameError.innerHTML = "";
          }
          
          if (phone == "") {
              phoneError.innerHTML = "Phone is required";
              valid = false;
          } else if (!/^\d{10}$/.test(phone)) {
              phoneError.innerHTML = "Phone must be a 10-digit number";
              valid = false;
          } else {
              phoneError.innerHTML = "";
          }
          
          if (email == "") {
              emailError.innerHTML = "Email is required";
              valid = false;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              emailError.innerHTML = "Email is invalid";
              valid = false;
          } else {
              emailError.innerHTML = "";
          }
          
          if (query == "") {
              queryError.innerHTML = "Query is required";
              valid = false;
          } else {
              queryError.innerHTML = "";
          }
          var recaptchaResponse = grecaptcha.getResponse();
          if (recaptchaResponse == "") {
              recaptchaError.innerHTML = "Please verify you are not a robot";
              valid = false;
          } else {
              recaptchaError.innerHTML = "";
          }
          
          return valid;
      }