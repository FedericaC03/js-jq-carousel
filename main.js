$(document).ready(function() {
  //GENERO UNA FUNZIONE CHE AL CLICK SULLA FRECCIA DI DESTRA, FACCIA LO SLIDE SULLE FOTO SUCCESSIVE
  $(".next").click(
    function () {
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      if(imgActive.hasClass("last")){
        var nextImg = $("img.first");
      } else {
        var nextImg = imgActive.next();
      }
      nextImg.addClass("active");
    }
  );
  //GENERO UNA FUNZIONE CHE AL CLICK SULLA FRECCIA DI SINISTRA, FACCIA LO SLIDE SULLE FOTO PRECEDENTI
  $(".prev").click(
    function () {
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      if(imgActive.hasClass("first")){
        var nextImg = $("img.last");
      } else {
        var nextImg = imgActive.prev();
      }
      nextImg.addClass("active");
    }
  );
//GENERO UNA FUNZIONA CHE AL CLICK SUI PALLINI, FACCIA LO SLIDE
$(".fa-circle").click(
  function () {
    var imgActive = $("img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("last")){
      var nextImg = $("img.first");
    } else {
      var nextImg = imgActive.next();
    }
    nextImg.addClass("active");

    //RENDO I CERCHI ACTIVE AL CLICK
    var circleActive = $("fa-circle.active");
    circleActive.removeClass("active");
    var nextCircle = circleActive.next();
    nextCircle.addClass("active");
    // $(".fa-circle").toggleClass("active");
  }
);
} );
