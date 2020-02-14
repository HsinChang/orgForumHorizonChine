// hamburger menu toggler
$(".hamburger-menu a").on("click", function() {
  $(this).toggleClass("active");
  $(".nav-menu-items").toggleClass("show");
});

/*===========================================
              Popup on Click
===========================================*/

// Opening popup
$("#open-opening-popup").click(function() {
  $(".location-popup, .form-popup").removeClass("show");
  $("#open-location-popup, #open-form-popup").removeClass("active");

  $(".popup-wrapper, .opening-popup")
    .animate()
    .addClass("show");
  $("#open-opening-popup").addClass("active");

  $("body").css("overflow", "hidden");
});
// Location popup
$("#open-location-popup").click(function() {
  $(".opening-popup, .form-popup").removeClass("show");
  $("#open-opening-popup, #open-form-popup").removeClass("active");

  $(".popup-wrapper, .location-popup")
    .animate()
    .addClass("show");
  $("#open-location-popup").addClass("active");

  $("body").css("overflow", "hidden");
});

// Form popup
$("#open-form-popup").click(function() {
  $(".opening-popup, .location-popup").removeClass("show");
  $("#open-opening-popup, #open-location-popup").removeClass("active");

  $(".popup-wrapper, .form-popup")
    .animate()
    .addClass("show");
  $("#open-form-popup").addClass("active");

  $("body").css("overflow", "hidden");
});

// close popup model
$(".close-popup").click(function() {
  var el = $(this);

  $(".popup-wrapper").removeClass("show");
  $("#open-opening-popup, #open-location-popup, #open-form-popup").removeClass(
    "active"
  );

  el.parent().removeClass("show");
  // $(".opening-popup, .location-popup, .form-popup").removeClass("show");
  $("body").css("overflow-y", "auto");
});

// close alert
$(".close-alert").click(function() {
  var el = $(this);
  el.parent().removeClass("show");
});

// close cookies
$(".cookies .small-btn").click(function() {
  $(".cookies").removeClass("show");
});

// When the user clicks anywhere outside of the modal, close it
$(".popup-wrapper").click(function(event) {
  if (event.target.className == "center-popup") {
    $(".popup-wrapper").removeClass("show");
    $(
      "#open-opening-popup, #open-location-popup, #open-form-popup"
    ).removeClass("active");
    $("body").css("overflow-y", "auto");
  }
});

// Video popup
$("#open-video-popup").click(function() {
  $(".video-popup-wrapper")
    .animate()
    .addClass("show");

  $("body").css("overflow", "hidden");
});

$(".close-popup").click(function() {
  $(".video-popup-wrapper").removeClass("show");
  $("body").css("overflow-y", "auto");
});

// ===================== Show Details =====================
$(".card .plus").on("click", function() {
  var el = $(this);
  el.parent()
    .children(".hover-inner")
    .toggleClass("show");
});

// ===================== Mobile search popup =====================
$(".navbar-mobile .search").on("click", function() {
  $(".mobile-search-wrapper").toggleClass("show");
  $(".search i").toggleClass("flaticon-close");
});

$(".navbar-mobile-2 .search").on("click", function() {
  $(".mobile-search-wrapper").toggleClass("show");
  $(".search i").toggleClass("flaticon-close");
});

$(".navbar-mobile-style-3 .search").on("click", function() {
  $(".mobile-search-wrapper").toggleClass("show");
  $(".search i").toggleClass("flaticon-close");
});

// show menu
$(".mobile-menu-toggler").on("click", function() {
  $(".menu-wrapper").toggleClass("show");
});

// mobile navbar -> submenu dropdown + change icon
$(".nav-menu-items .nav-items .menu-item-has-children").on("click", function() {
  var el = $(this);
  var dropdown = el.children(".sub-menu");

  dropdown.toggleClass("animate-dropdown");
  el.toggleClass("minimize-icon");
});

// animate drowpdown
var mobileNavItem = document.querySelectorAll(".navbar-mobile .nav-item");
$(".navbar-mobile .nav-item").on("click", function() {
  $("dropdown-menu-style").addClass("animate-dropdown");
});

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 1000) {
    $(".mobile-popup-toggler").fadeIn(1000);
  } else {
    $(".mobile-popup-toggler").fadeOut(1000);
  }
});

// Change Video player size in portrait mode
if ($(".v-container").length > 0) {
  window.addEventListener(
    "orientationchange",
    function() {
      window.matchMedia("(orientation: portrait)").matches &&
        $(".v-container").addClass("video-portrait-mode");
      window.matchMedia("(orientation: landscape)").matches &&
        $(".v-container").removeClass("video-portrait-mode");
    },
    false
  );
}
