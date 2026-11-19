(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

var myaudio = document.getElementById("my_audio");
$(document).on('click', function () {
    if (myaudio) {
        myaudio.play();
    }
});

// Countdown target: December 5, 2026 at 12:17 PM
var countDownDate = new Date("Dec 05, 2026 12:17:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var timeEl = document.getElementById("time");
    if (timeEl) {
        timeEl.innerHTML =
            "<div class='countdown-wrapper'>" +
            "<div class='countdown-box'><span class='num'>" + days + "</span><span class='label'>Days</span></div>" +
            "<div class='countdown-box'><span class='num'>" + hours + "</span><span class='label'>Hours</span></div>" +
            "<div class='countdown-box'><span class='num'>" + minutes + "</span><span class='label'>Mins</span></div>" +
            "<div class='countdown-box'><span class='num'>" + seconds + "</span><span class='label'>Secs</span></div>" +
            "</div>";

        if (distance < 0) {
            clearInterval(x);
            timeEl.innerHTML = "Bless the married couple for a happy life!";
        }
    }
}, 1000);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '1.5rem',
    duration: 2000,
    delay: 200,
});

sr.reveal(`.rahul`, { origin: 'left', delay: 700 });
sr.reveal(`.pranjal`, { origin: 'right', delay: 700 });
sr.reveal(`.gif,.home_txt`, { delay: 1300, origin: 'top' });
sr.reveal(`.top-right-decoration,.top-left-decoration`, { origin: 'left', delay: 2200 });
sr.reveal(`.responsive-table__row`, { interval: 200 });
sr.reveal(`.table_container`, { delay: 100, origin: 'top' });
sr.reveal(`.happiness,.hindi_text`, { delay: 400, origin: 'bottom' });
sr.reveal(`.social__links`, { delay: 1000, origin: 'bottom', interval: 200 });
sr.reveal(`.newsletter__description,.home__bottom`, { origin: 'left', delay: 400 });
sr.reveal(`.newsletter__form,.CTA`, { origin: 'right', delay: 400 });