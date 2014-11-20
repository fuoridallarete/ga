window.onload = function() {

  // Change your name
  document.getElementById("name").innerHTML = "Sabrina";

  // Add the numbers together
  document.getElementById("sum").innerHTML = 24 + 56 + 111;

  // Get a haircut
  var getAHaircut = true;

  if (getAHaircut) {
    document.getElementById("haircut").innerHTML = "Yep";
  } else {
    document.getElementById("haircut").innerHTML = "Nope";
  }

}
