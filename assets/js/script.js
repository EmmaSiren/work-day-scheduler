var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);

var currentTime = moment().hour();
console.log(currentTime);
// console.log($('.description').attr('class').split(' ')[2]);

$('.description').each(function() {
    var hourInt = parseInt($(this).attr("class").split(' ')[2]);
    console.log(hourInt);

    if (hourInt === currentTime) {
        console.log("present");
        $(this).addClass('present');
    } else if (hourInt < currentTime) {
        console.log("past")
        $(this).addClass('past');
    } else {
        console.log('future');
        $(this).addClass('future');
    }
});


$('.saveBtn').click(function (){
    var taskContent = $('.description').val();
    console.log(taskContent);

    // localStorage.setItem('task', taskContent);
});
