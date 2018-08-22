$(document).ready(function () {
    $('.slider__wrapper-1').slick(
        {
            slidesToShow: 2,
            arrows: true,
            infinite: true,
            nextArrow: '.btn--next-1',
            prevArrow: '.btn--prev-1',
        }
    );

    $('.slider-video').slick(
        {
            slidesToShow: 1,
            arrows: true,
            infinite: true,
            draggable: false,
            nextArrow: '.btn--next-2',
            prevArrow: '.btn--prev-2'
        }
    );
});

var btnsFeedback = document.querySelectorAll('.btn__feedback');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close');
var body = document.querySelector('body');

for (var i = 0; i < btnsFeedback.length; i++) {
    btnsFeedback[i].addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('opened');
        modalOverlay.classList.add('opened');
        body.classList.add('modal-open');
    });
}

close.addEventListener('click', function (event) {
   event.preventDefault();
   modal.classList.remove('opened');
   modalOverlay.classList.remove('opened');
   body.classList.remove('modal-open');
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (modal.classList.contains('opened') && modalOverlay.classList.contains('opened') && body.classList.contains('modal-open')) {
            modal.classList.remove('opened');
            modalOverlay.classList.remove('opened');
            body.classList.remove('modal-open');

        }
    }
});
