let map;

let countries_lat_lon = {
    'Afghanistan': {
        'lat': 33.0,
        'lon': 65.0,
        'url': '../images/svgs/afghanistan_plot.svg'
    },
    'Albania': {
        'lat': 41.0,
        'lon': 20.0,
        'url': '../images/svgs/albania_plot.svg'
    },
    'Algeria': {
        'lat': 28.0,
        'lon': 3.0,
        'url': '../images/svgs/algeria_plot.svg'
    },
    'American Samoa': {
        'lat': -14.33,
        'lon': -170.0,
        'url': '../images/svgs/american_samoa_plot.svg'
    },
    'Andorra': {'lat': 42.5, 'lon': 1.5, 'url': '../images/svgs/andorra_plot.svg'},
    'Angola': {'lat': -12.5, 'lon': 18.5, 'url': '../images/svgs/angola_plot.svg'},
    'Anguilla': {
        'lat': 18.25,
        'lon': -63.17,
        'url': '../images/svgs/anguilla_plot.svg'
    },
    'Antarctica': {
        'lat': -90.0,
        'lon': 0.0,
        'url': '../images/svgs/antarctica_plot.svg'
    },
    'Antigua and Barbuda': {
        'lat': 17.05,
        'lon': -61.8,
        'url': '../images/svgs/antigua_and_barbuda_plot.svg'
    },
    'Argentina': {
        'lat': -34.0,
        'lon': -64.0,
        'url': '../images/svgs/argentina_plot.svg'
    },
    'Armenia': {
        'lat': 40.0,
        'lon': 45.0,
        'url': '../images/svgs/armenia_plot.svg'
    },
    'Aruba': {
        'lat': 12.5,
        'lon': -69.97,
        'url': '../images/svgs/aruba_plot.svg'
    },
    'Asia/Pacific Region': {
        'lat': 35.0,
        'lon': 105.0,
        'url': '../images/svgs/asia/pacific_region_plot.svg'
    },
    'Australia': {
        'lat': -27.0,
        'lon': 133.0,
        'url': '../images/svgs/australia_plot.svg'
    },
    'Austria': {
        'lat': 47.33,
        'lon': 13.33,
        'url': '../images/svgs/austria_plot.svg'
    },
    'Azerbaijan': {
        'lat': 40.5,
        'lon': 47.5,
        'url': '../images/svgs/azerbaijan_plot.svg'
    },
    'Bahamas': {
        'lat': 24.25,
        'lon': -76.0,
        'url': '../images/svgs/bahamas_plot.svg'
    },
    'Bahrain': {
        'lat': 26.0,
        'lon': 50.55,
        'url': '../images/svgs/bahrain_plot.svg'
    },
    'Bangladesh': {
        'lat': 24.0,
        'lon': 90.0,
        'url': '../images/svgs/bangladesh_plot.svg'
    },
    'Barbados': {
        'lat': 13.17,
        'lon': -59.53,
        'url': '../images/svgs/barbados_plot.svg'
    },
    'Belarus': {
        'lat': 53.0,
        'lon': 28.0,
        'url': '../images/svgs/belarus_plot.svg'
    },
    'Belgium': {
        'lat': 50.83,
        'lon': 4.0,
        'url': '../images/svgs/belgium_plot.svg'
    },
    'Belize': {
        'lat': 17.25,
        'lon': -88.75,
        'url': '../images/svgs/belize_plot.svg'
    },
    'Benin': {'lat': 9.5, 'lon': 2.25, 'url': '../images/svgs/benin_plot.svg'},
    'Bermuda': {
        'lat': 32.33,
        'lon': -64.75,
        'url': '../images/svgs/bermuda_plot.svg'
    },
    'Bhutan': {'lat': 27.5, 'lon': 90.5, 'url': '../images/svgs/bhutan_plot.svg'},
    'Bolivia': {
        'lat': -17.0,
        'lon': -65.0,
        'url': '../images/svgs/bolivia_plot.svg'
    },
    'Bosnia and Herzegovina': {
        'lat': 44.0,
        'lon': 18.0,
        'url': '../images/svgs/bosnia_and_herzegovina_plot.svg'
    },
    'Botswana': {
        'lat': -22.0,
        'lon': 24.0,
        'url': '../images/svgs/botswana_plot.svg'
    },
    'Bouvet Island': {
        'lat': -54.43,
        'lon': 3.4,
        'url': '../images/svgs/bouvet_island_plot.svg'
    },
    'Brazil': {
        'lat': -10.0,
        'lon': -55.0,
        'url': '../images/svgs/brazil_plot.svg'
    },
    'British Indian Ocean Territory': {
        'lat': -6.0,
        'lon': 71.5,
        'url': '../images/svgs/british_indian_ocean_territory_plot.svg'
    },
    'Brunei Darussalam': {
        'lat': 4.5,
        'lon': 114.67,
        'url': '../images/svgs/brunei_darussalam_plot.svg'
    },
    'Bulgaria': {
        'lat': 43.0,
        'lon': 25.0,
        'url': '../images/svgs/bulgaria_plot.svg'
    },
    'Burkina Faso': {
        'lat': 13.0,
        'lon': -2.0,
        'url': '../images/svgs/burkina_faso_plot.svg'
    },
    'Burundi': {
        'lat': -3.5,
        'lon': 30.0,
        'url': '../images/svgs/burundi_plot.svg'
    },
    'Cambodia': {
        'lat': 13.0,
        'lon': 105.0,
        'url': '../images/svgs/cambodia_plot.svg'
    },
    'Cameroon': {
        'lat': 6.0,
        'lon': 12.0,
        'url': '../images/svgs/cameroon_plot.svg'
    },
    'Canada': {'lat': 60.0, 'lon': -95.0, 'url': '../images/svgs/canada_plot.svg'},
    'Cape Verde': {
        'lat': 16.0,
        'lon': -24.0,
        'url': '../images/svgs/cape_verde_plot.svg'
    },
    'Cayman Islands': {
        'lat': 19.5,
        'lon': -80.5,
        'url': '../images/svgs/cayman_islands_plot.svg'
    },
    'Central African Republic': {
        'lat': 7.0,
        'lon': 21.0,
        'url': '../images/svgs/central_african_republic_plot.svg'
    },
    'Chad': {'lat': 15.0, 'lon': 19.0, 'url': '../images/svgs/chad_plot.svg'},
    'Chile': {'lat': -30.0, 'lon': -71.0, 'url': '../images/svgs/chile_plot.svg'},
    'China': {'lat': 35.0, 'lon': 105.0, 'url': '../images/svgs/china_plot.svg'},
    'Christmas Island': {
        'lat': -10.5,
        'lon': 105.67,
        'url': '../images/svgs/christmas_island_plot.svg'
    },
    'Cocos (Keeling) Islands': {
        'lat': -12.5,
        'lon': 96.83,
        'url': '../images/svgs/cocos_(keeling)_islands_plot.svg'
    },
    'Colombia': {
        'lat': 4.0,
        'lon': -72.0,
        'url': '../images/svgs/colombia_plot.svg'
    },
    'Comoros': {
        'lat': -12.17,
        'lon': 44.25,
        'url': '../images/svgs/comoros_plot.svg'
    },
    'Congo': {'lat': -1.0, 'lon': 15.0, 'url': '../images/svgs/congo_plot.svg'},
    'Congo, The Democratic Republic of the': {
        'lat': 0.0,
        'lon': 25.0,
        'url': '../images/svgs/congo,_the_democratic_republic_of_the_plot.svg'
    },
    'Cook Islands': {
        'lat': -21.23,
        'lon': -159.77,
        'url': '../images/svgs/cook_islands_plot.svg'
    },
    'Costa Rica': {
        'lat': 10.0,
        'lon': -84.0,
        'url': '../images/svgs/costa_rica_plot.svg'
    },
    "Cote d'Ivoire": {
        'lat': 8.0,
        'lon': -5.0,
        'url': "../images/svgs/cote_d'ivoire_plot.svg"
    },
    'Croatia': {
        'lat': 45.17,
        'lon': 15.5,
        'url': '../images/svgs/croatia_plot.svg'
    },
    'Cuba': {'lat': 21.5, 'lon': -80.0, 'url': '../images/svgs/cuba_plot.svg'},
    'Cyprus': {'lat': 35.0, 'lon': 33.0, 'url': '../images/svgs/cyprus_plot.svg'},
    'Czech Republic': {
        'lat': 49.75,
        'lon': 15.5,
        'url': '../images/svgs/czech_republic_plot.svg'
    },
    'Denmark': {
        'lat': 56.0,
        'lon': 10.0,
        'url': '../images/svgs/denmark_plot.svg'
    },
    'Djibouti': {
        'lat': 11.5,
        'lon': 43.0,
        'url': '../images/svgs/djibouti_plot.svg'
    },
    'Dominica': {
        'lat': 15.42,
        'lon': -61.33,
        'url': '../images/svgs/dominica_plot.svg'
    },
    'Dominican Republic': {
        'lat': 19.0,
        'lon': -70.67,
        'url': '../images/svgs/dominican_republic_plot.svg'
    },
    'Ecuador': {
        'lat': -2.0,
        'lon': -77.5,
        'url': '../images/svgs/ecuador_plot.svg'
    },
    'Egypt': {'lat': 27.0, 'lon': 30.0, 'url': '../images/svgs/egypt_plot.svg'},
    'El Salvador': {
        'lat': 13.83,
        'lon': -88.92,
        'url': '../images/svgs/el_salvador_plot.svg'
    },
    'Equatorial Guinea': {
        'lat': 2.0,
        'lon': 10.0,
        'url': '../images/svgs/equatorial_guinea_plot.svg'
    },
    'Eritrea': {
        'lat': 15.0,
        'lon': 39.0,
        'url': '../images/svgs/eritrea_plot.svg'
    },
    'Estonia': {
        'lat': 59.0,
        'lon': 26.0,
        'url': '../images/svgs/estonia_plot.svg'
    },
    'Ethiopia': {
        'lat': 8.0,
        'lon': 38.0,
        'url': '../images/svgs/ethiopia_plot.svg'
    },
    'Europe': {'lat': 47.0, 'lon': 8.0, 'url': '../images/svgs/europe_plot.svg'},
    'Falkland Islands (Malvinas)': {
        'lat': -51.75,
        'lon': -59.0,
        'url': '../images/svgs/falkland_islands_(malvinas)_plot.svg'
    },
    'Faroe Islands': {
        'lat': 62.0,
        'lon': -7.0,
        'url': '../images/svgs/faroe_islands_plot.svg'
    },
    'Fiji': {'lat': -18.0, 'lon': 175.0, 'url': '../images/svgs/fiji_plot.svg'},
    'Finland': {
        'lat': 64.0,
        'lon': 26.0,
        'url': '../images/svgs/finland_plot.svg'
    },
    'France': {'lat': 46.0, 'lon': 2.0, 'url': '../images/svgs/france_plot.svg'},
    'French Guiana': {
        'lat': 4.0,
        'lon': -53.0,
        'url': '../images/svgs/french_guiana_plot.svg'
    },
    'French Polynesia': {
        'lat': -15.0,
        'lon': -140.0,
        'url': '../images/svgs/french_polynesia_plot.svg'
    },
    'French Southern Territories': {
        'lat': -43.0,
        'lon': 67.0,
        'url': '../images/svgs/french_southern_territories_plot.svg'
    },
    'Gabon': {'lat': -1.0, 'lon': 11.75, 'url': '../images/svgs/gabon_plot.svg'},
    'Gambia': {
        'lat': 13.47,
        'lon': -16.57,
        'url': '../images/svgs/gambia_plot.svg'
    },
    'Georgia': {
        'lat': 42.0,
        'lon': 43.5,
        'url': '../images/svgs/georgia_plot.svg'
    },
    'Germany': {'lat': 51.0, 'lon': 9.0, 'url': '../images/svgs/germany_plot.svg'},
    'Ghana': {'lat': 8.0, 'lon': -2.0, 'url': '../images/svgs/ghana_plot.svg'},
    'Gibraltar': {
        'lat': 36.18,
        'lon': -5.37,
        'url': '../images/svgs/gibraltar_plot.svg'
    },
    'Greece': {'lat': 39.0, 'lon': 22.0, 'url': '../images/svgs/greece_plot.svg'},
    'Greenland': {
        'lat': 72.0,
        'lon': -40.0,
        'url': '../images/svgs/greenland_plot.svg'
    },
    'Grenada': {
        'lat': 12.12,
        'lon': -61.67,
        'url': '../images/svgs/grenada_plot.svg'
    },
    'Guadeloupe': {
        'lat': 16.25,
        'lon': -61.58,
        'url': '../images/svgs/guadeloupe_plot.svg'
    },
    'Guam': {'lat': 13.47, 'lon': 144.78, 'url': '../images/svgs/guam_plot.svg'},
    'Guatemala': {
        'lat': 15.5,
        'lon': -90.25,
        'url': '../images/svgs/guatemala_plot.svg'
    },
    'Guinea': {'lat': 11.0, 'lon': -10.0, 'url': '../images/svgs/guinea_plot.svg'},
    'Guinea-Bissau': {
        'lat': 12.0,
        'lon': -15.0,
        'url': '../images/svgs/guinea-bissau_plot.svg'
    },
    'Guyana': {'lat': 5.0, 'lon': -59.0, 'url': '../images/svgs/guyana_plot.svg'},
    'Haiti': {'lat': 19.0, 'lon': -72.42, 'url': '../images/svgs/haiti_plot.svg'},
    'Heard Island and McDonald Islands': {
        'lat': -53.1,
        'lon': 72.52,
        'url': '../images/svgs/heard_island_and_mcdonald_islands_plot.svg'
    },
    'Holy See (Vatican City State)': {
        'lat': 41.9,
        'lon': 12.45,
        'url': '../images/svgs/holy_see_(vatican_city_state)_plot.svg'
    },
    'Honduras': {
        'lat': 15.0,
        'lon': -86.5,
        'url': '../images/svgs/honduras_plot.svg'
    },
    'Hong Kong': {
        'lat': 22.25,
        'lon': 114.17,
        'url': '../images/svgs/hong_kong_plot.svg'
    },
    'Hungary': {
        'lat': 47.0,
        'lon': 20.0,
        'url': '../images/svgs/hungary_plot.svg'
    },
    'Iceland': {
        'lat': 65.0,
        'lon': -18.0,
        'url': '../images/svgs/iceland_plot.svg'
    },
    'India': {'lat': 20.0, 'lon': 77.0, 'url': '../images/svgs/india_plot.svg'},
    'Indonesia': {
        'lat': -5.0,
        'lon': 120.0,
        'url': '../images/svgs/indonesia_plot.svg'
    },
    'Iran, Islamic Republic of': {
        'lat': 32.0,
        'lon': 53.0,
        'url': '../images/svgs/iran,_islamic_republic_of_plot.svg'
    },
    'Iraq': {'lat': 33.0, 'lon': 44.0, 'url': '../images/svgs/iraq_plot.svg'},
    'Ireland': {
        'lat': 53.0,
        'lon': -8.0,
        'url': '../images/svgs/ireland_plot.svg'
    },
    'Israel': {'lat': 31.5, 'lon': 34.75, 'url': '../images/svgs/israel_plot.svg'},
    'Italy': {'lat': 42.83, 'lon': 12.83, 'url': '../images/svgs/italy_plot.svg'},
    'Jamaica': {
        'lat': 18.25,
        'lon': -77.5,
        'url': '../images/svgs/jamaica_plot.svg'
    },
    'Japan': {'lat': 36.0, 'lon': 138.0, 'url': '../images/svgs/japan_plot.svg'},
    'Jordan': {'lat': 31.0, 'lon': 36.0, 'url': '../images/svgs/jordan_plot.svg'},
    'Kazakhstan': {
        'lat': 48.0,
        'lon': 68.0,
        'url': '../images/svgs/kazakhstan_plot.svg'
    },
    'Kenya': {'lat': 1.0, 'lon': 38.0, 'url': '../images/svgs/kenya_plot.svg'},
    'Kiribati': {
        'lat': 1.42,
        'lon': 173.0,
        'url': '../images/svgs/kiribati_plot.svg'
    },
    "Korea, Democratic People's Republic of": {
        'lat': 40.0,
        'lon': 127.0,
        'url': "../images/svgs/korea,_democratic_people's_republic_of_plot.svg"
    },
    'Korea, Republic of': {
        'lat': 37.0,
        'lon': 127.5,
        'url': '../images/svgs/korea,_republic_of_plot.svg'
    },
    'Kuwait': {
        'lat': 29.34,
        'lon': 47.66,
        'url': '../images/svgs/kuwait_plot.svg'
    },
    'Kyrgyzstan': {
        'lat': 41.0,
        'lon': 75.0,
        'url': '../images/svgs/kyrgyzstan_plot.svg'
    },
    "Lao People's Democratic Republic": {
        'lat': 18.0,
        'lon': 105.0,
        'url': "../images/svgs/lao_people's_democratic_republic_plot.svg"
    },
    'Latvia': {'lat': 57.0, 'lon': 25.0, 'url': '../images/svgs/latvia_plot.svg'},
    'Lebanon': {
        'lat': 33.83,
        'lon': 35.83,
        'url': '../images/svgs/lebanon_plot.svg'
    },
    'Lesotho': {
        'lat': -29.5,
        'lon': 28.5,
        'url': '../images/svgs/lesotho_plot.svg'
    },
    'Liberia': {'lat': 6.5, 'lon': -9.5, 'url': '../images/svgs/liberia_plot.svg'},
    'Libyan Arab Jamahiriya': {
        'lat': 25.0,
        'lon': 17.0,
        'url': '../images/svgs/libyan_arab_jamahiriya_plot.svg'
    },
    'Liechtenstein': {
        'lat': 47.17,
        'lon': 9.53,
        'url': '../images/svgs/liechtenstein_plot.svg'
    },
    'Lithuania': {
        'lat': 56.0,
        'lon': 24.0,
        'url': '../images/svgs/lithuania_plot.svg'
    },
    'Luxembourg': {
        'lat': 49.75,
        'lon': 6.17,
        'url': '../images/svgs/luxembourg_plot.svg'
    },
    'Macao': {'lat': 22.17, 'lon': 113.55, 'url': '../images/svgs/macao_plot.svg'},
    'Macedonia': {
        'lat': 41.83,
        'lon': 22.0,
        'url': '../images/svgs/macedonia_plot.svg'
    },
    'Madagascar': {
        'lat': -20.0,
        'lon': 47.0,
        'url': '../images/svgs/madagascar_plot.svg'
    },
    'Malawi': {'lat': -13.5, 'lon': 34.0, 'url': '../images/svgs/malawi_plot.svg'},
    'Malaysia': {
        'lat': 2.5,
        'lon': 112.5,
        'url': '../images/svgs/malaysia_plot.svg'
    },
    'Maldives': {
        'lat': 3.25,
        'lon': 73.0,
        'url': '../images/svgs/maldives_plot.svg'
    },
    'Mali': {'lat': 17.0, 'lon': -4.0, 'url': '../images/svgs/mali_plot.svg'},
    'Malta': {'lat': 35.83, 'lon': 14.58, 'url': '../images/svgs/malta_plot.svg'},
    'Marshall Islands': {
        'lat': 9.0,
        'lon': 168.0,
        'url': '../images/svgs/marshall_islands_plot.svg'
    },
    'Martinique': {
        'lat': 14.67,
        'lon': -61.0,
        'url': '../images/svgs/martinique_plot.svg'
    },
    'Mauritania': {
        'lat': 20.0,
        'lon': -12.0,
        'url': '../images/svgs/mauritania_plot.svg'
    },
    'Mauritius': {
        'lat': -20.28,
        'lon': 57.55,
        'url': '../images/svgs/mauritius_plot.svg'
    },
    'Mayotte': {
        'lat': -12.83,
        'lon': 45.17,
        'url': '../images/svgs/mayotte_plot.svg'
    },
    'Mexico': {
        'lat': 23.0,
        'lon': -102.0,
        'url': '../images/svgs/mexico_plot.svg'
    },
    'Micronesia, Federated States of': {
        'lat': 6.92,
        'lon': 158.25,
        'url': '../images/svgs/micronesia,_federated_states_of_plot.svg'
    },
    'Moldova, Republic of': {
        'lat': 47.0,
        'lon': 29.0,
        'url': '../images/svgs/moldova,_republic_of_plot.svg'
    },
    'Monaco': {'lat': 43.73, 'lon': 7.4, 'url': '../images/svgs/monaco_plot.svg'},
    'Mongolia': {
        'lat': 46.0,
        'lon': 105.0,
        'url': '../images/svgs/mongolia_plot.svg'
    },
    'Montenegro': {
        'lat': 42.0,
        'lon': 19.0,
        'url': '../images/svgs/montenegro_plot.svg'
    },
    'Montserrat': {
        'lat': 16.75,
        'lon': -62.2,
        'url': '../images/svgs/montserrat_plot.svg'
    },
    'Morocco': {
        'lat': 32.0,
        'lon': -5.0,
        'url': '../images/svgs/morocco_plot.svg'
    },
    'Mozambique': {
        'lat': -18.25,
        'lon': 35.0,
        'url': '../images/svgs/mozambique_plot.svg'
    },
    'Myanmar': {
        'lat': 22.0,
        'lon': 98.0,
        'url': '../images/svgs/myanmar_plot.svg'
    },
    'Namibia': {
        'lat': -22.0,
        'lon': 17.0,
        'url': '../images/svgs/namibia_plot.svg'
    },
    'Nauru': {'lat': -0.53, 'lon': 166.92, 'url': '../images/svgs/nauru_plot.svg'},
    'Nepal': {'lat': 28.0, 'lon': 84.0, 'url': '../images/svgs/nepal_plot.svg'},
    'Netherlands': {
        'lat': 52.5,
        'lon': 5.75,
        'url': '../images/svgs/netherlands_plot.svg'
    },
    'Netherlands Antilles': {
        'lat': 12.25,
        'lon': -68.75,
        'url': '../images/svgs/netherlands_antilles_plot.svg'
    },
    'New Caledonia': {
        'lat': -21.5,
        'lon': 165.5,
        'url': '../images/svgs/new_caledonia_plot.svg'
    },
    'New Zealand': {
        'lat': -41.0,
        'lon': 174.0,
        'url': '../images/svgs/new_zealand_plot.svg'
    },
    'Nicaragua': {
        'lat': 13.0,
        'lon': -85.0,
        'url': '../images/svgs/nicaragua_plot.svg'
    },
    'Niger': {'lat': 16.0, 'lon': 8.0, 'url': '../images/svgs/niger_plot.svg'},
    'Nigeria': {'lat': 10.0, 'lon': 8.0, 'url': '../images/svgs/nigeria_plot.svg'},
    'Niue': {'lat': -19.03, 'lon': -169.87, 'url': '../images/svgs/niue_plot.svg'},
    'Norfolk Island': {
        'lat': -29.03,
        'lon': 167.95,
        'url': '../images/svgs/norfolk_island_plot.svg'
    },
    'Northern Mariana Islands': {
        'lat': 15.2,
        'lon': 145.75,
        'url': '../images/svgs/northern_mariana_islands_plot.svg'
    },
    'Norway': {'lat': 62.0, 'lon': 10.0, 'url': '../images/svgs/norway_plot.svg'},
    'Oman': {'lat': 21.0, 'lon': 57.0, 'url': '../images/svgs/oman_plot.svg'},
    'Pakistan': {
        'lat': 30.0,
        'lon': 70.0,
        'url': '../images/svgs/pakistan_plot.svg'
    },
    'Palau': {'lat': 7.5, 'lon': 134.5, 'url': '../images/svgs/palau_plot.svg'},
    'Palestinian Territory': {
        'lat': 32.0,
        'lon': 35.25,
        'url': '../images/svgs/palestinian_territory_plot.svg'
    },
    'Panama': {'lat': 9.0, 'lon': -80.0, 'url': '../images/svgs/panama_plot.svg'},
    'Papua New Guinea': {
        'lat': -6.0,
        'lon': 147.0,
        'url': '../images/svgs/papua_new_guinea_plot.svg'
    },
    'Paraguay': {
        'lat': -23.0,
        'lon': -58.0,
        'url': '../images/svgs/paraguay_plot.svg'
    },
    'Peru': {'lat': -10.0, 'lon': -76.0, 'url': '../images/svgs/peru_plot.svg'},
    'Philippines': {
        'lat': 13.0,
        'lon': 122.0,
        'url': '../images/svgs/philippines_plot.svg'
    },
    'Poland': {'lat': 52.0, 'lon': 20.0, 'url': '../images/svgs/poland_plot.svg'},
    'Portugal': {
        'lat': 39.5,
        'lon': -8.0,
        'url': '../images/svgs/portugal_plot.svg'
    },
    'Puerto Rico': {
        'lat': 18.25,
        'lon': -66.5,
        'url': '../images/svgs/puerto_rico_plot.svg'
    },
    'Qatar': {'lat': 25.5, 'lon': 51.25, 'url': '../images/svgs/qatar_plot.svg'},
    'Reunion': {
        'lat': -21.1,
        'lon': 55.6,
        'url': '../images/svgs/reunion_plot.svg'
    },
    'Romania': {
        'lat': 46.0,
        'lon': 25.0,
        'url': '../images/svgs/romania_plot.svg'
    },
    'Russian Federation': {
        'lat': 60.0,
        'lon': 100.0,
        'url': '../images/svgs/russian_federation_plot.svg'
    },
    'Rwanda': {'lat': -2.0, 'lon': 30.0, 'url': '../images/svgs/rwanda_plot.svg'},
    'Saint Helena': {
        'lat': -15.93,
        'lon': -5.7,
        'url': '../images/svgs/saint_helena_plot.svg'
    },
    'Saint Kitts and Nevis': {
        'lat': 17.33,
        'lon': -62.75,
        'url': '../images/svgs/saint_kitts_and_nevis_plot.svg'
    },
    'Saint Lucia': {
        'lat': 13.88,
        'lon': -61.13,
        'url': '../images/svgs/saint_lucia_plot.svg'
    },
    'Saint Pierre and Miquelon': {
        'lat': 46.83,
        'lon': -56.33,
        'url': '../images/svgs/saint_pierre_and_miquelon_plot.svg'
    },
    'Saint Vincent and the Grenadines': {
        'lat': 13.25,
        'lon': -61.2,
        'url': '../images/svgs/saint_vincent_and_the_grenadines_plot.svg'
    },
    'Samoa': {
        'lat': -13.58,
        'lon': -172.33,
        'url': '../images/svgs/samoa_plot.svg'
    },
    'San Marino': {
        'lat': 43.77,
        'lon': 12.42,
        'url': '../images/svgs/san_marino_plot.svg'
    },
    'Sao Tome and Principe': {
        'lat': 1.0,
        'lon': 7.0,
        'url': '../images/svgs/sao_tome_and_principe_plot.svg'
    },
    'Saudi Arabia': {
        'lat': 25.0,
        'lon': 45.0,
        'url': '../images/svgs/saudi_arabia_plot.svg'
    },
    'Senegal': {
        'lat': 14.0,
        'lon': -14.0,
        'url': '../images/svgs/senegal_plot.svg'
    },
    'Serbia': {'lat': 44.0, 'lon': 21.0, 'url': '../images/svgs/serbia_plot.svg'},
    'Seychelles': {
        'lat': -4.58,
        'lon': 55.67,
        'url': '../images/svgs/seychelles_plot.svg'
    },
    'Sierra Leone': {
        'lat': 8.5,
        'lon': -11.5,
        'url': '../images/svgs/sierra_leone_plot.svg'
    },
    'Singapore': {
        'lat': 1.37,
        'lon': 103.8,
        'url': '../images/svgs/singapore_plot.svg'
    },
    'Slovakia': {
        'lat': 48.67,
        'lon': 19.5,
        'url': '../images/svgs/slovakia_plot.svg'
    },
    'Slovenia': {
        'lat': 46.0,
        'lon': 15.0,
        'url': '../images/svgs/slovenia_plot.svg'
    },
    'Solomon Islands': {
        'lat': -8.0,
        'lon': 159.0,
        'url': '../images/svgs/solomon_islands_plot.svg'
    },
    'Somalia': {
        'lat': 10.0,
        'lon': 49.0,
        'url': '../images/svgs/somalia_plot.svg'
    },
    'South Africa': {
        'lat': -29.0,
        'lon': 24.0,
        'url': '../images/svgs/south_africa_plot.svg'
    },
    'South Georgia and the South Sandwich Islands': {
        'lat': -54.5,
        'lon': -37.0,
        'url': '../images/svgs/south_georgia_and_the_south_sandwich_islands_plot.svg'
    },
    'Spain': {'lat': 40.0, 'lon': -4.0, 'url': '../images/svgs/spain_plot.svg'},
    'Sri Lanka': {
        'lat': 7.0,
        'lon': 81.0,
        'url': '../images/svgs/sri_lanka_plot.svg'
    },
    'Sudan': {'lat': 15.0, 'lon': 30.0, 'url': '../images/svgs/sudan_plot.svg'},
    'Suriname': {
        'lat': 4.0,
        'lon': -56.0,
        'url': '../images/svgs/suriname_plot.svg'
    },
    'Svalbard and Jan Mayen': {
        'lat': 78.0,
        'lon': 20.0,
        'url': '../images/svgs/svalbard_and_jan_mayen_plot.svg'
    },
    'Swaziland': {
        'lat': -26.5,
        'lon': 31.5,
        'url': '../images/svgs/swaziland_plot.svg'
    },
    'Sweden': {'lat': 62.0, 'lon': 15.0, 'url': '../images/svgs/sweden_plot.svg'},
    'Switzerland': {
        'lat': 47.0,
        'lon': 8.0,
        'url': '../images/svgs/switzerland_plot.svg'
    },
    'Syrian Arab Republic': {
        'lat': 35.0,
        'lon': 38.0,
        'url': '../images/svgs/syrian_arab_republic_plot.svg'
    },
    'Taiwan': {'lat': 23.5, 'lon': 121.0, 'url': '../images/svgs/taiwan_plot.svg'},
    'Tajikistan': {
        'lat': 39.0,
        'lon': 71.0,
        'url': '../images/svgs/tajikistan_plot.svg'
    },
    'Tanzania, United Republic of': {
        'lat': -6.0,
        'lon': 35.0,
        'url': '../images/svgs/tanzania,_united_republic_of_plot.svg'
    },
    'Thailand': {
        'lat': 15.0,
        'lon': 100.0,
        'url': '../images/svgs/thailand_plot.svg'
    },
    'Togo': {'lat': 8.0, 'lon': 1.17, 'url': '../images/svgs/togo_plot.svg'},
    'Tokelau': {
        'lat': -9.0,
        'lon': -172.0,
        'url': '../images/svgs/tokelau_plot.svg'
    },
    'Tonga': {'lat': -20.0, 'lon': -175.0, 'url': '../images/svgs/tonga_plot.svg'},
    'Trinidad and Tobago': {
        'lat': 11.0,
        'lon': -61.0,
        'url': '../images/svgs/trinidad_and_tobago_plot.svg'
    },
    'Tunisia': {'lat': 34.0, 'lon': 9.0, 'url': '../images/svgs/tunisia_plot.svg'},
    'Turkey': {'lat': 39.0, 'lon': 35.0, 'url': '../images/svgs/turkey_plot.svg'},
    'Turkmenistan': {
        'lat': 40.0,
        'lon': 60.0,
        'url': '../images/svgs/turkmenistan_plot.svg'
    },
    'Turks and Caicos Islands': {
        'lat': 21.75,
        'lon': -71.58,
        'url': '../images/svgs/turks_and_caicos_islands_plot.svg'
    },
    'Tuvalu': {'lat': -8.0, 'lon': 178.0, 'url': '../images/svgs/tuvalu_plot.svg'},
    'US': {'lat': 38.0, 'lon': -97.0, 'url': '../images/svgs/us_plot.svg'},
    'Uganda': {'lat': 1.0, 'lon': 32.0, 'url': '../images/svgs/uganda_plot.svg'},
    'Ukraine': {
        'lat': 49.0,
        'lon': 32.0,
        'url': '../images/svgs/ukraine_plot.svg'
    },
    'United Arab Emirates': {
        'lat': 24.0,
        'lon': 54.0,
        'url': '../images/svgs/united_arab_emirates_plot.svg'
    },
    'United Kingdom': {
        'lat': 54.0,
        'lon': -2.0,
        'url': '../images/svgs/united_kingdom_plot.svg'
    },
    'United States Minor Outlying Islands': {
        'lat': 19.28,
        'lon': 166.6,
        'url': '../images/svgs/united_states_minor_outlying_islands_plot.svg'
    },
    'Uruguay': {
        'lat': -33.0,
        'lon': -56.0,
        'url': '../images/svgs/uruguay_plot.svg'
    },
    'Uzbekistan': {
        'lat': 41.0,
        'lon': 64.0,
        'url': '../images/svgs/uzbekistan_plot.svg'
    },
    'Vanuatu': {
        'lat': -16.0,
        'lon': 167.0,
        'url': '../images/svgs/vanuatu_plot.svg'
    },
    'Venezuela': {
        'lat': 8.0,
        'lon': -66.0,
        'url': '../images/svgs/venezuela_plot.svg'
    },
    'Vietnam': {
        'lat': 16.0,
        'lon': 106.0,
        'url': '../images/svgs/vietnam_plot.svg'
    },
    'Virgin Islands, British': {
        'lat': 18.5,
        'lon': -64.5,
        'url': '../images/svgs/virgin_islands,_british_plot.svg'
    },
    'Virgin Islands, U.S.': {
        'lat': 18.33,
        'lon': -64.83,
        'url': '../images/svgs/virgin_islands,_u.s._plot.svg'
    },
    'Wallis and Futuna': {
        'lat': -13.3,
        'lon': -176.2,
        'url': '../images/svgs/wallis_and_futuna_plot.svg'
    },
    'Western Sahara': {
        'lat': 24.5,
        'lon': -13.0,
        'url': '../images/svgs/western_sahara_plot.svg'
    },
    'Yemen': {'lat': 15.0, 'lon': 48.0, 'url': '../images/svgs/yemen_plot.svg'},
    'Zambia': {'lat': -15.0, 'lon': 30.0, 'url': '../images/svgs/zambia_plot.svg'},
    'Zimbabwe': {
        'lat': -20.0,
        'lon': 30.0,
        'url': '../images/svgs/zimbabwe_plot.svg'
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

    let markers = [];

    for (let country of countries) {
        if (Object.keys(countries_lat_lon).includes(country)) {
            let icon = {
                url: countries_lat_lon[country]["url"],
                anchor: new google.maps.Point(50, 25),
                scaledSize: new google.maps.Size(100, 100)
            };

            markers.push(new google.maps.Marker({
                position: new google.maps.LatLng(countries_lat_lon[country]["lat"], countries_lat_lon[country]["lon"]),
                map: map,
                draggable: false,
                icon: icon,
                zIndex: 0,
                title: country
            }));
        }
    }
}
