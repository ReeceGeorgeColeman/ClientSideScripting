<html <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Excersize1</title>
    <script type="text/javascript">
        function displayName() {
             
            var userName  = document.getElementById("userName").value;
            var userAge = document.getElementById("userAge").value;

            document.getElementById("output").innerHTML = "Hello " + userName + "</p>" + "Your Age is " + userAge;
            
        }
    
    </script>
</head>
<body>
        <input  id="userName" type = "text" placeholder = "Enter Name">
        <input  id="userAge" type = "number" placeholder = "Enter Number">

        <button onClick = displayName()> Click Me </button>
        
        <p id = "output"><!-- result will be placed here --> </p>
</body>
</html>