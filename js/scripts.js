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
	particleColor: '#1F2833',
	background: '#0B0C10',
	interactive: true,
	speed: 'slow',
	density: 'medium'
};
var particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), options);

var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");


});