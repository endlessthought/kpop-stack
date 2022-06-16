$(document).ready(function(){

	// Navigation Sticky
	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();    
	    if (scroll >= 650) {
	        $("nav").addClass("sticky-nav");
	    }else{
	    	$("nav").removeClass("sticky-nav");
	    }
	});

	// Scroll On Link
	$(".js--scroll-to-plans").click(function(){
		$("html, body").animate({scrollTop: $(".js--section-plans").offset().top},1000)
	});

	$(".js--scroll-to-start").click(function(){
		$("html, body").animate({scrollTop: $(".js--section-features").offset().top},1000)
	});


	// Link Smooth Scroll
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animation on Scroll

	$(".js--ani-features").waypoint(function(direction){
	        $(".js--ani-features .col").addClass("animate__animated animate__slideInUp");
  	},{
  		offset: '60%'
  	});

	$(".js--ani-works").waypoint(function(direction){
	        $(".js--ani-works img").addClass("animate__animated animate__flipInY");
  	},{
  		offset: '60%'
  	});

  	$(".js--ani-cities").waypoint(function(direction){
	        $(".js--ani-cities .col").addClass("animate__animated animate__zoomIn");
  	},{
  		offset: '60%'
  	});

  	
  	$(".js--ani-plan").waypoint(function(direction){
	        $(".js--ani-plan").addClass("animate__animated animate__tada");
  	},{
  		offset: '60%'
  	});

    // Mobile Nav
    $(".js--nav-icon").click(function(){
      var nav = $(".js--main-nav");
      var icon = $(".js--nav-icon i");
      nav.slideToggle(200);

      if(icon.hasClass("ion-navicon-round")){
        icon.removeClass("ion-navicon-round").addClass("ion-close-round");
      }else{
        icon.removeClass("ion-close-round").addClass("ion-navicon-round");
      }

    })
});