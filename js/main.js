$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup-bg').click(function() {
    $('.popup-bg').fadeOut(800);
    $('.popup-buy').fadeOut(800);
    $('.popup').fadeIn(3200);
    $('html').removeClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup').fadeOut(800);
    $('.popup-buy').fadeIn(800);
});


$('.divprice1').mouseenter(function(e) {
    e.preventDefault();
    $('.divafterdiv1').fadeIn(600);
});

$('.divafterdiv1').mouseleave(function() {
    $('.divafterdiv1').fadeOut(600);
});


$('.divprice2').mouseenter(function(e) {
    e.preventDefault();
    $('.divafterdiv2').fadeIn(600);
});

$('.divafterdiv2').mouseleave(function() {
    $('.divafterdiv2').fadeOut(600);
});


$('.divprice3').mouseenter(function(e) {
    e.preventDefault();
    $('.divafterdiv3').fadeIn(600);
});

$('.divafterdiv3').mouseleave(function() {
    $('.divafterdiv3').fadeOut(600);
});


$('.divprice4').mouseenter(function(e) {
    e.preventDefault();
    $('.divafterdiv4').fadeIn(600);
});

$('.divafterdiv4').mouseleave(function() {
    $('.divafterdiv4').fadeOut(600);
});

new Swiper('.swiper', {
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination', // "String with CSS selector or HTML element of the container with pagination" - цитата из документации, обратие внимание
        clickable: true,
        },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },

    spacebetween: 90,
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener('DOMContentLoaded', () => {
    const cleave = new Cleave('.input-phone', {
        phone: true,
        phoneRegionCode: '{by}',
        delimiter: '-'
    });
});

document.addEventListener('DOMContentLoaded', () => {
const cleave = new Cleave('.input-credit-card', {
    creditCard: true
    });
});

