jQuery(document).ready(function ($) {
    //set animation timing
    const animationDelay = 2500;

    initHeadline();

    function initHeadline() {
        //initialise headline animation
        animateHeadline($('.animated-headline'));
    }

    function animateHeadline($headlines) {
        $headlines.each(function () {
            const headline = $(this);

            //trigger animation
            setTimeout(function () {
                hideWord(headline.find('.is-visible').eq(0));
            }, animationDelay);
        });
    }

    function hideWord($word) {
        const nextWord = takeNext($word);

        switchWord($word, nextWord);

        setTimeout(function () {
            hideWord(nextWord);
        }, animationDelay);
    }

    function takeNext($word) {
        return !$word.is(':last-child')
            ? $word.next()
            : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});
