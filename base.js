
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

var map;


$(document).ready(function(){
 
 //Show me the map!
	 map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.78, lng: -122.44},
	    zoom: 8
	  });

 //Show me the title
	$.get(weekly_quakes_endpoint, function(data) {
		var location = data.features;
		location.forEach(function(element) {
			var title = element.properties.title;
			$("#info").append("<p>" + title + "</p>");
		});
	});




 //Show me the coordinates
 	$.get(weekly_quakes_endpoint, function(data) {
 		var narrowFeatures = data.features;

 		narrowFeatures.forEach(function(element) {
 			var narrowGeo = element.geometry;
 			var narrowCoo = narrowGeo["coordinates"];
 			var lon = narrowCoo[0];
 			var lat = narrowCoo[1];
 		 			
 			// show me the first coordinates in the map as a marker

 			new google.maps.Marker({
 				position: new google.maps.LatLng(lat, lon),
 				map: map,
 				title: "Earthquakes!"
 			})

			});

	});


});





/*






Pseudo code: 
-When the document is ready 
	-render the map
		-request the data
			- when the data is back 
				-render the info
				-render the map markers

-when the map is ready
	-bind the click listener
		-when the respond element is clicked
			-respond!


			*/



