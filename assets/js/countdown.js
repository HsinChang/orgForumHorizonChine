if ($("#mycountdownOne").length > 0) {
  $("#mycountdownOne").countdown("2019/11/20", function(event) {
    $(".days").text(event.strftime("%D"));
    $(".hours").text(event.strftime("%H"));
    $(".minutes").text(event.strftime("%M"));
    $(".seconds").text(event.strftime("%S"));
  });
}

if ($("#mycountdownTwo").length > 0) {
  $("#mycountdownTwo").countdown("2019/11/20", function(event) {
    $(".days").text(event.strftime("%D"));
    $(".hours").text(event.strftime("%H"));
    $(".minutes").text(event.strftime("%M"));
    $(".seconds").text(event.strftime("%S"));
  });
}
