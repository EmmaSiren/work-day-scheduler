var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);

var currentTime = moment().hour();
var nineAm = $('.description');
var before = moment().startOf('hour').fromNow();
var after = moment().endOf('hour').fromNow();
var hour = $('.hour');

console.log(currentTime);
console.log(before);
console.log(after);

// hour.forEach(element => {
// var hourInt = parseInt($(hour).text());
// console.log(hourInt);
// });

if (before) {
    console.log("grey");
    nineAm.addClass('past');
} 
else 
if (after) {
    console.log("green");
    nineAm.addClass('future');
} 
else {
    console.log("red");
    nineAm.addClass('present');
}