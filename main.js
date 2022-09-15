// Preloader Jquery
$(window).on("load", function() {
    $(".loader").fadeOut("slow");
});

//  Clock section
function updateClock() {
    let now = new Date();
    let dayName = now.getDay(),
        month = now.getMonth(),
        dayNumb = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        period = "AM";

        if (hour == 0) {
            hour = 12;
        } else if (hour >= 12) {
            period = "PM";
        }

        if (hour > 24) {
            hour = hour - 24;
        }

        Number.prototype = function(clock){
            for (let n = this.toString(); n.length < clock; n = 0 + n) {
                return n;                
            }
        }
        
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let id = ["dayNames", "months", "dayNumber", "years", "hours", "minutes", "seconds", "periods"];

        let values = [days[dayName], months[month], dayNumb, year, hour, minute, second, period];

        for (let i = 0; i < id.length; i++) {
            document.getElementById(id[i]).firstChild.nodeValue = values[i];            
        }
}

function initialClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}

// Right-Side Scroll-Menu section
$(document).ready(function()
{
    $(window).on('scroll', function()
    {
        let Link = $('.scroll-nav a.srl');
        let top = $(window).scrollTop();

        $('.content').each(function() 
        {
            let id = $(this).attr('id');
            let height = $(this).height();
            let offset = $(this).offset().top - 200;

            if (top >= offset && top < offset + height) {
                Link.removeClass('active');

                $('.scroll-nav').find('[data-scroll= "' + id + '"]').addClass('active');
            }
        });
    });
});

