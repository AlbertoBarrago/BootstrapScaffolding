$(document).ready(function(){
  
  var custom_h1 = $('#custom_row h1'),
      custom_h5 = $('#custom_row h5'),
      custom_h3 = $('#custom_row h3'),
      custom_img = $('#custom_row img'),
      body_BG = $('.custom_class');

  var tl = new TimelineMax();
  // tl.to(custom_img, 1, {opacity:0, bottom: -50, ease:Power0.easeIn}).to(custom_img, 1, {opacity:0.5, bottom: 0}).to(custom_img, 1, {opacity:0.8, scale:1.5, repeat:2} ).to(custom_img, 1, {opacity:1, scale:1} );
  // tl.to(custom_row, 1.2, {opacity:0, bottom: -150, ease:Power0.easeIn}).to(custom_row, 1.4, {opacity:1, bottom:0, ease:Linear.easeIn }).to(custom_row, 1.4, {opacity:0, bottom:150, ease:Linear.easeIn});
  // tl.to(custom_rowH5, 1.7, {opacity:1, ease:Power0.easeIn}).to(custom_rowH5, 1.8, {top:100,ease:Power0.easeOut});

  tl.to(body_BG, 0.3, {backgroundColor: '#000', ease: Linear.easeIn}).to(body_BG, 0.4, {backgroundColor:'#fff', repeat:1});
  tl.to(custom_img, 1, {opacity: 1, ease:Power1.easeIn});
  tl.to(custom_h1, 1.1, {opacity: 1, ease:Power1.easeIn});
  tl.to(custom_h5, 1.2, {opacity: 1, ease:Power2.easeIn});

  tl.to(custom_img, 1, {opacity: 0, ease:Power1.easeOut});
  tl.to(custom_h1, 0.6, {opacity: 0, ease:Power1.easeIn});
  tl.to(custom_h5, 0.6, {color: 'white', scale: 2, ease:Power2.easeOut}).to(custom_h5, 1, {opacity: 0, ease:Power2.easeOut});

  tl.to(body_BG, 0.3, {backgroundColor: '#fff', ease: Linear.easeIn}).to(body_BG, 0.4, {backgroundColor:'#000', repeat:1});
  tl.to(custom_h3, 0.5, {opacity:1, letterSpacing: 30, scale: 1.4, top: 100, ease: Power3.easeOut});

  tl.to(custom_h3, 1, {opacity:1, letterSpacing: 0, scale: 1.8, top: 50, ease: Power3.easeIn});

});