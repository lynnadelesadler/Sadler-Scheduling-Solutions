// display the current date and time
function displayTime() {
  var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(time);
}

//Document Ready Event is to prevent any jQuery code from running before the document is finished loading (is ready).
//$(document).ready(function(){
$(function () {
  // saveBtn click listener
  $(".saveBtn").click(function () {
    // Get nearby values of the task in JQuery
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);

    // display message that text was saved to local storage
    var localStorageEL = $("#local-storage");
    localStorageEL.text("✨Appointment saved to Local Storage✨");

    // time out after 2 second
    setTimeout(() => {
      localStorageEL.text("");
    }, 2000);

    // console log text and associated time
    console.log(time, text);
  });
  //get current number of hours.
  function timeTracker() {
    //The moment().hour() Method is used to get the hours from the current time
    var timeNow = moment().hour();

    // loop over time blocks
    $(".Timeblock").each(function () {
      // parseInt converts a string to an integer so the string id value can compare to the timeNow var
      var blockTime = parseInt($(this).attr("id"));
      // To check the time and add the classes for Grey to indicate past, red to indicate present and green to indicate future
      if (blockTime < timeNow) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // Get item from local storage
  $("#8 .task").val(localStorage.getItem("8"));
  $("#9 .task").val(localStorage.getItem("9"));
  $("#10 .task").val(localStorage.getItem("10"));
  $("#11 .task").val(localStorage.getItem("11"));
  $("#12 .task").val(localStorage.getItem("12"));
  $("#13 .task").val(localStorage.getItem("13"));
  $("#14 .task").val(localStorage.getItem("14"));
  $("#15 .task").val(localStorage.getItem("15"));
  $("#16 .task").val(localStorage.getItem("16"));
  $("#17 .task").val(localStorage.getItem("17"));

  timeTracker();
});
//rerun displayTime function so the time continues to update on open page
setInterval(displayTime, 1000);
