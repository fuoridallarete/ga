$(function() {

  $("form").on("submit", function(event) {
    event.preventDefault();

    var formSubmits = true;

    clearErrors();

    if ($("#first_name").val().length < 1) {
      addError("Need a first name");
      formSubmits = false;
    }

    if ($("#last_name").val().length < 1) {
      addError("Need a last name");
      formSubmits = false;
    }

    if ($("#under_18").is(":checked")) {
      addError("Need to be over 18");
      formSubmits = false;
    }

    if (formSubmits) {
      $(this).off().submit();
    }

  });

  function clearErrors() {
    $("#errors").empty();
  }

  function addError(error) {
    $("#errors").append("<li>" + error + "</li>");
  }

});
