var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);

var currentTime = moment().hour();
var twelveHour = moment().format("h");
// var nineAm = $('.test');
// var before = moment().startOf('hour').fromNow();
// var after = moment().endOf('hour').fromNow();

var momentInt = parseInt(twelveHour);
console.log(momentInt);
// console.log(before);
// console.log(after);

$('.hour').each(function() {
var hourInt = parseInt($(this).text());
console.log(hourInt);

if (hourInt === momentInt) {
    console.log("present");
    $('.test').addClass('present');
} else
if (hourInt < momentInt) {
    console.log("past")
    $('.test').addClass('past');
    $('.test').removeClass('present');
}

});

// if (before) {
//     console.log("grey");
//     nineAm.addClass('past');
// } 
// else 
// if (after) {
//     console.log("green");
//     nineAm.addClass('future');
// } 
// else {
//     console.log("red");
//     nineAm.addClass('present');
// }