let map;

let countries_lat_lon = {
    'China': {'lat': 35.0, 'lon': 105.0},
    'South Korea': {'lat': 37.0, 'lon': 127.5},
    'Italy': {'lat': 42.83, 'lon': 12.83},
    'Iran': {'lat': 32.0, 'lon': 53.0},
    'France': {'lat': 46.0, 'lon': 2.0},
    'Germany': {'lat': 51.0, 'lon': 9.0},
    'Spain': {'lat': 40.0, 'lon': -4.0},
    'Japan': {'lat': 36.0, 'lon': 138.0},
    'Switzerland': {'lat': 47.0, 'lon': 8.0},
    'United Kingdom': {'lat': 54.0, 'lon': -2.0},
    'Netherlands': {'lat': 52.5, 'lon': 5.75},
    'Belgium': {'lat': 50.83, 'lon': 4.0},
    'Sweden': {'lat': 62.0, 'lon': 15.0},
    'Norway': {'lat': 62.0, 'lon': 10.0},
    'Singapore': {'lat': 1.37, 'lon': 103.8},
    'Malaysia': {'lat': 2.5, 'lon': 112.5},
    'Bahrain': {'lat': 26.0, 'lon': 50.55},
    'Austria': {'lat': 47.33, 'lon': 13.33},
    'US': {'lat': 38.0, 'lon': -97.0},
    'Kuwait': {'lat': 29.34, 'lon': 47.66},
    'Iraq': {'lat': 33.0, 'lon': 44.0},
    'Iceland': {'lat': 65.0, 'lon': -18.0},
    'Thailand': {'lat': 15.0, 'lon': 100.0},
    'Greece': {'lat': 39.0, 'lon': 22.0},
    'Taiwan': {'lat': 23.5, 'lon': 121.0},
    'United Arab Emirates': {'lat': 24.0, 'lon': 54.0},
    'India': {'lat': 20.0, 'lon': 77.0},
    'Australia': {'lat': -27.0, 'lon': 133.0},
    'Canada': {'lat': 60.0, 'lon': -95.0},
    'Denmark': {'lat': 56.0, 'lon': 10.0},
    'San Marino': {'lat': 43.77, 'lon': 12.42},
    'Lebanon': {'lat': 33.83, 'lon': 35.83},
    'Palestine': {'lat': 32.0, 'lon': 35.25},
    'Israel': {'lat': 31.5, 'lon': 34.75},
    'Portugal': {'lat': 39.5, 'lon': -8.0},
    'Czech Republic': {'lat': 49.75, 'lon': 15.5},
    'Ireland': {'lat': 53.0, 'lon': -8.0},
    'Vietnam': {'lat': 16.0, 'lon': 106.0},
    'Algeria': {'lat': 28.0, 'lon': 3.0},
    'Oman': {'lat': 21.0, 'lon': 57.0},
    'Egypt': {'lat': 27.0, 'lon': 30.0},
    'Finland': {'lat': 64.0, 'lon': 26.0},
    'Brazil': {'lat': -10.0, 'lon': -55.0},
    'Ecuador': {'lat': -2.0, 'lon': -77.5},
    'Russia': {'lat': 60.0, 'lon': 100.0},
    'Croatia': {'lat': 45.17, 'lon': 15.5},
    'Estonia': {'lat': 59.0, 'lon': 26.0},
    'Azerbaijan': {'lat': 40.5, 'lon': 47.5},
    'Romania': {'lat': 46.0, 'lon': 25.0},
    'Argentina': {'lat': -34.0, 'lon': -64.0},
    'Qatar': {'lat': 25.5, 'lon': 51.25},
    'Slovenia': {'lat': 46.0, 'lon': 15.0},
    'Belarus': {'lat': 53.0, 'lon': 28.0},
    'Mexico': {'lat': 23.0, 'lon': -102.0},
    'Pakistan': {'lat': 30.0, 'lon': 70.0},
    'Philippines': {'lat': 13.0, 'lon': 122.0},
    'New Zealand': {'lat': -41.0, 'lon': 174.0},
    'Poland': {'lat': 52.0, 'lon': 20.0},
    'Saudi Arabia': {'lat': 25.0, 'lon': 45.0},
    'Chile': {'lat': -30.0, 'lon': -71.0},
    'Georgia': {'lat': 42.0, 'lon': 43.5},
    'Hungary': {'lat': 47.0, 'lon': 20.0},
    'Indonesia': {'lat': -5.0, 'lon': 120.0},
    'Senegal': {'lat': 14.0, 'lon': -14.0},
    'Bosnia and Herzegovina': {'lat': 44.0, 'lon': 18.0},
    'Malta': {'lat': 35.83, 'lon': 14.58},
    'Macedonia': {'lat': 41.83, 'lon': 22.0},
    'Dominican Republic': {'lat': 19.0, 'lon': -70.67},
    'Luxembourg': {'lat': 49.75, 'lon': 6.17},
    'Morocco': {'lat': 32.0, 'lon': -5.0},
    'Afghanistan': {'lat': 33.0, 'lon': 65.0},
    'Andorra': {'lat': 42.5, 'lon': 1.5},
    'Armenia': {'lat': 40.0, 'lon': 45.0},
    'Bhutan': {'lat': 27.5, 'lon': 90.5},
    'Cambodia': {'lat': 13.0, 'lon': 105.0},
    'Cameroon': {'lat': 6.0, 'lon': 12.0},
    'Colombia': {'lat': 4.0, 'lon': -72.0},
    'Costa Rica': {'lat': 10.0, 'lon': -84.0},
    'Jordan': {'lat': 31.0, 'lon': 36.0},
    'Latvia': {'lat': 57.0, 'lon': 25.0},
    'Liechtenstein': {'lat': 47.17, 'lon': 9.53},
    'Lithuania': {'lat': 56.0, 'lon': 24.0},
    'Monaco': {'lat': 43.73, 'lon': 7.4},
    'Nepal': {'lat': 28.0, 'lon': 84.0},
    'Nigeria': {'lat': 10.0, 'lon': 8.0},
    'Peru': {'lat': -10.0, 'lon': -76.0},
    'Serbia': {'lat': 44.0, 'lon': 21.0},
    'Slovakia': {'lat': 48.67, 'lon': 19.5},
    'South Africa': {'lat': -29.0, 'lon': 24.0},
    'Sri Lanka': {'lat': 7.0, 'lon': 81.0},
    'Togo': {'lat': 8.0, 'lon': 1.17},
    'Tunisia': {'lat': 34.0, 'lon': 9.0},
    'Ukraine': {'lat': 49.0, 'lon': 32.0},
    'Vatican City': {'lat': 41.9, 'lon': 12.45},
    'Bulgaria': {'lat': 43.0, 'lon': 25.0},
    'Maldives': {'lat': 3.25, 'lon': 73.0},
    'Moldova': {'lat': 47.0, 'lon': 29.0},
    'Bangladesh': {'lat': 24.0, 'lon': 90.0},
    'Paraguay': {'lat': -23.0, 'lon': -58.0},
    'Albania': {'lat': 41.0, 'lon': 20.0},
    'Cyprus': {'lat': 35.0, 'lon': 33.0},
    'Brunei': {'lat': 4.5, 'lon': 114.67},
    'Burkina Faso': {'lat': 13.0, 'lon': -2.0},
    'Mongolia': {'lat': 46.0, 'lon': 105.0},
    'Panama': {'lat': 9.0, 'lon': -80.0},
    'Bolivia': {'lat': -17.0, 'lon': -65.0},
    'Honduras': {'lat': 15.0, 'lon': -86.5},
    'Congo': {'lat': 0.0, 'lon': 25.0},
    "Cote d'Ivoire": {'lat': 8.0, 'lon': -5.0},
    'Jamaica': {'lat': 18.25, 'lon': -77.5},
    'Turkey': {'lat': 39.0, 'lon': 35.0},
    'Cuba': {'lat': 21.5, 'lon': -80.0},
    'Guyana': {'lat': 5.0, 'lon': -59.0},
    'Kazakhstan': {'lat': 48.0, 'lon': 68.0},
    'Ethiopia': {'lat': 8.0, 'lon': 38.0},
    'Sudan': {'lat': 15.0, 'lon': 30.0},
    'Guinea': {'lat': 11.0, 'lon': -10.0},
    'Antigua and Barbuda': {'lat': 17.05, 'lon': -61.8},
    'Kenya': {'lat': 1.0, 'lon': 38.0},
    'Uruguay': {'lat': -33.0, 'lon': -56.0},
    'Ghana': {'lat': 8.0, 'lon': -2.0},
    'Namibia': {'lat': -22.0, 'lon': 17.0},
    'Seychelles': {'lat': -4.58, 'lon': 55.67},
    'Trinidad and Tobago': {'lat': 11.0, 'lon': -61.0},
    'Venezuela': {'lat': 8.0, 'lon': -66.0},
    'Eswatini': {'lat': -26.51, 'lon': 31.46},
    'Gabon': {'lat': -1.0, 'lon': 11.75},
    'Guatemala': {'lat': 15.5, 'lon': -90.25},
    'Mauritania': {'lat': 20.0, 'lon': -12.0},
    'Rwanda': {'lat': -2.0, 'lon': 30.0},
    'Saint Lucia': {'lat': 13.88, 'lon': -61.13},
    'Saint Vincent and the Grenadines': {'lat': 13.25, 'lon': -61.2},
    'Suriname': {'lat': 4.0, 'lon': -56.0},
    'Kosovo': {'lat': 42.66, 'lon': 21.16},
    'Central African Republic': {'lat': 7.0, 'lon': 21.0},
    'Equatorial Guinea': {'lat': 2.0, 'lon': 10.0},
    'Uzbekistan': {'lat': 41.0, 'lon': 64.0},
    'Benin': {'lat': 9.5, 'lon': 2.25},
    'Liberia': {'lat': 6.5, 'lon': -9.5},
    'Somalia': {'lat': 10.0, 'lon': 49.0},
    'Tanzania': {'lat': -6.0, 'lon': 35.0},
    'Bahamas': {'lat': 24.25, 'lon': -76.0},
    'Gambia': {'lat': 13.47, 'lon': -16.57},
    'Western Sahara': {'lat': 24.5, 'lon': -13.0},
    'Barbados': {'lat': 13.17, 'lon': -59.53},
    'Montenegro': {'lat': 42.0, 'lon': 19.0},
    'Kyrgyzstan': {'lat': 41.0, 'lon': 75.0},
    'Mauritius': {'lat': -20.28, 'lon': 57.55},
    'Zambia': {'lat': -15.0, 'lon': 30.0},
    'Djibouti': {'lat': 11.5, 'lon': 43.0},
    'Chad': {'lat': 15.0, 'lon': 19.0},
    'El Salvador': {'lat': 13.83, 'lon': -88.92},
    'Fiji': {'lat': -18.0, 'lon': 175.0},
    'Nicaragua': {'lat': 13.0, 'lon': -85.0},
    'Madagascar': {'lat': -20.0, 'lon': 47.0},
    'Haiti': {'lat': 19.0, 'lon': -72.42},
    'Angola': {'lat': -12.5, 'lon': 18.5},
    'Cape Verde': {'lat': 16.0, 'lon': -24.0},
    'Niger': {'lat': 16.0, 'lon': 8.0},
    'Papua New Guinea': {'lat': -6.0, 'lon': 147.0},
    'Zimbabwe': {'lat': -20.0, 'lon': 30.0},
    'Timor-Leste': {'lat': -8.55, 'lon': 125.56},
    'Eritrea': {'lat': 15.0, 'lon': 39.0},
    'Uganda': {'lat': 1.0, 'lon': 32.0},
    'Dominica': {'lat': 15.42, 'lon': -61.33},
    'Grenada': {'lat': 12.12, 'lon': -61.67},
    'Mozambique': {'lat': -18.25, 'lon': 35.0},
    'Syria': {'lat': 35.0, 'lon': 38.0},
    'Belize': {'lat': 17.25, 'lon': -88.75},
    'Laos': {'lat': 18.0, 'lon': 105.0},
    'Libya': {'lat': 25.0, 'lon': 17.0},
    'Guinea-Bissau': {'lat': 12.0, 'lon': -15.0},
    'Mali': {'lat': 17.0, 'lon': -4.0},
    'Saint Kitts and Nevis': {'lat': 17.33, 'lon': -62.75},
    'Burma': {'lat': 16.87, 'lon': 96.19},
    'Botswana': {'lat': -22.0, 'lon': 24.0},
    'Burundi': {'lat': -3.5, 'lon': 30.0},
    'Sierra Leone': {'lat': 8.5, 'lon': -11.5},
    'Malawi': {'lat': -13.5, 'lon': 34.0},
    'South Sudan': {'lat': 4.85, 'lon': 31.57},
    'Sao Tome and Principe': {'lat': 0.25, 'lon': 6.60},
    'Yemen': {'lat': 15.0, 'lon': 48.0}
};

