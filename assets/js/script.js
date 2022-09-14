var today = moment().format('dddd, MMMM Do');
var currentTime = moment().hour();

$("#currentDay").text(today);

$('.description').each(function() {
    var hourInt = parseInt($(this).attr("class").split(' ')[2]);

    if (hourInt === currentTime) {
        $(this).addClass('present');
    } else if (hourInt < currentTime) {
        $(this).addClass('past');
    } else {
        $(this).addClass('future');
    };
});

$('.saveBtn').click(function (){
    var hour = $(this).siblings('.description').attr("class").split(' ')[2];
    var task = $(this).siblings('.description').val();

    localStorage.setItem(hour, task);
});

$('.9').text(localStorage.getItem('9'));
$('.10').text(localStorage.getItem('10'));
$('.11').text(localStorage.getItem('11'));
$('.12').text(localStorage.getItem('12'));
$('.13').text(localStorage.getItem('13'));
$('.14').text(localStorage.getItem('14'));
$('.15').text(localStorage.getItem('15'));
$('.16').text(localStorage.getItem('16'));
$('.17').text(localStorage.getItem('17'));