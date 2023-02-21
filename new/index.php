<?php
 $language = "PHP";
 function outputLanguage($language){
   echo $language;
 }
 $first = "Jane";
 $last = "Choi";
 function outputName($first, $last){
   echo "My name is: " . $first . " ". $last . ".";
 }
 $myAge = 20;
 $my_age = 21;
?>
<!doctype html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Page Title</title>
</head>
<body>
  <h1>This is the intro of <?php outputLanguage($language); ?></h1>
  <h2>My age is: <?php echo $myAge; ?></h2>
  <p><?php outputName($first, $last) ?></p>
  <?php var_dump($language) ?>
</body>
</html>
