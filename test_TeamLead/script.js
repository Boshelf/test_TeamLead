
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    var sec = 1800,
        countDiv = document.getElementById("timer"),
        secpass,
        countDown = setInterval(function () {
            'use strict';
            secpass();
        }, 1000);
    function secpass() {
        'use strict';
        var min = Math.floor(sec / 60),
            remSec = sec % 60;
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        countDiv.innerHTML = min + ":" + remSec;
        if (sec > 0) {
            sec = sec - 1;
        } else {
            clearInterval(countDown);
            countDiv.innerHTML = 'countdown done';
        }
    }
});
