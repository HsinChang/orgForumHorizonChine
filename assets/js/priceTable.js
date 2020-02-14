var basicPackageTable = $(".membership-section .basic-package")
var standardPackageTable = $(".membership-section .standard-package")
var adbancedPackageTable = $(".membership-section .advanced-package")

var basicPackageCard = $(".membership-section .price-card.basic")
var standardPackageCard = $(".membership-section .price-card.standard")
var adbancedPackageCard = $(".membership-section .price-card.advanced")


basicPackageCard.on('click', function() {
  standardPackageTable.removeClass('show');
  adbancedPackageTable.removeClass('show');
  basicPackageTable.addClass('show');

  // for card style changes
  basicPackageCard.addClass('active-price-card');
  standardPackageCard.removeClass('active-price-card');
  adbancedPackageCard.removeClass('active-price-card');
})

standardPackageCard.on('click', function() {
  basicPackageTable.removeClass('show');
  adbancedPackageTable.removeClass('show');
  standardPackageTable.addClass('show');

  // for card style changes
  standardPackageCard.addClass('active-price-card');
  basicPackageCard.removeClass('active-price-card');
  adbancedPackageCard.removeClass('active-price-card');
})

adbancedPackageCard.on('click', function() {
  basicPackageTable.removeClass('show');
  standardPackageTable.removeClass('show');
  adbancedPackageTable.addClass('show');

  // for card style changes
  adbancedPackageCard.addClass('active-price-card');
  basicPackageCard.removeClass('active-price-card');
  standardPackageCard.removeClass('active-price-card');
})
