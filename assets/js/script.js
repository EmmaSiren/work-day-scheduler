var today = moment();
var time = moment().format("hh:mm:ss");
var nineAm = $('.description');
var before = moment().startOf('hour').fromNow();
var after = moment().endOf('hour').fromNow();
var test = moment("9:30").format("HH:mm");

console.log(time);
console.log(before);
console.log(after);
console.log(test);

$("#currentDay").text(today.format("dddd, MMMM Do"));

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