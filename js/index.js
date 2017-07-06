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

$b = $(".function");
$b.hover( function(e){//mouseenter
  e.preventDefault();
  $(this).addClass("current");
  var i = 0;
  var x = $(".active").find(".img");
  var index = parseInt(x.data("index"));
  var img = x.data("img");
  i = (index>=img.length) ? 0 : index;
  animation(x,img,i);
},function(){//mouseout
  $(this).removeClass("current")
});

function animation(x,img,i){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(x).removeClass("animated fadeOut zoomIn");
  $(x).addClass("animated fadeOut").one(animationEnd, function() {
    $(this).attr("src",img[i]);
  	i++;
  	x.data("index",i);
    $(this).removeClass('fadeOut').addClass("zoomIn").one(animationEnd, function() {
      $(this).removeClass('animated zoomIn');
    });
  });
}
