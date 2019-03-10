// Responsive Nav

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      1200,
      function() {
        window.location.hash = hash;
      }
    );
  }
});


/* animation */

$(function() {
  $('.title').slideUp(1000).slideDown(1000);
});

$(function(){
  $('.title, .Subtitle').on({
    mouseenter: function(){
      $(this).css("color", "#b90415");
    },  
    mouseleave: function(){
      $(this).css("color", "black");
    } 
  });
});

$(function(){
  $('.section-head').on({
    mouseenter: function(){
      $(this).css("color", "#fff");
    },  
    mouseleave: function(){
      $(this).css("color", "#b90415");
    } 
  });
});