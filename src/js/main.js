// Custom JS

var animate = function(){


// Get dom elements
  var bg1 = document.getElementById('bg1');
  var bg2 = document.getElementById('bg2'); 
  var logo = document.getElementById('logo'); 
  var copy1 = document.getElementById('copy1');
  var ctaBtn = document.getElementById('ctaBtn');


// Banner timeline	

var tl = new TimelineLite({delay:0, ease: Expo.easeOut});

tl.to(bg1, 8, {
	x:-38,
	ease: Power1.easeOut,
    rotation:0.01
})

  .to(logo, 1.5, {
	autoAlpha:1,
	ease: Power1.easeOut
}, "-=7.5")

  .to(copy1, 1.5, {
	autoAlpha:1,
	ease: Power1.easeOut
}, "-=6")

  .to(bg2, 1, {
	autoAlpha:1,
	ease: Power1.easeOut
}, "-=2")

  .to(bg2, 8, {
	x:-38,
	ease: Power1.easeOut,
    rotation:0.01
},"-=3")

  .to(ctaBtn, 1.5, {
	autoAlpha:1,
	ease: Power1.easeOut
}, "-=2");


};


// Clickthrough stuff
function Ad (anim) { 
  this.init = function(){
    this.banner = document.getElementById('clickBg');

    // gets clickTAG variable, if it is not defined (e.g. banner is being tested locally) it will fallback to example.com
    function getClickTag() {
      return window.clickTag || 'http://www.google.com';
    }

    this.banner.onclick = function() {
      window.open(getClickTag(),'_blank');
    };

    // call the passed animation function
    anim();
  };
}


// instantiate and initialize the ad
var ad = new Ad(animate);
ad.init();