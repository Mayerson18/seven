//index
$(document).ready(function() {


$(".nav-toggle").click(function() {
  if($(this).hasClass("is-active")){
    $(this).removeClass("is-active")
  }else{
    $(this).addClass("is-active")
  }
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$(".nav-item2").click(function() {
  $(window).scrollTop(560);
});

$(".nav-item").click(function() {
  $(".nav-menu").removeClass("is-active")
  $(".nav-toggle").removeClass("is-active")
});

$o = $(".oval");
$o.hover( function(e){
  e.preventDefault();
  var x = $($(this).siblings("a"))
  x[0].click();
});

$('#imgs').owlCarousel({
  items: 1,
  margin: 0,
  URLhashListener:true,
  startPosition: 'URLHash'
});

$('#data-json2').owlCarousel({
  items: 1,
  margin: 0,
  autoHeight: true,
  URLhashListener:true,
  startPosition: 'URLHash'
});

$('#carrusel').owlCarousel({
  items: 1,
  margin: 0,
  autoHeight: true,
  URLhashListener:true,
  startPosition: 'URLHash'
});

$('.coki').owlCarousel({
  items: 1,
  margin: 0,
  dots: false,
  responsiveClass: true,
  responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:3,
           nav:true
       },
       1000:{
           items:9,
           nav:false,
           loop:false
       }
   }
});

$('.coki2').owlCarousel({
  items: 1,
  margin: 0,
  responsiveClass: true,
  responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:3,
           nav:true
       },
       1000:{
           items:6,
           nav:false,
           loop:false
       }
   }
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
  $(this).addClass("current2");
  var i = 0;
  var x = $(".active").find(".img");
  var index = parseInt(x.data("index"));
  var img = x.data("img");
  i = (index>=img.length) ? 0 : index;
  animation(x,img,i);
},function(){//mouseout
  $(this).removeClass("current2")
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


  $(".owl-next").click(function(){
    $(".owl-item.active").find('.item').find("a")[0].click();
  });

  $(".owl-prev").click(function(){
    $(".owl-item.active").find('.item').find("a")[0].click();
  });
});
