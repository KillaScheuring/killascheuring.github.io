let map;

let state_lat_lon = {
    "Alaska": {
        "lat": 61.3850,
        "lon": -152.2683
    },
    "Alabama": {
        "lat": 32.7990,
        "lon": -86.8073
    },
    "Arkansas": {
        "lat": 34.9513,
        "lon": -92.3809
    },
    "Arizona": {
        "lat": 33.7712,
        "lon": -111.3877
    },
    "California": {
        "lat": 36.1700,
        "lon": -119.7462
    },
    "Colorado": {
        "lat": 39.0646,
        "lon": -105.3272
    },
    "Connecticut": {
        "lat": 41.5834,
        "lon": -72.7622
    },
    "Delaware": {
        "lat": 39.3498,
        "lon": -75.5148
    },
    "Florida": {
        "lat": 27.8333,
        "lon": -81.7170
    },
    "Georgia": {
        "lat": 32.9866,
        "lon": -83.6487
    },
    "Hawaii": {
        "lat": 21.1098,
        "lon": -157.5311
    },
    "Iowa": {
        "lat": 42.0046,
        "lon": -93.2140
    },
    "Idaho": {
        "lat": 44.2394,
        "lon": -114.5103
    },
    "Illinois": {
        "lat": 40.3363,
        "lon": -89.0022
    },
    "Indiana": {
        "lat": 39.8647,
        "lon": -86.2604
    },
    "Kansas": {
        "state": "Kansas",
        "lat": 38.5111,
        "lon": -96.8005
    },
    "Kentucky": {
        "lat": 37.6690,
        "lon": -84.6514
    },
    "Louisiana": {
        "lat": 31.1801,
        "lon": -91.8749
    },
    "Massachusetts": {
        "lat": 42.2373,
        "lon": -71.5314
    },
    "Maryland": {
        "lat": 39.0724,
        "lon": -76.7902
    },
    "Maine": {
        "lat": 44.6074,
        "lon": -69.3977
    },
    "Michigan": {
        "lat": 43.3504,
        "lon": -84.5603
    },
    "Minnesota": {
        "lat": 45.7326,
        "lon": -93.9196
    },
    "Missouri": {
        "lat": 38.4623,
        "lon": -92.3020
    },
    "Mississippi": {
        "lat": 32.7673,
        "lon": -89.6812
    },
    "Montana": {
        "lat": 46.9048,
        "lon": -110.3261
    },
    "North Carolina": {
        "lat": 35.6411,
        "lon": -79.8431
    },
    "North Dakota": {
        "lat": 47.5362,
        "lon": -99.7930
    },
    "Nebraska": {
        "lat": 41.1289,
        "lon": -98.2883
    },
    "New Hampshire": {
        "lat": 43.4108,
        "lon": -71.5653
    },
    "New Jersey": {
        "lat": 40.3140,
        "lon": -74.5089
    },
    "New Mexico": {
        "lat": 34.8375,
        "lon": -106.2371
    },
    "Nevada": {
        "lat": 38.4199,
        "lon": -117.1219
    },
    "New York": {
        "lat": 42.1497,
        "lon": -74.9384
    },
    "Ohio": {
        "lat": 40.3736,
        "lon": -82.7755
    },
    "Oklahoma": {
        "lat": 35.5376,
        "lon": -96.9247
    },
    "Oregon": {
        "lat": 44.5672,
        "lon": -122.1269
    },
    "Pennsylvania": {
        "lat": 40.5773,
        "lon": -77.2640
    },
    "Rhode Island": {
        "lat": 41.6772,
        "lon": -71.5101
    },
    "South Carolina": {
        "lat": 33.8191,
        "lon": -80.9066
    },
    "South Dakota": {
        "lat": 44.2853,
        "lon": -99.4632
    },
    "Tennessee": {
        "lat": 35.7449,
        "lon": -86.7489
    },
    "Texas": {
        "lat": 31.1060,
        "lon": -97.6475
    },
    "Utah": {
        "lat": 40.1135,
        "lon": -111.8535
    },
    "Virginia": {
        "lat": 37.7680,
        "lon": -78.2057
    },
    "Vermont": {
        "lat": 44.0407,
        "lon": -72.7093
    },
    "Washington": {
        "lat": 47.3917,
        "lon": -121.5708
    },
    "Wisconsin": {
        "lat": 44.2563,
        "lon": -89.6385
    },
    "West Virginia": {
        "lat": 38.4680,
        "lon": -80.9696
    },
    "Wyoming": {
        "lat": 42.7475,
        "lon": -107.2085
    },
    "American Samoa": {
        "lat": -14.275632,
        "lon": -170.702042
    },
    "District Of Columbia": {
        "lat": 38.895,
        "lon": -77.0366
    },
    "Northern Mariana Islands": {
        "lat": 15.106389,
        "lon": 145.706524,
    },
    "Virgin Islands": {
        "lat": 18.3434,
        "lon": -64.8672
    }
};

let infoWindow;

let graphIndex;

let places = ["all_cases", "marker", "death_recover_rate", "active_cases", "active_rate"];

let image;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(38.0, -97.0),
        zoom: 3
    });

    infoWindow = new google.maps.InfoWindow();

    for (let state in state_lat_lon) {
        let icon = {
            url: `../images/us/marker/${state.toLowerCase().replace(/ /g, "_")}_plot.png`,
            anchor: new google.maps.Point(50, 25),
            scaledSize: new google.maps.Size(100, 100)
        };

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(state_lat_lon[state]["lat"], state_lat_lon[state]["lon"]),
            map: map,
            draggable: false,
            icon: icon,
            zIndex: 0,
            title: state
        });

        marker.addListener('click', function () {
            graphIndex = 0;
            let id = state.toLowerCase().replace(' ', '-').replace(`'`, '');
            let stateName = state.toLowerCase().replace(/ /g, "_");
            let src = `../images/us/${places[graphIndex]}/${stateName}_plot.png`;
            let message = `
<a href="#" class="next-prev" onclick="changePlot(-1, '${id}', '${stateName}')">&#8249;</a>
<img id="${id}" src="${src}" onclick="imageClicked('${id}')" alt="${state} daily bar graph" width="320" height="240"/>
<a href="#" class="next-prev" onclick="changePlot(1, '${id}', '${stateName}')">&#8250;</a>
            `;
            infoWindow.setContent(message);
            infoWindow.open(map, this);
        });
    }
}

function imageClicked(id) {
    image = document.getElementById(id);
    image.width = image.width === 640 ? "320" : "640";
    image.height = image.height === 480 ? "240" : "480";
}

function changePlot(direction, id, state) {
    if (direction > 0) {
        graphIndex++;
        if (graphIndex === places.length) {
            graphIndex = 0;
        }
    } else {
        graphIndex--;
        if (graphIndex === 0) {
            graphIndex = places.length - 1;
        }
    }

    image = document.getElementById(id);
    image.src = `../images/us/${places[graphIndex]}/${state}_plot.png`;
}

