$(document).ready(function(){
	$('.thumbnails img').click(function(event){
		var imgSrc = event.target.src;	
		$('.overlay').show(500).css('display', 'flex');	
		$('body').css('overflow', 'hidden');
		$('#modal-image').attr('src', imgSrc);
	});

	$('#modal span, .overlay').click(function(event){
		$('.overlay').hide(500).css('display', 'none');
		$('body').css('overflow', 'auto');
	});
});