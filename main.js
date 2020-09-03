//FUNCTIONS CLICK NEXT AND PREV
$(document).ready(function() {
  $(".next").click(
    function() {
      nextImage();
    }
  )

  $(".prev").click(
    function() {
      prevImage();
    }
  )
  //FUNCTION CLICK BULLETS
  $(".nav i").click(
    function() {
     var bullets = $(this).index();
     $("img").removeClass("active");
     var indexImg = bullets + 1;
     $("img:nth-child("+indexImg+")").addClass("active");
     $(".nav i").removeClass("active");
     $(this).addClass("active");
  });
//KEYDOWN EVENTS
  $(document).keydown(
    function(event) {
      if(event.which == 39) {
        nextImage();

      } else if(event.which == 37) {
        prevImage();
      }
    }
  )
});

//FUNCTION NEXT IMAGE AND CIRCLE
function nextImage() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var circleActive = $("i.active");
  circleActive.removeClass("active");

  if (imgActive.hasClass("last")) {
    var nextImg = $("img.first");
    var nextCircle = $("i.first");
  } else {
    var nextImg = imgActive.next();
    var nextCircle = circleActive.next();
  }
    nextImg.addClass("active");
    nextCircle.addClass("active");
}

//FUNCTION PREV IMAGE AND CIRCLE
function prevImage() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var circleActive = $("i.active");
  circleActive.removeClass("active");

  if (imgActive.hasClass("first")) {
    var prevImg = $("img.last");
    var prevCircle = $("i.last");
  } else {
    var prevImg = imgActive.prev();
    var prevCircle = circleActive.prev();
  }
    prevImg.addClass("active");
    prevCircle.addClass("active");
}
