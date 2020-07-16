//  to play video in Chrome
if (window.chrome)
  $("[type=video\\\/mp4]").each(function () {
    $(this).attr('src', $(this).attr('src').replace(".mp4", "_c.mp4"));
  });

  // Mobile Navbar
  $(document).ready(function(){
    $(".menu").click(function(){
      $("nav").slideToggle(500);
    })
  })


// change last words in the sentence in the video showcase
$(function () {
  count = 0;
  wordsArray = ["experiences", "digital solutions", "ideas"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 3000);
});


// News slider

let newsSlider = document.querySelectorAll('.news-container'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

// clear all slides
function reset() {
  for(let i = 0; i < newsSlider.length; i++) {
    newsSlider[i].style.display = 'none';
  }
}
 
// initializes slider
function startSlide() {
  reset();
  newsSlider[0].style.display = 'grid';
}

// show prev
function slideLeft() {
  reset();
  newsSlider[current - 1].style.display = 'grid';
  current--;
}

// show next  
function slideRight() {
  reset();
  newsSlider[current + 1].style.display = 'grid';
  current++;
}

//  left arrow click 
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = newsSlider.length;
  }
  slideLeft();
});

//  right arrow click 
arrowRight.addEventListener('click', function() {
  if (current === newsSlider.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


// WHAT CAN WE DO FOR YOU SECTION, hover and show highlighted button


// 'Research & Strategy, Image
$("#research").on('mouseenter', function() {
  $('#research-button').css("background-color", "black").css("transition", ".5s").css("color", "white");
  $("#research").on('mouseleave', function() {
    $('#research-button').css("background-color", "transparent").css("transition", ".5s").css("color", "black");
  });
});

// 'Creative' Image
$("#creative").on('mouseenter', function() {
  $('#creative-button').css("background-color", "black").css("transition", ".5s").css("color", "white");
  $("#creative").on('mouseleave', function() {
    $('#creative-button').css("background-color", "transparent").css("transition", ".5s").css("color", "black");
  });
});

// 'Delivery' Image

$("#delivery").on('mouseenter', function() {
  $('#delivery-button').css("background-color", "black").css("transition", ".5s").css("color", "white");
  $("#delivery").on('mouseleave', function() {
    $('#delivery-button').css("background-color", "transparent").css("transition", ".5s").css("color", "black");
  });
});
