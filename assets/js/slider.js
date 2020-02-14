// Homepage 1 Showcase Slider
if ($(".header-carousel").length > 0) {
  $(".header-carousel").owlCarousel({
    loop: true,
    autoplay: false, //true if you want to enable autoplay
    autoPlayTimeout: 1000,
    margin: 0,
    dots: true,
    nav: true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
    responsive: {
      0: {
        items: 1
        // dots: treu,
        // nav: false,
      },
      460: {
        items: 1
        // dots: false,
        // nav: false,
      },
      599: {
        items: 1
        // dots: false,
        // nav: false,
      },
      768: {
        items: 1
      },
      960: {
        items: 1
      },
      1200: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  });
}

// ============================= Showcase Sliders ============================

// Homepage 4
if ($(".showcase-style-4").length > 0) {
  $(".showcase-style-4 > .content-wrapper").slick({
    infinite: true,
    speed: 500,
    dots: true,
    arrows: false,
    cssEase: "linear",
    appendDots: $(".showcase-style-4 .slider-indicator-2")
  });

  $(".showcase-style-4 > .content-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".showcase-style-4 .slider-indicator-3 .current").text(
      check_number(currentSlideindex)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".showcase-style-4 .slider-indicator-3 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".showcase-style-4 > .content-wrapper").slick("getSlick")
      .slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

// ============================= Showcase Style 2 ==========================
if ($(".showcase-style-2").length > 0) {
  $(".showcase-style-2 .slider-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    cssEase: "linear",
    prevArrow: $(".indicator-style-2 > .flaticon-back"),
    nextArrow: $(".indicator-style-2 > .flaticon-next"),
    appendDots: $(".indicator-style-2 .indicator-style-2 .nums")
  });

  $(".showcase-style-2 .slider-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".showcase-style-2 .indicator-style-2 .current").text(
      check_number(currentSlideindex)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".showcase-style-2 .indicator-style-2 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".showcase-style-2 .slider-wrapper").slick("getSlick")
      .slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

// ============================= Showcase Style 3 ==============================
if ($(".showcase-style-3").length > 0) {
  $(".showcase-style-3 .slider-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: false,
    cssEase: "linear",
    prevArrow: $(".indicator-style-3 > .flaticon-up-arrow"),
    nextArrow: $(".indicator-style-3 > .flaticon-down-arrow")
  });

  // On before home slider change
  $(".slider-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var totalSlide = slick.slideCount;
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    var progress = 100 / totalSlide;
    var progressHeight = progress * currentSlideindex;
    SliderProgressbarStart(progressHeight);
    $(".indicator-style-3 .current").text(check_number(currentSlideindex));
  });

  $(window).on("load", function() {
    var totalSlide = $(".slider-wrapper").slick("getSlick").slideCount;
    var progress = 100 / totalSlide;
    var progressHeight = progress * 1;
    SliderProgressbarStart(progressHeight);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }

  function SliderProgressbarStart(height) {
    $(".home-slider-progressbar .home-slider-progress-active").css({
      height: height + "%"
    });
  }
}

// ============================ Showcase Style 5 ===============================
if ($(".showcase-style-5").length > 0) {
  $(".slider-wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: $(".carousel-controlar > .prev"),
    nextArrow: $(".carousel-controlar > .next"),
    appendArrows: $(".showcase-style-5 .pagination-style-3")
  });

  $(".slider-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var totalSlide = slick.slideCount;
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".showcase-style-5 .pagination-style-3 .current").text(
      check_number(currentSlideindex)
    );
    $(".showcase-style-5 .pagination-style-3 .total").text(
      check_number(totalSlide)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".showcase-style-5 .pagination-style-3 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".slider-wrapper").slick("getSlick").slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

/* =======================================================================
                          Testimonial Slider
 ======================================================================= */
// testimonial Slider
if ($(".testimonial-style-1").length > 0) {
  //thumb slider
  $(".testimonial-thumbnail-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".testimonial-description-slider",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<span class="slick-prev"><i class="flaticon-back"></i></span>',
    nextArrow: '<span class="slick-next"><i class="flaticon-next"></i></span>',
    appendArrows: $(".testimonial-slider-arrows"),
    appendDots: $(".testimonial-slider-dots"),
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  //description slider
  $(".testimonial-description-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: ".testimonial-thumbnail-slider"
  });

  $(
    '.testimonial-carousel-wrap .testimonial-thumbnail-slider .single-testimonial-thumb[data-slick-index="2"]'
  ).addClass("testimonial-center-item");
}

// Testimonial Slider -> Homepage 4
if ($(".testimonial-style-2").length > 0) {
  //thumb slider
  $(".testimonial-thumbnail-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".testimonial-description-slider",
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    appendDots: $(".testimonial-style-2 .slider-indicator-2"),
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  //description slider
  $(".testimonial-description-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: ".testimonial-thumbnail-slider"
  });

  $(".testimonial-thumbnail-slider").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var totalSlide = slick.slideCount;
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".testimonial-style-2 .slider-indicator-3 .current").text(
      check_number(currentSlideindex)
    );
    $(".testimonial-style-2 .slider-indicator-3 .total").text(
      check_number(totalSlide)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".testimonial-style-2 .slider-indicator-3 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".testimonial-thumbnail-slider").slick("getSlick")
      .slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

// Testimonial Slider 3 -> Online Courses
if ($(".testimonials-style-3").length > 0) {
  $(".testimonial-slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    appendDots: $(".testimonial-style-2 .slider-indicator-2"),
    nextArrow: $(".testimonials-style-3 .carousel-controlar .next"),
    prevArrow: $(".testimonials-style-3 .carousel-controlar .prev"),
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $(".testimonial-slider-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var totalSlide = slick.slideCount;
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".testimonials-style-3 .pagination-style-3 .current").text(
      check_number(currentSlideindex)
    );
    $(".testimonials-style-3 .pagination-style-3 .total").text(
      check_number(totalSlide)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".testimonials-style-3 .pagination-style-3 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".testimonial-slider-wrapper").slick("getSlick")
      .slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

/*===============================================================================
                              Blogs Slider
================================================================================*/

// blog slider style 1
if ($(".blog-carousel-01").length > 0) {
  $(".blog-carousel-01").owlCarousel({
    nav: true,
    dots: true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
    margin: 30,
    loop: true,
    dots: true,
    navContainer: $(".blog-carousel-controls"),
    dotsContainer: $(".blog-carousel-controls .dots"),
    responsive: {
      0: {
        items: 1,
        // dots: false,
        nav: false
      },
      460: {
        items: 1,
        // dots: false,
        nav: false
      },
      599: {
        items: 1,
        // dots: false,
        nav: false
      },
      768: {
        items: 1
      },
      960: {
        items: 2
      },
      1200: {
        items: 2
      },
      1920: {
        items: 2
      }
    }
  });
}

// blog slider style 2
if ($(".blog-carousel-2").length > 0) {
  $(".blog-carousel-2").owlCarousel({
    nav: true,
    dots: true,
    navText: [$(".carousel-icon > .prev"), $(".carousel-icon > .next")],
    margin: 30,
    loop: true,
    dots: true,
    navContainer: $(".blog-carousel-controls"),
    dotsContainer: $(".blog-carousel-controls .dots"),
    responsive: {
      0: {
        items: 1,
        // dots: false,
        nav: false
      },
      460: {
        items: 1,
        // dots: false,
        nav: false
      },
      599: {
        items: 1,
        // dots: false,
        nav: false
      },
      768: {
        items: 1
      },
      960: {
        items: 2
      },
      1200: {
        items: 2
      },
      1920: {
        items: 2
      }
    }
  });
}

// blog slider styl3 3
if ($(".blogs-style-3").length > 0) {
  $(".blogs-style-3").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: $(".blogs-section-2 .slider-indicator-2"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $(".blogs-style-3").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    $(".blogs-section-2 .slider-indicator-3 .current").text(
      check_number(currentSlideindex)
    );
  });

  function totalSlideNum(totalSlide) {
    $(".blogs-section-2 .slider-indicator-3 .total").text(
      check_number(totalSlide)
    );
  }

  $(window).on("load", function() {
    var totalSlide = $(".blogs-style-3").slick("getSlick").slideCount;
    totalSlideNum(totalSlide);
  });

  function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
  }
}

// Teachers Carousel
if ($(".teachers-carousel").length > 0) {
  $(".teachers-carousel").owlCarousel({
    nav: true,
    dots: true,
    navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
    margin: 30,
    loop: true,
    dots: true,
    dotsContainer: $(".teacher-carousel-controls .dots"),
    responsive: {
      0: {
        items: 1,
        // dots: false,
        nav: false
      },
      460: {
        items: 1,
        // dots: false,
        nav: false
      },
      599: {
        items: 1,
        // dots: false,
        nav: false
      },
      768: {
        items: 1
      },
      960: {
        items: 2
      },
      1200: {
        items: 3
      },
      1920: {
        items: 3
      }
    }
  });

  $(document).on("click", ".single-teacher-item .thumb .hover .plus", function(
    e
  ) {
    e.preventDefault();
    const el = $(this);
    el.parent().toggleClass("active");
  });
}

// single range slider with default tooltip open
if ($(".range-slider-con").length > 0) {
  var pmdSliderTooltip = document.getElementById("pmd-slider");
  noUiSlider.create(pmdSliderTooltip, {
    start: [1],
    connect: "lower",
    tooltips: [wNumb({ decimals: 0 })],
    range: {
      min: [1],
      max: [8]
    }
  });
}
