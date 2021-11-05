jQuery(document).ready(function ($) {
    const controller = new ScrollMagic.Controller();

    const animation = new TimelineMax();
    const fet1 = $('#step1');
    const fet2 = $('#step2');
    const fet3 = $('#step3');
    const text = $('.process-heading span');

    animation.to(text, 0.0, { color: '#f7b200', ease: Ease.easeNone });

    animation.to(fet1, 0.02, { opacity: 1, ease: Ease.easeNone });
    animation.to(fet1, 0.01, { opacity: 0, ease: Ease.easeNone });

    animation.to(text, 0.0, { color: '#0171e2', ease: Ease.easeNone });

    animation.to(fet2, 0.0, { x: '-100%', y: '100%', ease: Ease.easeNone });
    animation.to(fet2, 0.02, { opacity: 1, y: '0%', ease: Ease.easeNone });
    animation.to(fet2, 0.01, { opacity: 0, ease: Ease.easeNone });

    animation.to(text, 0.0, { color: '#009468', ease: Ease.easeNone });

    animation.to(fet3, 0.0, { x: '-200%', y: '100%', ease: Ease.easeNone });
    animation.to(fet3, 0.02, { opacity: 1, y: '0%', ease: Ease.easeNone });

    const scene = new ScrollMagic.Scene({
        triggerElement: '#process',
        triggerHook: 'onLeave',
        duration: '170%',
    })
        .setPin('#process')
        .setTween(animation)
        .addTo(controller);
});
