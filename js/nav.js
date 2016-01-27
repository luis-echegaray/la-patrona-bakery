$(document).ready(function(){
	var $upArrow = $('img.up');
	var $downArrow = $('img.down');
	var $navLinks = $('.links');

	$downArrow.on('click', function(){
		$downArrow.css('display', 'none');
		$upArrow.css('display', 'block');
		$navLinks.slideDown();
	});

	$upArrow.on('click', function(){
		$upArrow.css('display', 'none');
		$downArrow.css('display', 'block');
		$navLinks.slideUp();
	});
});