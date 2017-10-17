function geolocationClass () {}

geolocationClass.prototype.location_id = "";
geolocationClass.prototype.latitude = "";
geolocationClass.prototype.longitude = "";
geolocationClass.prototype.city = "";
geolocationClass.prototype.province = "";
geolocationClass.prototype.accuracy = 40000;
geolocationClass.prototype.altitude = "";
geolocationClass.prototype.altitudeAccuracy = "";
geolocationClass.prototype.heading = "";
geolocationClass.prototype.speed = "";
geolocationClass.prototype.locked = false;
geolocationClass.prototype.error = "";

geolocationClass.prototype.create = function() {
	
	if ("geolocation" in navigator) {
	
		/* geolocation is available */
		console.log("Geolocation is available");

		this.success = function(position) {
			
			// console.log(position);

			geolocationClass.prototype.accuracy = position.coords.accuracy;
			geolocationClass.prototype.altitude = position.coords.altitude;
			geolocationClass.prototype.altitudeAccuracy = position.coords.altitudeAccuracy;
			geolocationClass.prototype.heading = position.coords.heading;
			geolocationClass.prototype.latitude = position.coords.latitude;
			geolocationClass.prototype.longitude = position.coords.longitude;
			geolocationClass.prototype.speed = position.coords.speed;

		};

		this.failure = function (error) {
			console.log(error);
			geolocationClass.prototype.error = error;
		};

		this.options = {
			enableHighAccuracy: true
		};

		geolocationClass.prototype.location_id = navigator.geolocation.getCurrentPosition(this.success, this.failure, this.options);
	
	} else {
	
		/* geolocation IS NOT available */
		console.log("Geolocation is not available");

	}

}

var geolocation = new geolocationClass;
geolocation.create();

console.log(geolocation);