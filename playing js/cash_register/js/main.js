//select in the entry field and store in a variable (going to manipulate it later)

//listen to submit of form

//fire a call to a function - add new entry

//define the new entry function

//add a new row, innerHTML of entries id

//update total


var d = document; //short hand document.getElement ById

var entryField = d.getElementById("newEntry");

var total = 0;

d.getElementById("entry").onsubmit = addNewEntry;

function addNewEntry() {

  var entry = parseFloat(entryField.value)
  total += entry;
  console.log(total)

  var entryValue = convertCurrency(entryField.value);
  //console.log(entryValue);

  var entryRow = "<tr><td></td><td>" + entryValue + "</td></tr>";

d.getElementById("entries").innerHTML += entryRow;

d.getElementById("total").innerHTML = convertCurrency(total);
  clearInput();
 return false; //prevent default behaviour  of a form submission

function convertCurrency(entryValue){
  var currency = parseFloat(entryValue);
  currency = currency.toFixed(2);
  currency = "£" + currency;

  return currency;
}

}

var clearInput = function(){
  entryField.value = ""; //l' input si riazzera dopo che l' hai inserito
}

