/*===================================
          Number Count Up 
=====================================*/
if ($(".count-number").length > 0) {
  $(".count-number").rCounter({
    duration: 20
  });
}

/*===================================
          Search Input Popup
=====================================*/
function sidebarSearch() {
  var searchTrigger = $(".search-active"),
    endTriggersearch = $(".search-close"),
    container = $(".main-search-active");

  searchTrigger.on("click", function(e) {
    e.preventDefault();
    container.toggleClass("search-visible");
  });

  endTriggersearch.on("click", function() {
    container.removeClass("search-visible");
  });
}
sidebarSearch();

/*===================================
            ScrollTop
=====================================*/

$("#scroll-top").click(function() {
  $("html").animate(
    {
      scrollTop: 0
    },
    "slow"
  );
});

/*===================================
            ScrollBottom
=====================================*/
$(".scroll-next").click(function() {
  $("html, body").animate(
    {
      scrollTop: $(window).height()
    },
    "linear"
  );
});

// Scroll then fixed
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#scroll-top").addClass("active");
  } else {
    $("#scroll-top").removeClass("active");
  }
});

// Mobile Bottom popup toggler
if ($(window).width() < 769) {
  var scrollPos = 0;

  window.addEventListener("scroll", function() {
    if (document.body.getBoundingClientRect().top > scrollPos) {
      $(".side-form-icons").removeClass("show-up-form-icons");
    } else {
      $(".side-form-icons").addClass("show-up-form-icons");
    }
    scrollPos = document.body.getBoundingClientRect().top;
  });
}

// Show popup on Btn Click;

if ($("#popup-toggle").length > 0) {
  $("#popup-toggle").click(function() {
    $(".popover-right").toggleClass("show");
  });
}

// Disable Input
if ($(".toggle-switch").length > 0) {
  var ts = $("#job_type");

  if (ts[0].disabled) {
    alert("disabled");
  }
}

// Initialize Nice Select
if ($(".select-box").length > 0) {
  $(".select-box").niceSelect();
}
$(document).ready(function() {});

// Preloader
$(window).on("load", function() {
  var preLoder = $("#preloader");
  preLoder.fadeOut(1000);

  $(document).on("click", ".cancel-preloader a", function(e) {
    e.preventDefault();
    $("#preloader").fadeOut(2000);
  });
});
