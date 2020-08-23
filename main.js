window.onload = function() {
    // Smooth scrolling to anchor points 
	// Sourced from: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
	$('a[href*=\\#]').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
}