//Выпадающее мобильное меню
function expandMenu() {
  var burger = $('.burger-toggle');
  burger.toggleClass('burger-toggle--close');
  burger.siblings('.main-nav').toggleClass('main-nav--expand');
}

//Плавный скролл
$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  expandMenu();
  return false;
});

$(document).ready(function () {
  //Выпадающая навигация
  $('.burger-toggle').click(function () {
    return expandMenu();
  });

  $('.slider__wrapper-1').slick({
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    nextArrow: '.btn--next-1',
    prevArrow: '.btn--prev-1'
  });

  lightbox.option({
    fadeDuration: 200,
    imageFadeDuration: 200,
    resizeDuration: 200,
    albumLabel: '%1 из %2'
  });
});

document.addEventListener("DOMContentLoaded",
  function () {
    var div, n,
      v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = labnolThumb(v[n].dataset.id);
      div.onclick = labnolIframe;
      v[n].appendChild(div);
    }
  });

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}


/*
//Фиксированое меню
$(window).scroll(function () {
  if ($(this).scrollTop() > 90) {
    $('.main-header').addClass("main-header--fixed");
    $('.fixed-wrapper').addClass("fixed-wrapper--fixed");
  } else {
    $('.main-header').removeClass("main-header--fixed");
    $('.fixed-wrapper').removeClass("fixed-wrapper--fixed");
  }
});

//Отображение меню при скролле вверх
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    var burger = $('.burger-toggle');
    burger.removeClass('burger-toggle--close');
    burger.siblings('.main-nav').removeClass('main-nav--expand');
    $('.fixed-wrapper').removeClass("fixed-wrapper--upsticky");
  } else if (st > 400) {
    $('.fixed-wrapper').addClass("fixed-wrapper--upsticky");
  }
  lastScrollTop = st;
});*/
