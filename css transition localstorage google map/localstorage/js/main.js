function setName(name) {
  $('h2').html('I remember you. Your name is <span>' + name + '</span>.');
}

// Document is ready
$(function() {

  // Check if name has already been set
  if (localStorage.getItem('your_name') !== null) {

    // Name has been set, replace text
    var name = localStorage.getItem('your_name');
    setName(name);

  }

  // Form submit event
  $('form').on('submit', function(event) {

    // Prevent form from submitting
    event.preventDefault();

    // Get name set from form
    var name = $('#your_name').val();

    // Set localStorage value
    localStorage.setItem('your_name', name);

    // Update user interface
    setName(name);

  });

});
