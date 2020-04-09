let map;

let countries_lat_lon = {
    'Afghanistan': {
        'lat': 33.0,
        'lon': 65.0,
        'url': '../images/polar_graphs/afghanistan_plot.svg'
    },
    'Albania': {
        'lat': 41.0,
        'lon': 20.0,
        'url': '../images/polar_graphs/albania_plot.svg'
    },
    'Algeria': {
        'lat': 28.0,
        'lon': 3.0,
        'url': '../images/polar_graphs/algeria_plot.svg'
    },
    'American Samoa': {
        'lat': -14.33,
        'lon': -170.0,
        'url': '../images/polar_graphs/american_samoa_plot.svg'
    },
    'Andorra': {'lat': 42.5, 'lon': 1.5, 'url': '../images/polar_graphs/andorra_plot.svg'},
    'Angola': {'lat': -12.5, 'lon': 18.5, 'url': '../images/polar_graphs/angola_plot.svg'},
    'Anguilla': {
        'lat': 18.25,
        'lon': -63.17,
        'url': '../images/polar_graphs/anguilla_plot.svg'
    },
    'Antarctica': {
        'lat': -90.0,
        'lon': 0.0,
        'url': '../images/polar_graphs/antarctica_plot.svg'
    },
    'Antigua and Barbuda': {
        'lat': 17.05,
        'lon': -61.8,
        'url': '../images/polar_graphs/antigua_and_barbuda_plot.svg'
    },
    'Argentina': {
        'lat': -34.0,
        'lon': -64.0,
        'url': '../images/polar_graphs/argentina_plot.svg'
    },
    'Armenia': {
        'lat': 40.0,
        'lon': 45.0,
        'url': '../images/polar_graphs/armenia_plot.svg'
    },
    'Aruba': {
        'lat': 12.5,
        'lon': -69.97,
        'url': '../images/polar_graphs/aruba_plot.svg'
    },
    'Asia/Pacific Region': {
        'lat': 35.0,
        'lon': 105.0,
        'url': '../images/polar_graphs/asia/pacific_region_plot.svg'
    },
    'Australia': {
        'lat': -27.0,
        'lon': 133.0,
        'url': '../images/polar_graphs/australia_plot.svg'
    },
    'Austria': {
        'lat': 47.33,
        'lon': 13.33,
        'url': '../images/polar_graphs/austria_plot.svg'
    },
    'Azerbaijan': {
        'lat': 40.5,
        'lon': 47.5,
        'url': '../images/polar_graphs/azerbaijan_plot.svg'
    },
    'Bahamas': {
        'lat': 24.25,
        'lon': -76.0,
        'url': '../images/polar_graphs/bahamas_plot.svg'
    },
    'Bahrain': {
        'lat': 26.0,
        'lon': 50.55,
        'url': '../images/polar_graphs/bahrain_plot.svg'
    },
    'Bangladesh': {
        'lat': 24.0,
        'lon': 90.0,
        'url': '../images/polar_graphs/bangladesh_plot.svg'
    },
    'Barbados': {
        'lat': 13.17,
        'lon': -59.53,
        'url': '../images/polar_graphs/barbados_plot.svg'
    },
    'Belarus': {
        'lat': 53.0,
        'lon': 28.0,
        'url': '../images/polar_graphs/belarus_plot.svg'
    },
    'Belgium': {
        'lat': 50.83,
        'lon': 4.0,
        'url': '../images/polar_graphs/belgium_plot.svg'
    },
    'Belize': {
        'lat': 17.25,
        'lon': -88.75,
        'url': '../images/polar_graphs/belize_plot.svg'
    },
    'Benin': {'lat': 9.5, 'lon': 2.25, 'url': '../images/polar_graphs/benin_plot.svg'},
    'Bermuda': {
        'lat': 32.33,
        'lon': -64.75,
        'url': '../images/polar_graphs/bermuda_plot.svg'
    },
    'Bhutan': {'lat': 27.5, 'lon': 90.5, 'url': '../images/polar_graphs/bhutan_plot.svg'},
    'Bolivia': {
        'lat': -17.0,
        'lon': -65.0,
        'url': '../images/polar_graphs/bolivia_plot.svg'
    },
    'Bosnia and Herzegovina': {
        'lat': 44.0,
        'lon': 18.0,
        'url': '../images/polar_graphs/bosnia_and_herzegovina_plot.svg'
    },
    'Botswana': {
        'lat': -22.0,
        'lon': 24.0,
        'url': '../images/polar_graphs/botswana_plot.svg'
    },
    'Bouvet Island': {
        'lat': -54.43,
        'lon': 3.4,
        'url': '../images/polar_graphs/bouvet_island_plot.svg'
    },
    'Brazil': {
        'lat': -10.0,
        'lon': -55.0,
        'url': '../images/polar_graphs/brazil_plot.svg'
    },
    'British Indian Ocean Territory': {
        'lat': -6.0,
        'lon': 71.5,
        'url': '../images/polar_graphs/british_indian_ocean_territory_plot.svg'
    },
    'Brunei': {
        'lat': 4.5,
        'lon': 114.67,
        'url': '../images/polar_graphs/brunei_plot.svg'
    },
    'Bulgaria': {
        'lat': 43.0,
        'lon': 25.0,
        'url': '../images/polar_graphs/bulgaria_plot.svg'
    },
    'Burkina Faso': {
        'lat': 13.0,
        'lon': -2.0,
        'url': '../images/polar_graphs/burkina_faso_plot.svg'
    },
    'Burundi': {
        'lat': -3.5,
        'lon': 30.0,
        'url': '../images/polar_graphs/burundi_plot.svg'
    },
    'Cambodia': {
        'lat': 13.0,
        'lon': 105.0,
        'url': '../images/polar_graphs/cambodia_plot.svg'
    },
    'Cameroon': {
        'lat': 6.0,
        'lon': 12.0,
        'url': '../images/polar_graphs/cameroon_plot.svg'
    },
    'Canada': {'lat': 60.0, 'lon': -95.0, 'url': '../images/polar_graphs/canada_plot.svg'},
    'Cape Verde': {
        'lat': 16.0,
        'lon': -24.0,
        'url': '../images/polar_graphs/cape_verde_plot.svg'
    },
    'Cayman Islands': {
        'lat': 19.5,
        'lon': -80.5,
        'url': '../images/polar_graphs/cayman_islands_plot.svg'
    },
    'Central African Republic': {
        'lat': 7.0,
        'lon': 21.0,
        'url': '../images/polar_graphs/central_african_republic_plot.svg'
    },
    'Chad': {'lat': 15.0, 'lon': 19.0, 'url': '../images/polar_graphs/chad_plot.svg'},
    'Chile': {'lat': -30.0, 'lon': -71.0, 'url': '../images/polar_graphs/chile_plot.svg'},
    'China': {'lat': 35.0, 'lon': 105.0, 'url': '../images/polar_graphs/china_plot.svg'},
    'Christmas Island': {
        'lat': -10.5,
        'lon': 105.67,
        'url': '../images/polar_graphs/christmas_island_plot.svg'
    },
    'Cocos (Keeling) Islands': {
        'lat': -12.5,
        'lon': 96.83,
        'url': '../images/polar_graphs/cocos_(keeling)_islands_plot.svg'
    },
    'Colombia': {
        'lat': 4.0,
        'lon': -72.0,
        'url': '../images/polar_graphs/colombia_plot.svg'
    },
    'Comoros': {
        'lat': -12.17,
        'lon': 44.25,
        'url': '../images/polar_graphs/comoros_plot.svg'
    },
    'Congo (Brazzaville)': {'lat': -1.0, 'lon': 15.0, 'url': '../images/polar_graphs/congo_(brazzaville)_plot.svg'},
    'The Republic of the Congo': {
        'lat': 0.0,
        'lon': 25.0,
        'url': '../images/polar_graphs/republic_of_the_congo_plot.svg'
    },
    'Cook Islands': {
        'lat': -21.23,
        'lon': -159.77,
        'url': '../images/polar_graphs/cook_islands_plot.svg'
    },
    'Costa Rica': {
        'lat': 10.0,
        'lon': -84.0,
        'url': '../images/polar_graphs/costa_rica_plot.svg'
    },
    "Cote d'Ivoire": {
        'lat': 8.0,
        'lon': -5.0,
        'url': "../images/polar_graphs/cote_d'ivoire_plot.svg"
    },
    'Croatia': {
        'lat': 45.17,
        'lon': 15.5,
        'url': '../images/polar_graphs/croatia_plot.svg'
    },
    'Cuba': {'lat': 21.5, 'lon': -80.0, 'url': '../images/polar_graphs/cuba_plot.svg'},
    'Cyprus': {'lat': 35.0, 'lon': 33.0, 'url': '../images/polar_graphs/cyprus_plot.svg'},
    'Czech Republic': {
        'lat': 49.75,
        'lon': 15.5,
        'url': '../images/polar_graphs/czech_republic_plot.svg'
    },
    'Denmark': {
        'lat': 56.0,
        'lon': 10.0,
        'url': '../images/polar_graphs/denmark_plot.svg'
    },
    'Djibouti': {
        'lat': 11.5,
        'lon': 43.0,
        'url': '../images/polar_graphs/djibouti_plot.svg'
    },
    'Dominica': {
        'lat': 15.42,
        'lon': -61.33,
        'url': '../images/polar_graphs/dominica_plot.svg'
    },
    'Dominican Republic': {
        'lat': 19.0,
        'lon': -70.67,
        'url': '../images/polar_graphs/dominican_republic_plot.svg'
    },
    'Ecuador': {
        'lat': -2.0,
        'lon': -77.5,
        'url': '../images/polar_graphs/ecuador_plot.svg'
    },
    'Egypt': {'lat': 27.0, 'lon': 30.0, 'url': '../images/polar_graphs/egypt_plot.svg'},
    'El Salvador': {
        'lat': 13.83,
        'lon': -88.92,
        'url': '../images/polar_graphs/el_salvador_plot.svg'
    },
    'Equatorial Guinea': {
        'lat': 2.0,
        'lon': 10.0,
        'url': '../images/polar_graphs/equatorial_guinea_plot.svg'
    },
    'Eritrea': {
        'lat': 15.0,
        'lon': 39.0,
        'url': '../images/polar_graphs/eritrea_plot.svg'
    },
    'Estonia': {
        'lat': 59.0,
        'lon': 26.0,
        'url': '../images/polar_graphs/estonia_plot.svg'
    },
    'Ethiopia': {
        'lat': 8.0,
        'lon': 38.0,
        'url': '../images/polar_graphs/ethiopia_plot.svg'
    },
    'Europe': {'lat': 47.0, 'lon': 8.0, 'url': '../images/polar_graphs/europe_plot.svg'},
    'Falkland Islands (Malvinas)': {
        'lat': -51.75,
        'lon': -59.0,
        'url': '../images/polar_graphs/falkland_islands_(malvinas)_plot.svg'
    },
    'Faroe Islands': {
        'lat': 62.0,
        'lon': -7.0,
        'url': '../images/polar_graphs/faroe_islands_plot.svg'
    },
    'Fiji': {'lat': -18.0, 'lon': 175.0, 'url': '../images/polar_graphs/fiji_plot.svg'},
    'Finland': {
        'lat': 64.0,
        'lon': 26.0,
        'url': '../images/polar_graphs/finland_plot.svg'
    },
    'France': {'lat': 46.0, 'lon': 2.0, 'url': '../images/polar_graphs/france_plot.svg'},
    'French Guiana': {
        'lat': 4.0,
        'lon': -53.0,
        'url': '../images/polar_graphs/french_guiana_plot.svg'
    },
    'French Polynesia': {
        'lat': -15.0,
        'lon': -140.0,
        'url': '../images/polar_graphs/french_polynesia_plot.svg'
    },
    'French Southern Territories': {
        'lat': -43.0,
        'lon': 67.0,
        'url': '../images/polar_graphs/french_southern_territories_plot.svg'
    },
    'Gabon': {'lat': -1.0, 'lon': 11.75, 'url': '../images/polar_graphs/gabon_plot.svg'},
    'Gambia': {
        'lat': 13.47,
        'lon': -16.57,
        'url': '../images/polar_graphs/gambia_plot.svg'
    },
    'Georgia': {
        'lat': 42.0,
        'lon': 43.5,
        'url': '../images/polar_graphs/georgia_plot.svg'
    },
    'Germany': {'lat': 51.0, 'lon': 9.0, 'url': '../images/polar_graphs/germany_plot.svg'},
    'Ghana': {'lat': 8.0, 'lon': -2.0, 'url': '../images/polar_graphs/ghana_plot.svg'},
    'Gibraltar': {
        'lat': 36.18,
        'lon': -5.37,
        'url': '../images/polar_graphs/gibraltar_plot.svg'
    },
    'Greece': {'lat': 39.0, 'lon': 22.0, 'url': '../images/polar_graphs/greece_plot.svg'},
    'Greenland': {
        'lat': 72.0,
        'lon': -40.0,
        'url': '../images/polar_graphs/greenland_plot.svg'
    },
    'Grenada': {
        'lat': 12.12,
        'lon': -61.67,
        'url': '../images/polar_graphs/grenada_plot.svg'
    },
    'Guadeloupe': {
        'lat': 16.25,
        'lon': -61.58,
        'url': '../images/polar_graphs/guadeloupe_plot.svg'
    },
    'Guam': {'lat': 13.47, 'lon': 144.78, 'url': '../images/polar_graphs/guam_plot.svg'},
    'Guatemala': {
        'lat': 15.5,
        'lon': -90.25,
        'url': '../images/polar_graphs/guatemala_plot.svg'
    },
    'Guinea': {'lat': 11.0, 'lon': -10.0, 'url': '../images/polar_graphs/guinea_plot.svg'},
    'Guinea-Bissau': {
        'lat': 12.0,
        'lon': -15.0,
        'url': '../images/polar_graphs/guinea-bissau_plot.svg'
    },
    'Guyana': {'lat': 5.0, 'lon': -59.0, 'url': '../images/polar_graphs/guyana_plot.svg'},
    'Haiti': {'lat': 19.0, 'lon': -72.42, 'url': '../images/polar_graphs/haiti_plot.svg'},
    'Heard Island and McDonald Islands': {
        'lat': -53.1,
        'lon': 72.52,
        'url': '../images/polar_graphs/heard_island_and_mcdonald_islands_plot.svg'
    },
    'Vatican City': {
        'lat': 41.9,
        'lon': 12.45,
        'url': '../images/polar_graphs/vatican_city_plot.svg'
    },
    'Honduras': {
        'lat': 15.0,
        'lon': -86.5,
        'url': '../images/polar_graphs/honduras_plot.svg'
    },
    'Hong Kong': {
        'lat': 22.25,
        'lon': 114.17,
        'url': '../images/polar_graphs/hong_kong_plot.svg'
    },
    'Hungary': {
        'lat': 47.0,
        'lon': 20.0,
        'url': '../images/polar_graphs/hungary_plot.svg'
    },
    'Iceland': {
        'lat': 65.0,
        'lon': -18.0,
        'url': '../images/polar_graphs/iceland_plot.svg'
    },
    'India': {'lat': 20.0, 'lon': 77.0, 'url': '../images/polar_graphs/india_plot.svg'},
    'Indonesia': {
        'lat': -5.0,
        'lon': 120.0,
        'url': '../images/polar_graphs/indonesia_plot.svg'
    },
    'Iran': {
        'lat': 32.0,
        'lon': 53.0,
        'url': '../images/polar_graphs/iran_plot.svg'
    },
    'Iraq': {'lat': 33.0, 'lon': 44.0, 'url': '../images/polar_graphs/iraq_plot.svg'},
    'Republic of Ireland': {
        'lat': 53.0,
        'lon': -8.0,
        'url': '../images/polar_graphs/ireland_plot.svg'
    },
    'Israel': {'lat': 31.5, 'lon': 34.75, 'url': '../images/polar_graphs/israel_plot.svg'},
    'Italy': {'lat': 42.83, 'lon': 12.83, 'url': '../images/polar_graphs/italy_plot.svg'},
    'Jamaica': {
        'lat': 18.25,
        'lon': -77.5,
        'url': '../images/polar_graphs/jamaica_plot.svg'
    },
    'Japan': {'lat': 36.0, 'lon': 138.0, 'url': '../images/polar_graphs/japan_plot.svg'},
    'Jordan': {'lat': 31.0, 'lon': 36.0, 'url': '../images/polar_graphs/jordan_plot.svg'},
    'Kazakhstan': {
        'lat': 48.0,
        'lon': 68.0,
        'url': '../images/polar_graphs/kazakhstan_plot.svg'
    },
    'Kenya': {'lat': 1.0, 'lon': 38.0, 'url': '../images/polar_graphs/kenya_plot.svg'},
    'Kiribati': {
        'lat': 1.42,
        'lon': 173.0,
        'url': '../images/polar_graphs/kiribati_plot.svg'
    },
    "Korea, Democratic People's Republic of": {
        'lat': 40.0,
        'lon': 127.0,
        'url': "../images/polar_graphs/korea,_democratic_people's_republic_of_plot.svg"
    },
    'South Korea': {
        'lat': 37.0,
        'lon': 127.5,
        'url': '../images/polar_graphs/south_korea_plot.svg'
    },
    'Kuwait': {
        'lat': 29.34,
        'lon': 47.66,
        'url': '../images/polar_graphs/kuwait_plot.svg'
    },
    'Kyrgyzstan': {
        'lat': 41.0,
        'lon': 75.0,
        'url': '../images/polar_graphs/kyrgyzstan_plot.svg'
    },
    "Lao People's Democratic Republic": {
        'lat': 18.0,
        'lon': 105.0,
        'url': "../images/polar_graphs/lao_people's_democratic_republic_plot.svg"
    },
    'Latvia': {'lat': 57.0, 'lon': 25.0, 'url': '../images/polar_graphs/latvia_plot.svg'},
    'Lebanon': {
        'lat': 33.83,
        'lon': 35.83,
        'url': '../images/polar_graphs/lebanon_plot.svg'
    },
    'Lesotho': {
        'lat': -29.5,
        'lon': 28.5,
        'url': '../images/polar_graphs/lesotho_plot.svg'
    },
    'Liberia': {'lat': 6.5, 'lon': -9.5, 'url': '../images/polar_graphs/liberia_plot.svg'},
    'Libya': {
        'lat': 25.0,
        'lon': 17.0,
        'url': '../images/polar_graphs/libya_plot.svg'
    },
    'Liechtenstein': {
        'lat': 47.17,
        'lon': 9.53,
        'url': '../images/polar_graphs/liechtenstein_plot.svg'
    },
    'Lithuania': {
        'lat': 56.0,
        'lon': 24.0,
        'url': '../images/polar_graphs/lithuania_plot.svg'
    },
    'Luxembourg': {
        'lat': 49.75,
        'lon': 6.17,
        'url': '../images/polar_graphs/luxembourg_plot.svg'
    },
    'Macao SAR': {'lat': 22.17, 'lon': 113.55, 'url': '../images/polar_graphs/macao_sar_plot.svg'},
    'North Macedonia': {
        'lat': 41.83,
        'lon': 22.0,
        'url': '../images/polar_graphs/north_macedonia_plot.svg'
    },
    'Madagascar': {
        'lat': -20.0,
        'lon': 47.0,
        'url': '../images/polar_graphs/madagascar_plot.svg'
    },
    'Malawi': {'lat': -13.5, 'lon': 34.0, 'url': '../images/polar_graphs/malawi_plot.svg'},
    'Malaysia': {
        'lat': 2.5,
        'lon': 112.5,
        'url': '../images/polar_graphs/malaysia_plot.svg'
    },
    'Maldives': {
        'lat': 3.25,
        'lon': 73.0,
        'url': '../images/polar_graphs/maldives_plot.svg'
    },
    'Mali': {'lat': 17.0, 'lon': -4.0, 'url': '../images/polar_graphs/mali_plot.svg'},
    'Malta': {'lat': 35.83, 'lon': 14.58, 'url': '../images/polar_graphs/malta_plot.svg'},
    'Marshall Islands': {
        'lat': 9.0,
        'lon': 168.0,
        'url': '../images/polar_graphs/marshall_islands_plot.svg'
    },
    'Martinique': {
        'lat': 14.67,
        'lon': -61.0,
        'url': '../images/polar_graphs/martinique_plot.svg'
    },
    'Mauritania': {
        'lat': 20.0,
        'lon': -12.0,
        'url': '../images/polar_graphs/mauritania_plot.svg'
    },
    'Mauritius': {
        'lat': -20.28,
        'lon': 57.55,
        'url': '../images/polar_graphs/mauritius_plot.svg'
    },
    'Mayotte': {
        'lat': -12.83,
        'lon': 45.17,
        'url': '../images/polar_graphs/mayotte_plot.svg'
    },
    'Mexico': {
        'lat': 23.0,
        'lon': -102.0,
        'url': '../images/polar_graphs/mexico_plot.svg'
    },
    'Micronesia, Federated States of': {
        'lat': 6.92,
        'lon': 158.25,
        'url': '../images/polar_graphs/micronesia,_federated_states_of_plot.svg'
    },
    'Republic of Moldova': {
        'lat': 47.0,
        'lon': 29.0,
        'url': '../images/polar_graphs/republic_of_moldova_plot.svg'
    },
    'Monaco': {'lat': 43.73, 'lon': 7.4, 'url': '../images/polar_graphs/monaco_plot.svg'},
    'Mongolia': {
        'lat': 46.0,
        'lon': 105.0,
        'url': '../images/polar_graphs/mongolia_plot.svg'
    },
    'Montenegro': {
        'lat': 42.0,
        'lon': 19.0,
        'url': '../images/polar_graphs/montenegro_plot.svg'
    },
    'Montserrat': {
        'lat': 16.75,
        'lon': -62.2,
        'url': '../images/polar_graphs/montserrat_plot.svg'
    },
    'Morocco': {
        'lat': 32.0,
        'lon': -5.0,
        'url': '../images/polar_graphs/morocco_plot.svg'
    },
    'Mozambique': {
        'lat': -18.25,
        'lon': 35.0,
        'url': '../images/polar_graphs/mozambique_plot.svg'
    },
    'Myanmar': {
        'lat': 22.0,
        'lon': 98.0,
        'url': '../images/polar_graphs/myanmar_plot.svg'
    },
    'Namibia': {
        'lat': -22.0,
        'lon': 17.0,
        'url': '../images/polar_graphs/namibia_plot.svg'
    },
    'Nauru': {'lat': -0.53, 'lon': 166.92, 'url': '../images/polar_graphs/nauru_plot.svg'},
    'Nepal': {'lat': 28.0, 'lon': 84.0, 'url': '../images/polar_graphs/nepal_plot.svg'},
    'Netherlands': {
        'lat': 52.5,
        'lon': 5.75,
        'url': '../images/polar_graphs/netherlands_plot.svg'
    },
    'Netherlands Antilles': {
        'lat': 12.25,
        'lon': -68.75,
        'url': '../images/polar_graphs/netherlands_antilles_plot.svg'
    },
    'New Caledonia': {
        'lat': -21.5,
        'lon': 165.5,
        'url': '../images/polar_graphs/new_caledonia_plot.svg'
    },
    'New Zealand': {
        'lat': -41.0,
        'lon': 174.0,
        'url': '../images/polar_graphs/new_zealand_plot.svg'
    },
    'Nicaragua': {
        'lat': 13.0,
        'lon': -85.0,
        'url': '../images/polar_graphs/nicaragua_plot.svg'
    },
    'Niger': {'lat': 16.0, 'lon': 8.0, 'url': '../images/polar_graphs/niger_plot.svg'},
    'Nigeria': {'lat': 10.0, 'lon': 8.0, 'url': '../images/polar_graphs/nigeria_plot.svg'},
    'Niue': {'lat': -19.03, 'lon': -169.87, 'url': '../images/polar_graphs/niue_plot.svg'},
    'Norfolk Island': {
        'lat': -29.03,
        'lon': 167.95,
        'url': '../images/polar_graphs/norfolk_island_plot.svg'
    },
    'Northern Mariana Islands': {
        'lat': 15.2,
        'lon': 145.75,
        'url': '../images/polar_graphs/northern_mariana_islands_plot.svg'
    },
    'Norway': {'lat': 62.0, 'lon': 10.0, 'url': '../images/polar_graphs/norway_plot.svg'},
    'Oman': {'lat': 21.0, 'lon': 57.0, 'url': '../images/polar_graphs/oman_plot.svg'},
    'Pakistan': {
        'lat': 30.0,
        'lon': 70.0,
        'url': '../images/polar_graphs/pakistan_plot.svg'
    },
    'Palau': {'lat': 7.5, 'lon': 134.5, 'url': '../images/polar_graphs/palau_plot.svg'},
    'Palestine': {
        'lat': 32.0,
        'lon': 35.25,
        'url': '../images/polar_graphs/palestine_plot.svg'
    },
    'Panama': {'lat': 9.0, 'lon': -80.0, 'url': '../images/polar_graphs/panama_plot.svg'},
    'Papua New Guinea': {
        'lat': -6.0,
        'lon': 147.0,
        'url': '../images/polar_graphs/papua_new_guinea_plot.svg'
    },
    'Paraguay': {
        'lat': -23.0,
        'lon': -58.0,
        'url': '../images/polar_graphs/paraguay_plot.svg'
    },
    'Peru': {'lat': -10.0, 'lon': -76.0, 'url': '../images/polar_graphs/peru_plot.svg'},
    'Philippines': {
        'lat': 13.0,
        'lon': 122.0,
        'url': '../images/polar_graphs/philippines_plot.svg'
    },
    'Poland': {'lat': 52.0, 'lon': 20.0, 'url': '../images/polar_graphs/poland_plot.svg'},
    'Portugal': {
        'lat': 39.5,
        'lon': -8.0,
        'url': '../images/polar_graphs/portugal_plot.svg'
    },
    'Puerto Rico': {
        'lat': 18.25,
        'lon': -66.5,
        'url': '../images/polar_graphs/puerto_rico_plot.svg'
    },
    'Qatar': {'lat': 25.5, 'lon': 51.25, 'url': '../images/polar_graphs/qatar_plot.svg'},
    'Reunion': {
        'lat': -21.1,
        'lon': 55.6,
        'url': '../images/polar_graphs/reunion_plot.svg'
    },
    'Romania': {
        'lat': 46.0,
        'lon': 25.0,
        'url': '../images/polar_graphs/romania_plot.svg'
    },
    'Russian': {
        'lat': 60.0,
        'lon': 100.0,
        'url': '../images/polar_graphs/russian_plot.svg'
    },
    'Rwanda': {'lat': -2.0, 'lon': 30.0, 'url': '../images/polar_graphs/rwanda_plot.svg'},
    'Saint Helena': {
        'lat': -15.93,
        'lon': -5.7,
        'url': '../images/polar_graphs/saint_helena_plot.svg'
    },
    'Saint Kitts and Nevis': {
        'lat': 17.33,
        'lon': -62.75,
        'url': '../images/polar_graphs/saint_kitts_and_nevis_plot.svg'
    },
    'Saint Lucia': {
        'lat': 13.88,
        'lon': -61.13,
        'url': '../images/polar_graphs/saint_lucia_plot.svg'
    },
    'Saint Pierre and Miquelon': {
        'lat': 46.83,
        'lon': -56.33,
        'url': '../images/polar_graphs/saint_pierre_and_miquelon_plot.svg'
    },
    'Saint Vincent and the Grenadines': {
        'lat': 13.25,
        'lon': -61.2,
        'url': '../images/polar_graphs/saint_vincent_and_the_grenadines_plot.svg'
    },
    'Samoa': {
        'lat': -13.58,
        'lon': -172.33,
        'url': '../images/polar_graphs/samoa_plot.svg'
    },
    'San Marino': {
        'lat': 43.77,
        'lon': 12.42,
        'url': '../images/polar_graphs/san_marino_plot.svg'
    },
    'Sao Tome and Principe': {
        'lat': 1.0,
        'lon': 7.0,
        'url': '../images/polar_graphs/sao_tome_and_principe_plot.svg'
    },
    'Saudi Arabia': {
        'lat': 25.0,
        'lon': 45.0,
        'url': '../images/polar_graphs/saudi_arabia_plot.svg'
    },
    'Senegal': {
        'lat': 14.0,
        'lon': -14.0,
        'url': '../images/polar_graphs/senegal_plot.svg'
    },
    'Serbia': {'lat': 44.0, 'lon': 21.0, 'url': '../images/polar_graphs/serbia_plot.svg'},
    'Seychelles': {
        'lat': -4.58,
        'lon': 55.67,
        'url': '../images/polar_graphs/seychelles_plot.svg'
    },
    'Sierra Leone': {
        'lat': 8.5,
        'lon': -11.5,
        'url': '../images/polar_graphs/sierra_leone_plot.svg'
    },
    'Singapore': {
        'lat': 1.37,
        'lon': 103.8,
        'url': '../images/polar_graphs/singapore_plot.svg'
    },
    'Slovakia': {
        'lat': 48.67,
        'lon': 19.5,
        'url': '../images/polar_graphs/slovakia_plot.svg'
    },
    'Slovenia': {
        'lat': 46.0,
        'lon': 15.0,
        'url': '../images/polar_graphs/slovenia_plot.svg'
    },
    'Solomon Islands': {
        'lat': -8.0,
        'lon': 159.0,
        'url': '../images/polar_graphs/solomon_islands_plot.svg'
    },
    'Somalia': {
        'lat': 10.0,
        'lon': 49.0,
        'url': '../images/polar_graphs/somalia_plot.svg'
    },
    'South Africa': {
        'lat': -29.0,
        'lon': 24.0,
        'url': '../images/polar_graphs/south_africa_plot.svg'
    },
    'South Georgia and the South Sandwich Islands': {
        'lat': -54.5,
        'lon': -37.0,
        'url': '../images/polar_graphs/south_georgia_and_the_south_sandwich_islands_plot.svg'
    },
    'Spain': {'lat': 40.0, 'lon': -4.0, 'url': '../images/polar_graphs/spain_plot.svg'},
    'Sri Lanka': {
        'lat': 7.0,
        'lon': 81.0,
        'url': '../images/polar_graphs/sri_lanka_plot.svg'
    },
    'Sudan': {'lat': 15.0, 'lon': 30.0, 'url': '../images/polar_graphs/sudan_plot.svg'},
    'Suriname': {
        'lat': 4.0,
        'lon': -56.0,
        'url': '../images/polar_graphs/suriname_plot.svg'
    },
    'Svalbard and Jan Mayen': {
        'lat': 78.0,
        'lon': 20.0,
        'url': '../images/polar_graphs/svalbard_and_jan_mayen_plot.svg'
    },
    'Swaziland': {
        'lat': -26.5,
        'lon': 31.5,
        'url': '../images/polar_graphs/swaziland_plot.svg'
    },
    'Sweden': {'lat': 62.0, 'lon': 15.0, 'url': '../images/polar_graphs/sweden_plot.svg'},
    'Switzerland': {
        'lat': 47.0,
        'lon': 8.0,
        'url': '../images/polar_graphs/switzerland_plot.svg'
    },
    'Syria': {
        'lat': 35.0,
        'lon': 38.0,
        'url': '../images/polar_graphs/syria_plot.svg'
    },
    'Taiwan': {'lat': 23.5, 'lon': 121.0, 'url': '../images/polar_graphs/taiwan_plot.svg'},
    'Tajikistan': {
        'lat': 39.0,
        'lon': 71.0,
        'url': '../images/polar_graphs/tajikistan_plot.svg'
    },
    'Tanzania': {
        'lat': -6.0,
        'lon': 35.0,
        'url': '../images/polar_graphs/tanzania_plot.svg'
    },
    'Thailand': {
        'lat': 15.0,
        'lon': 100.0,
        'url': '../images/polar_graphs/thailand_plot.svg'
    },
    'Togo': {'lat': 8.0, 'lon': 1.17, 'url': '../images/polar_graphs/togo_plot.svg'},
    'Tokelau': {
        'lat': -9.0,
        'lon': -172.0,
        'url': '../images/polar_graphs/tokelau_plot.svg'
    },
    'Tonga': {'lat': -20.0, 'lon': -175.0, 'url': '../images/polar_graphs/tonga_plot.svg'},
    'Trinidad and Tobago': {
        'lat': 11.0,
        'lon': -61.0,
        'url': '../images/polar_graphs/trinidad_and_tobago_plot.svg'
    },
    'Tunisia': {'lat': 34.0, 'lon': 9.0, 'url': '../images/polar_graphs/tunisia_plot.svg'},
    'Turkey': {'lat': 39.0, 'lon': 35.0, 'url': '../images/polar_graphs/turkey_plot.svg'},
    'Turkmenistan': {
        'lat': 40.0,
        'lon': 60.0,
        'url': '../images/polar_graphs/turkmenistan_plot.svg'
    },
    'Turks and Caicos Islands': {
        'lat': 21.75,
        'lon': -71.58,
        'url': '../images/polar_graphs/turks_and_caicos_islands_plot.svg'
    },
    'Tuvalu': {'lat': -8.0, 'lon': 178.0, 'url': '../images/polar_graphs/tuvalu_plot.svg'},
    'US': {'lat': 38.0, 'lon': -97.0, 'url': '../images/polar_graphs/us_plot.svg'},
    'Uganda': {'lat': 1.0, 'lon': 32.0, 'url': '../images/polar_graphs/uganda_plot.svg'},
    'Ukraine': {
        'lat': 49.0,
        'lon': 32.0,
        'url': '../images/polar_graphs/ukraine_plot.svg'
    },
    'United Arab Emirates': {
        'lat': 24.0,
        'lon': 54.0,
        'url': '../images/polar_graphs/united_arab_emirates_plot.svg'
    },
    'UK': {
        'lat': 54.0,
        'lon': -2.0,
        'url': '../images/polar_graphs/uk_plot.svg'
    },
    'United States Minor Outlying Islands': {
        'lat': 19.28,
        'lon': 166.6,
        'url': '../images/polar_graphs/united_states_minor_outlying_islands_plot.svg'
    },
    'Uruguay': {
        'lat': -33.0,
        'lon': -56.0,
        'url': '../images/polar_graphs/uruguay_plot.svg'
    },
    'Uzbekistan': {
        'lat': 41.0,
        'lon': 64.0,
        'url': '../images/polar_graphs/uzbekistan_plot.svg'
    },
    'Vanuatu': {
        'lat': -16.0,
        'lon': 167.0,
        'url': '../images/polar_graphs/vanuatu_plot.svg'
    },
    'Venezuela': {
        'lat': 8.0,
        'lon': -66.0,
        'url': '../images/polar_graphs/venezuela_plot.svg'
    },
    'Vietnam': {
        'lat': 16.0,
        'lon': 106.0,
        'url': '../images/polar_graphs/vietnam_plot.svg'
    },
    'Virgin Islands, British': {
        'lat': 18.5,
        'lon': -64.5,
        'url': '../images/polar_graphs/virgin_islands,_british_plot.svg'
    },
    'Virgin Islands, U.S.': {
        'lat': 18.33,
        'lon': -64.83,
        'url': '../images/polar_graphs/virgin_islands,_u.s._plot.svg'
    },
    'Wallis and Futuna': {
        'lat': -13.3,
        'lon': -176.2,
        'url': '../images/polar_graphs/wallis_and_futuna_plot.svg'
    },
    'Western Sahara': {
        'lat': 24.5,
        'lon': -13.0,
        'url': '../images/polar_graphs/western_sahara_plot.svg'
    },
    'Yemen': {'lat': 15.0, 'lon': 48.0, 'url': '../images/polar_graphs/yemen_plot.svg'},
    'Zambia': {'lat': -15.0, 'lon': 30.0, 'url': '../images/polar_graphs/zambia_plot.svg'},
    'Zimbabwe': {
        'lat': -20.0,
        'lon': 30.0,
        'url': '../images/polar_graphs/zimbabwe_plot.svg'
    }
};

let countries = [
    'US',
    'Canada',
    'China',
    'Netherlands',
    'Australia',
    'United Kingdom',
    'Denmark',
    'France',
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Chile',
    'Colombia',
    'Congo (Brazzaville)',
    'Congo (Kinshasa)',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Diamond Princess',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'South Korea',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'San Marino',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Zambia',
    'Zimbabwe',
    'Kosovo',
    'West Bank and Gaza',
    'Burma',
    'MS Zaandam',
    'Botswana',
    'Burundi',
    'Sierra Leone'];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(0, 0),
        zoom: 2
    });

    for (let country of countries) {
        if (Object.keys(countries_lat_lon).includes(country)) {
            let icon = {
                url: `../images/polar_graphs/${country.toLowerCase().replace(/ /, "_")}_plot.svg`,
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

            let message = `
    <img src="../images/bar_graphs/${country.toLowerCase().replace(/ /g, "_")}_plot.png" alt="${country} daily bar graph" width="320" height="240"/>
    `;

            let infoWindow = new google.maps.InfoWindow({
                content: message
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}
