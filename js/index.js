//index
$o = $(".oval");
$o.hover( function(e){
  e.preventDefault();
  var x = $($(this).siblings("a"))
  x[0].click();
});

$('.owl-carousel').owlCarousel({
  items: 1,
  margin: 0,
  URLhashListener:true,
  startPosition: 'URLHash'
});

//index2
$a = $(".li");
$a.hover( function(e){
  e.preventDefault();
  $a.removeClass("current");
  $(this).find("a")[0].click();
  $(this).addClass("current");
});
