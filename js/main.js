// navigation
$('#nav-toggle').on('click',function(e){
  e.preventDefault();
  $('body').toggleClass('header-active');     
});

$('.menu-item__parent').each(function(){
  let block = $(this);
  let btn = $(this).find('.menu-item__icon');
  let subNav = $(this).next();
  btn.on('click',function(e){
      e.preventDefault();
      subNav.slideToggle();
      block.toggleClass('active');
  });
})
// navigation

//fixed header start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('header').addClass("stickyhead");
    }
    else {
      $('header').removeClass("stickyhead");
    }
  });

  //fixed header end

   $( document ).ready(function() {
     $('#nav-toggle').on('click', function(){
       $('.toplinks').append( $('.xyz') ); // append -> object
    });
 });



$(document).ready(function () {
  $('#showOverlay').click(function () {
    $('#ham-menu').fadeIn();
  });

  $('#closeOverlay').click(function () {
    $('#ham-menu').fadeOut();
  });
});


function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const increment = Math.ceil(target / 100);
  let count = 0;

  const update = () => {
    if (count < target) {
      count += increment;
      if (count > target) count = target;
      counter.textContent = count + "+";
      requestAnimationFrame(update);
    }
  };

  update();
}

// Select all counter sections
const counterSections = document.querySelectorAll(".counter-section");

counterSections.forEach((section) => {
  let started = false;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      if (entries[0].isIntersecting && !started) {
        const counters = section.querySelectorAll(".counter-box span");
        counters.forEach((counter) => animateCounter(counter));
        started = true;
        obs.unobserve(section); // Optional: stop observing once done
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
});





// Awards Recogniton Code

$(".slider-ar").slick({
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
  responsive: [
        {
      breakpoint: 991,
      settings: {
 infinite: true,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
 infinite: true,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
      },
    },
  ],
});


// They Trust Us Code

$(".slider-tt").slick({
  infinite: true,
  slidesToShow: 2,
  arrows: true,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 2000,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
 infinite: true,
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  slidesToScroll: 1,
      },
    },
  ],
});





// Trusted Brands Code

$(".slider-trustedbrands").slick({
  infinite: true,
  slidesToShow: 7,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
  responsive: [
        {
      breakpoint: 991,
      settings: {
 infinite: true,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
 infinite: true,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  slidesToScroll: 1,
      },
    },
  ],
});


// Footer accordion Code

    jQuery(".f-links h6").click(function () {
      jQuery(this).parent(".nav-btm").toggleClass("open");
    });
