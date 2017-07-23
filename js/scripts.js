$(document).ready(function(){

// GOOGLE ANALYTICS

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103073980-1', 'auto');
  ga('send', 'pageview');

// aos library initialization
    AOS.init();

//animates skyline and laptop in IE
var p = document.querySelector('.path'), 
offset = 2000;
var q = document.querySelector('.path-laptop'), 
offsetL = 2780;

var offsetMe = function() {
  if(offset < 0) offset = 2000;
  p.style.strokeDashoffset = offset;
  offset--;
  
  requestAnimationFrame(offsetMe);
}

var offsetLap = function() {
  if(offsetL < 0) offsetL = 2780;
  q.style.strokeDashoffset = offsetL;
  offsetL--;
  requestAnimationFrame(offsetLap);
}

offsetMe();
offsetLap();

// SCROLL TO TOP

$(document).scroll(function() {
  if ($(document).scrollTop() >= 50) {
    $("#top").addClass('show');
  } else {
    $("#top").removeClass('show');
    }
});

$('#top').on('click',function () {
  $('#top').removeClass('show');
});

//SMOOTH SCROLL from CSS Tricks

$('a[href*="#"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

});