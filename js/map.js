// $(document).ready(function(){
	function initMap() {

		var myLatlng = new google.maps.LatLng(25.469813, -80.4799);

		var mapOptions = {
			center: myLatlng,
			zoom: 17,
			scrollwheel: false,
			draggable: false
		};

		// Create a map object and specify the DOM element for display.
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP
		});
	}
// });