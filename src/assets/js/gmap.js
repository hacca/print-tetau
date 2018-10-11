function initialize() {

//マップの中心座標
var myLatLng = new google.maps.LatLng(33.803186, 135.427539);

//マップの設定オプション
var myOptions = {
	zoom: 15,
	center: myLatLng,
	disableDefaultUI: true,
	disableDoubleClickZoom: false,
	mapTypeControl: true,
	scrollwheel: false,
	draggable: false,
	zoomControl: true,
	zoomControlOptions: {
		style: google.maps.ZoomControlStyle.DEFAULT,
		position: google.maps.ControlPosition.LEFT_BOTTOM
	},
	mapTypeId: google.maps.MapTypeId.TERRAIN,
	mapTypeControlOptions: {
		mapTypeIds: [
			//google.maps.MapTypeId.ROADMAP
			]
		}
	};

//マップの表示ID
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//マーカーの設定オプション
var obj={
	position:new google.maps.LatLng(33.803186, 135.427539),
	map:map,
	animation: google.maps.Animation.DROP
};
var marker=new google.maps.Marker(obj);

var haccastyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "color": "#808080"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "gamma": 9.99
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": 0.01
            },
            {
                "invert_lightness": true
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": 0.01
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "gamma": 0.01
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "gamma": 0.01
            },
            {
                "weight": 2.6
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#808080"
            },
            {
                "weight": 0.4
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#808080"
            },
            {
                "lightness": 26
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "visibility": "on"
            },
            {
                "gamma": 9.99
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 0.01
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            }
        ]
    }
]
;
	var styledMapOptions = {name: "地図"};
	var haccaMapType = new google.maps.StyledMapType(haccastyle, styledMapOptions);
	map.mapTypes.set('simple', haccaMapType);
	map.setMapTypeId('simple');
}
