
var monthly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

var map;


$(document).ready(function(){
 
 //Show me the map
 	var myLatLng = {lat: 10.78, lng: -30};
	 map = new google.maps.Map(document.getElementById('map'), {
	    center: myLatLng,
	    zoom: 2
	  });

	 // Create a <script> tag and set the USGS URL as the source.
	   var script = document.createElement('script');

	   script.src = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';
	    document.getElementsByTagName('head')[0].appendChild(script);


	$.get(script, function(data) {
		var features = data.features;

		features.forEach(function(element) {
			//Show me the title
			var title = element.properties.title;

			// show me the date when it happened
			var time = element.properties.time;
			var date = new Date(time);

			// show me the magnitude 
			var mag = element.properties.mag;

			// show me the location
			var location = element.properties.place;

			// append data to html
			$("#info").append("<p><span>" + mag + "</span>" + " quake on " + date , "<p class='loc'>" + location + "</p><hr>");
 		
			//Show me the coordinates
 			var narrowGeo = element.geometry;
 			var narrowCoo = narrowGeo["coordinates"];
 			var coordinates = {lat: narrowCoo[1], lng: narrowCoo[0]};
 		 			
			// assign markers to coordinates
			var marker = new google.maps.Marker({
			  position: coordinates,
			  map: map,
			  title: title
			}); 
			//render the marker
			marker.setMap(map);
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



