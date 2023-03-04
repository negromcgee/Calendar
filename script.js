// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

const saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', function() {
  console.log('Button clicked!');
});


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const now = dayjs();
  const currentHour = now.hour().toString().padStart(2, '0');
  console.log(currentHour);
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
const nine = localStorage.getItem('hour9');
const ten = localStorage.getItem('hour10');
const eleven = localStorage.getItem('hour11');
const twelve = localStorage.getItem('hour12');
const one = localStorage.getItem('hour1');
const two = localStorage.getItem('hour2');
const three = localStorage.getItem('hour3');
const four = localStorage.getItem('hour4');
const five = localStorage.getItem('hour5');
  //
  // TODO: Add code to display the current date in the header of the page.
});
