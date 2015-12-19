
var key = "AIzaSyBB0LqEDu_Hfe6n5zUxkAGYe7thS7NsgWE";

/// Google Map Vars
var map;
var marker;
var mapZoomLevel;

/// Config for the app setup
config = {
  initialLat: 51.75,
  initialLon: -3.38,
  mapZoomLevel: 10
}

/// App
GoogleMaps = React.createClass({
  getInitialState() {
    return {
      coords: {
        lat: 8.9539806,
        lon: 76.3249756
      },
    }
  },

  map: null,
  marker: null,
  infoWindow: null,

  render(){
    var style = {
      height: this.props.height
    };

    // this.geoLocation();
    return(
      <div className="GMap">
        <div ref="map_canvas" style={style} >
        </div>
      </div>
    )
  },

  componentDidMount() {
    if (this.props.geo) {
      this.setCurrentGeoLocation();
    } else {
      this.map = this.createMap(this.props.lat, this.props.lon);
      this.marker = this.createMarker(this.props.lat, this.props.lon);
      // this.infoWindow = this.createInfoWindow();
      this.loadMap();

    }
  },

  componentDidUpdate() {
  },

  createMap(lat, lon) {
    var coords, mapOptions;
    coords = this.props.coords;
    mapOptions = {
      minZoom: 2,
      zoom: 15,
      center: new google.maps.LatLng(lat, lon)
    };
    return new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas), mapOptions);
  },


  createMarker(lat, lon) {
    var marker;
    return marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lon),
      map: this.map
    });
  },
  createInfoWindow() {
    var contentString, infoWindow;
    contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>";
    return infoWindow = new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      // content: contentString
    });
  },
  addMarker(latlong) {
    //console.log(latlong);
    var marker = new google.maps.Marker({
        position: latlong,
        map: this.map
    });

  },

  loadMap() {
    var self = this;
    google.maps.event.addListener(this.map, 'zoom_changed', function() {
      return function() {
        return self.handleZoomChange();
      };
    });
    google.maps.event.addListener(this.map, 'click', function(e) {
      self.addMarker(e.latLng);
    });

    return google.maps.event.addListener(this.map, 'dragend', function() {
      return function() {
        return self.handleDragEnd();
      };
    });
  },
  handleZoomChange() {},
  handleDragEnd() {
    console.log("dragged");

  },
  setCurrentGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.props.myLocation(position);
          this.map = this.createMap(position.coords.latitude, position.coords.longitude);
          this.marker = this.createMarker(position.coords.latitude, position.coords.longitude);
          // this.infoWindow = this.createInfoWindow();
          this.loadMap();

        }.bind(this));

    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  },
});
