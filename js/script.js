$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	items:1,
		  	autoplay:true,
		  	loop:true,
		  	autoplaytimeout: 5000,
		  	autoplayHoverPause: true,
		  });

		  $(".button-nav").on("click", function(){


		  	var target = $(this).data("target");
		  	$(target).toggleClass("nav__list--open");
		  })


});