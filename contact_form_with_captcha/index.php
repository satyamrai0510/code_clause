<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content="IE=edge">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    
    <title> Contact Form </title>
    <link rel = "stylesheet" href = "style.css">
    <link rel='icon' href='images/favicon.png' />
    <script src = "https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
    
    <div class = "container">

        <form id = "myForm" action="#" onsubmit="return validateForm()">
          
            <h1 class = "main_heading"> Contact Form </h1>
            <hr>
            <h2> User Information </h2>

            <label for="name">Name:</label>
            <span id="nameError" class="error"></span>
            <input type="text" id="name" name="name">
          
            <label for="phone">Phone:</label>
            <span id="phoneError" class="error"></span>
            <input type="tel" id="phone" name="phone">
       
            <label for="email">Email:</label>
            <span id="emailError" class="error"></span>
            <input type="email" id="email" name="email">

            <label for="query">Query:</label>
            <span id="queryError" class="error"></span>
            <textarea id="query" name="query"></textarea>

            <h2> Captcha Verification </h2>

            <span id="g-recaptcha-error" class="error"></span>
            <div class = "g-recaptcha" data-sitekey = "6Ld-8k4lAAAAAFWtIUSdlZp6siW9jIApOzoZY44X" ></div>
            <input type= "submit" id = "myButton" value = "Contact Us">

        </form>
        
        <script src="script.js"></script>
        <script src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer ></script>

    </div>

</body>
</html>