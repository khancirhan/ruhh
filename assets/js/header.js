/* ------------------ Add fixed class to header when scroll has moved past a given point ------------------ */
$(window).scroll(function () {
    const screenWidth =
        window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (screenWidth <= 991) return;

    const scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

/* ------------------ Hide header on scroll down and show on scroll up ------------------ */
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('.header').outerHeight();

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .move-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header').addClass('move-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('move-up');
        }
    }

    lastScrollTop = st;
}

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
