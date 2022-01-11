let dataLoad = document.getElementById("preloader");
function loading (){
    dataLoad.style.display = 'none';
}

// owl carousel slider//
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// www js link//
new WOW().init();
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();