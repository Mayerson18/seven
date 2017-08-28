//index
var orden = ["front","point","inventory","accounting","fixed","payroll","tour","decision","management","comunication","multiproperty","mail","online"]

$(function () {

        function snack() {
            var x = document.getElementById("snackbar")
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'prueba.php',
            data: $('form').serialize(),
            success: function () {
              snack();
              console.log($(this));
              $('form')[0].reset();
            }
          });

        });

  });
//ENVIANDO FORM

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

$(document).on("mouseenter",".oval",function(e){
  console.log("hover");

  e.preventDefault();

  var x = $($(this).siblings("a"))
  /*var href = $(this).siblings("a").attr("href");
  var next = $(".coki").find(".owl-nav").find(".owl-next");
  $(".coki").children().children().find(".owl-item.active").each(function(){
    var href2 = $(this).first().find("a").attr("href");
    if(href != href2)
      next.click();
    else
      return;
  })*/
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
  nav:false,
  dots:false,
  autoHeight: true,
  URLhashListener:true,
  startPosition: 'URLHash'
});
//$("#carrusel > div.owl-dots.hide > div.owl-dot.active")

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
           items:10,
           nav:true,
           loop:false
           //URLhashListener:true,
           //startPosition: 'URLHash'
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
           dots:false,
           nav:true,
           loop:true
       },
       600:{
           items:3,
           dots:false,
           nav:true
       },
       1000:{
           items:5,
           nav:true,
           dots:false,
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

  $('.slyder').owlCarousel({
    loop:true,
    items: 1,
    margin: 0,
    dots:true,

    autoplay:true,
    autoplayTimeout:6000
  });
  $(".owl-next").click(function(){
    setTimeout(function() {
      //$(".owl-item.active").find('.item').find("a")[0].click();
      var length = $(".coki").children().children().find(".owl-item.active").length;
      if(length>1){
        var href = window.location.search.substr(1)
        var type = window.location.hash.substr(1);
        console.log(type)
        if(typeof type === "undefined"  || type == "")
          type="front";
        var encontro = false;
        if(type!="online"){
          $(".owl-next").removeClass("disabled");
          var i = 0;
          for ( i = 0; i < orden.length; i++) {
            if (orden[i] == type)
              encontro=true;
            if(encontro)
              break;
          }
          window.location.hash= orden[++i];
        }
      }else {
        $(".owl-item.active").find('.item').find("a")[0].click();
      }
    },100)
  });

  $(".owl-prev").click(function(){
    var length = $(".coki").children().children().find(".owl-item.active").length;
    if(length>1){
      var href = window.location.search.substr(1)
      var type = window.location.hash.substr(1);
      var encontro = false;
      if(type!="front"){
        $(".owl-next").removeClass("disabled");
        var i = 0;
        for ( i = 0; i < orden.length; i++) {
          if (orden[i] == type)
            encontro=true;
          if(encontro)
            break;
        }
        window.location.hash= orden[--i];
      }
    }else {
      $(".owl-item.active").find('.item').find("a")[0].click();
    }
  });
  $(".owl-prev").text("Atrás");
  $(".owl-next").text("Siguiente");
  //$(".slyder").children().children().find(".cloned").find(".item").find("img").addClass("fondo-aux");
});
