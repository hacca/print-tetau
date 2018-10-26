function initialize() {

//マップの中心座標
var myLatLng = new google.maps.LatLng(33.732521, 135.377703);

//マップの設定オプション
var myOptions = {
	zoom: 16,
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
	position:new google.maps.LatLng(33.732521, 135.377703),
	map:map,
	animation: google.maps.Animation.DROP
};
var marker=new google.maps.Marker(obj);

var haccastyle = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#61a744"
            },
            {
                "saturation": "100"
            },
            {
                "lightness": "3"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#61a744"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#61a744"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    }
];
	var styledMapOptions = {name: "地図"};
	var haccaMapType = new google.maps.StyledMapType(haccastyle, styledMapOptions);
	map.mapTypes.set('simple', haccaMapType);
	map.setMapTypeId('simple');
}
