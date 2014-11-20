// Car object constructor
var Car = function(make, colour, year) {
  this.make = make;
  this.colour = colour;
  this.year = year;
};

// Function that takes car object as argument and prints to page
var addCarToList = function(car) {
  $("#stock").append("<li>" + car.make + " (" + car.colour + ", " + car.year + ")</li>");
};


$(function() {

  // Create initial car list
  var cars = [
    new Car("BMW", "Red", 2013),
    new Car("Vauxhall", "Silver", 1998),
    new Car("Ferrari", "Yellow", 2010)
  ];

  // Print each new car to list
  $.each(cars, function(index, car) {
    addCarToList(car);
  });

  // Event to listen to new car form
  $("#car-form").on("submit", function(event) {
    event.preventDefault();

    var make = $("#make").val(),
        colour = $("#colour").val(),
        year = $("#year").val(),
        car = new Car(make, colour, year);

    addCarToList(car);
  });

});
