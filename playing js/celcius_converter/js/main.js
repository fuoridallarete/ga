window.onload = function() {

  var button = document.getElementById("submit");
  var celsius = document.getElementById("celsius");
  var result = document.getElementById("result");

  button.onclick = function() {
    result.innerHTML = (celsius.value * 1.8) + 32;
  }

}
