var HTMLheaderName = '<h2 id="name">%data%</h2>';
var HTMLheaderRole = '<h4>%data%</h4>';

var HTMLcontactGeneric = '<li class="flex-item"><span>%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="icon icon-phone"></span><a class="tel">%data%</a></li>';
var HTMLemail = '<li class="flex-item"><span class="icon icon-envelope"></span><a class="email">%data%</a></li>';
var HTMLtwitter = '<li class="flex-item"><span class="icon icon-twitter"></span><a class="twitter">%data%</a></li>';
var HTMLgithub = '<li class="flex-item"><span class="icon icon-github"></span><a class="github">%data%</a></li>';
var HTMLblog = '<li class="flex-item"><span class="">blog</span><span class="blog">%data%</span></li>';
var HTMLlocation = '<p class="location">%data%</p>';

var HTMLbioPic = '<img src="%data%" class="biopic center-block img-responsive img-circle">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h4 id="skills-title">Skills at a Glance:</h4><ul id="skills" class="flex-box list-unstyled"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<p class="title-text">%data%';
var HTMLworkTitle = ' - %data%</p>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="row"><div class="project-entry col-xs-12"></div></div>';
var HTMLprojectTitle = '<p class="title-text">%data%</p>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<div class="project-images col-sm-6"><img src="%data%" class="img-responsive img-thumbnail center-block"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="title-text">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="major-text">Major: <em>%data%</em></div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a class="title-text">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a class="url-text" href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
Google Maps code, unchanged from the course material
*/
var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];

    locations.push(bio.contacts.location);

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);

      locations.forEach(function(place){
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
 map.fitBounds(mapBounds);
});
