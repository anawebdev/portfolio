$(document).ready(function(){

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

// particles

var options = {
	particleColor: '#4e627a',
	background: '#0B0C10',
	interactive: true,
	speed: 'slow',
	density: 'medium'
};
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);

var canvas = document.getElementById("my-canvas");
//var context = canvas.getContext("2d");

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