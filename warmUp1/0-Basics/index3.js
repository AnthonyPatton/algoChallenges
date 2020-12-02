<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    
    <script src="main.js"> // Key lesson here. Do not have JavaScript code in your html. I wrapped it into some script tags.  
      function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--){
        newString += str[i];
      }
      return newString;

      }
      reverseString("hello");
    </script>
  </head>

  <body> <!-- Key lesson here. Do not have JavaScript code in your html. -->
    function reverseString(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
      }
      return newString;
    
    }
    reverseString("hello");
    
  </body>
</html>
