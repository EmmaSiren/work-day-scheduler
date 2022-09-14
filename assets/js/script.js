// Set current day's date using moment.js
var today = moment().format('dddd, MMMM Do');
// Set current hour using moment.js
var currentTime = moment().hour();

// Display current date in jumbotron
$("#currentDay").text(today);

// Displays any tasks previously saved to local storage upon page load/refresh
$('.9').text(localStorage.getItem('9'));
$('.10').text(localStorage.getItem('10'));
$('.11').text(localStorage.getItem('11'));
$('.12').text(localStorage.getItem('12'));
$('.13').text(localStorage.getItem('13'));
$('.14').text(localStorage.getItem('14'));
$('.15').text(localStorage.getItem('15'));
$('.16').text(localStorage.getItem('16'));
$('.17').text(localStorage.getItem('17'));

// Loop through each time block
$('.description').each(function() {
    // Grab each time block's hour class after 'description' class and set it as an integer
    var hourInt = parseInt($(this).attr("class").split(' ')[2]);

    // Each time block color coded based on past, present, or future
    if (hourInt === currentTime) {
        $(this).addClass('present');
    } else if (hourInt < currentTime) {
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    };
});

// Save user input task to corresponding hour in local storage 
$('.saveBtn').click(function (){
    // Each time slot corresponds to it's save button
    var hour = $(this).siblings('.description').attr("class").split(' ')[2];
    // Each text area's input value
    var task = $(this).siblings('.description').val();

    // Sets time slot key to task value to local storage
    localStorage.setItem(hour, task);
});