let infoWindow;

let graphIndex;

let places = ["all_cases", "marker", "death_recover_rate"];

let image;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(0, 0),
        zoom: 2
    });

    infoWindow = new google.maps.InfoWindow();

    for (let country in countries_lat_lon) {
        let icon = {
            url: `../images/world/marker/${country.toLowerCase().replace(/ /g, "_")}_plot.png`,
            anchor: new google.maps.Point(50, 25),
            scaledSize: new google.maps.Size(100, 100)
        };

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(countries_lat_lon[country]["lat"], countries_lat_lon[country]["lon"]),
            map: map,
            draggable: false,
            icon: icon,
            zIndex: 0,
            title: country
        });

        marker.addListener('click', function () {
            graphIndex = 0;
            let id = country.toLowerCase().replace(' ', '-').replace(`'`, '');
            let countryName = country.toLowerCase().replace(/ /g, "_");
            let src = `../images/world/${places[graphIndex]}/${countryName}_plot.png`;
            let message = `
<a href="#" class="next-prev" onclick="changePlot(-1, '${id}', '${countryName}')">&#8249;</a>
<img id="${id}" src="${src}" onclick="imageClicked('${id}')" alt="${country} daily bar graph" width="320" height="240"/>
<a href="#" class="next-prev" onclick="changePlot(1, '${id}', '${countryName}')">&#8250;</a>
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

function changePlot(direction, id, country) {
    if (Number(direction) > 0) {
        if (graphIndex === places.length-1) {
            graphIndex = 0;
        } else {
            graphIndex++;
        }
    } else {
        if (graphIndex === 0) {
            graphIndex = places.length - 1;
        } else {
            graphIndex--;
        }
    }

    image = document.getElementById(id);
    image.src = `../images/world/${places[graphIndex]}/${country}_plot.png`;
}

