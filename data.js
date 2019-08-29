const allCountries = [
    {
      "country": "Afghanistan",
      "city": "Kabul",
      "flag": "af"
    },
    {
      "country": "Albania",
      "city": "Tirana",
      "flag": "al"
    },
    {
      "country": "Algeria",
      "city": "Alger",
      "flag": "dz"
    },
    {
      "country": "American Samoa",
      "city": "Fagatogo",
      "flag": "as"
    },
    {
      "country": "Andorra",
      "city": "Andorra la Vella",
      "flag": "ad"
    },
    {
      "country": "Angola",
      "city": "Luanda",
      "flag": "ao"
    },
    {
      "country": "Anguilla",
      "city": "The Valley",
      "flag": "ai"
    },
    {
      "country": "Antigua and Barbuda",
      "city": "Saint John's",
      "flag": "ag"
    },
    {
      "country": "Argentina",
      "city": "Buenos Aires",
      "flag": "ar"
    },
    {
      "country": "Armenia",
      "city": "Yerevan",
      "flag": "am"
    },
    {
      "country": "Aruba",
      "city": "Oranjestad",
      "flag": "aw"
    },
    {
      "country": "Australia",
      "city": "Canberra",
      "flag": "au"
    },
    {
      "country": "Austria",
      "city": "Wien",
      "flag": "at"
    },
    {
      "country": "Azerbaijan",
      "city": "Baku",
      "flag": "az"
    },
    {
      "country": "Bahamas",
      "city": "Nassau",
      "flag": "bs"
    },
    {
      "country": "Bahrain",
      "city": "al-Manama",
      "flag": "bh"
    },
    {
      "country": "Bangladesh",
      "city": "Dhaka",
      "flag": "bd"
    },
    {
      "country": "Barbados",
      "city": "Bridgetown",
      "flag": "bb"
    },
    {
      "country": "Belarus",
      "city": "Minsk",
      "flag": "by"
    },
    {
      "country": "Belgium",
      "city": "Bruxelles [Brussel]",
      "flag": "be"
    },
    {
      "country": "Belize",
      "city": "Belmopan",
      "flag": "bz"
    },
    {
      "country": "Benin",
      "city": "Porto-Novo",
      "flag": "bj"
    },
    {
      "country": "Bermuda",
      "city": "Hamilton",
      "flag": "bm"
    },
    {
      "country": "Bhutan",
      "city": "Thimphu",
      "flag": "bt"
    },
    {
      "country": "Bolivia",
      "city": "La Paz",
      "flag": "bo"
    },
    {
      "country": "Bosnia and Herzegovina",
      "city": "Sarajevo",
      "flag": "ba"
    },
    {
      "country": "Botswana",
      "city": "Gaborone",
      "flag": "bw"
    },
    {
      "country": "Brazil",
      "city": "Brasília",
      "flag": "br"
    },
    {
      "country": "Brunei",
      "city": "Bandar Seri Begawan",
      "flag": "bn"
    },
    {
      "country": "Bulgaria",
      "city": "Sofia",
      "flag": "bg"
    },
    {
      "country": "Burkina Faso",
      "city": "Ouagadougou",
      "flag": "bf"
    },
    {
      "country": "Burundi",
      "city": "Bujumbura",
      "flag": "bi"
    },
    {
      "country": "Cambodia",
      "city": "Phnom Penh",
      "flag": "kh"
    },
    {
      "country": "Cameroon",
      "city": "Yaound",
      "flag": "cm"
    },
    {
      "country": "Canada",
      "city": "Ottawa",
      "flag": "ca"
    },
    {
      "country": "Cape Verde",
      "city": "Praia",
      "flag": "cv"
    },
    {
      "country": "Cayman Islands",
      "city": "George Town",
      "flag": "ky"
    },
    {
      "country": "Central African Republic",
      "city": "Bangui",
      "flag": "cf"
    },
    {
      "country": "Chad",
      "city": "N'Djam",
      "flag": "td"
    },
    {
      "country": "Chile",
      "city": "Santiago de Chile",
      "flag": "cl"
    },
    {
      "country": "China",
      "city": "Peking",
      "flag": "cn"
    },
    {
      "country": "Christmas Island",
      "city": "Flying Fish Cove",
      "flag": "cx"
    },
    {
      "country": "Cocos (Keeling) Islands",
      "city": "West Island",
      "flag": "cc"
    },
    {
      "country": "Colombia",
      "city": "Santaf",
      "flag": "co"
    },
    {
      "country": "Comoros",
      "city": "Moroni",
      "flag": "km"
    },
    {
      "country": "Congo",
      "city": "Brazzaville",
      "flag": "cg"
    },
    {
      "country": "Cook Islands",
      "city": "Avarua",
      "flag": "ck"
    },
    {
      "country": "Costa Rica",
      "city": "San Jos",
      "flag": "cr"
    },
    {
      "country": "Croatia",
      "city": "Zagreb",
      "flag": "hr"
    },
    {
      "country": "Cuba",
      "city": "La Habana",
      "flag": "cu"
    },
    {
      "country": "Cyprus",
      "city": "Nicosia",
      "flag": "cy"
    },
    {
      "country": "Czech Republic",
      "city": "Praha",
      "flag": "cz"
    },
    {
      "country": "Denmark",
      "city": "Copenhagen",
      "flag": "dk"
    },
    {
      "country": "Djibouti",
      "city": "Djibouti",
      "flag": "dj"
    },
    {
      "country": "Dominica",
      "city": "Roseau",
      "flag": "dm"
    },
    {
      "country": "Dominican Republic",
      "city": "Santo Domingo de Guzm",
      "flag": "do"
    },
    {
      "country": "Ecuador",
      "city": "Quito",
      "flag": "ec"
    },
    {
      "country": "Egypt",
      "city": "Cairo",
      "flag": "eg"
    },
    {
      "country": "El Salvador",
      "city": "San Salvador",
      "flag": "sv"
    },
    {
      "country": "Equatorial Guinea",
      "city": "Malabo",
      "flag": "gq"
    },
    {
      "country": "Eritrea",
      "city": "Asmara",
      "flag": "er"
    },
    {
      "country": "Estonia",
      "city": "Tallinn",
      "flag": "ee"
    },
    {
      "country": "Ethiopia",
      "city": "Addis Abeba",
      "flag": "et"
    },
    {
      "country": "Falkland Islands",
      "city": "Stanley",
      "flag": "fk"
    },
    {
      "country": "Faroe Islands",
      "city": "Tórshavn",
      "flag": "fo"
    },
    {
      "country": "Fiji Islands",
      "city": "Suva",
      "flag": "fj"
    },
    {
      "country": "Finland",
      "city": "Helsinki [Helsingfors]",
      "flag": "fi"
    },
    {
      "country": "France",
      "city": "Paris",
      "flag": "fr"
    },
    {
      "country": "French Guiana",
      "city": "Cayenne",
      "flag": "gf"
    },
    {
      "country": "French Polynesia",
      "city": "Papeete",
      "flag": "pf"
    },
    {
      "country": "Gabon",
      "city": "Libreville",
      "flag": "ga"
    },
    {
      "country": "Gambia",
      "city": "Banjul",
      "flag": "gm"
    },
    {
      "country": "Georgia",
      "city": "Tbilisi",
      "flag": "ge"
    },
    {
      "country": "Germany",
      "city": "Berlin",
      "flag": "de"
    },
    {
      "country": "Ghana",
      "city": "Accra",
      "flag": "gh"
    },
    {
      "country": "Gibraltar",
      "city": "Gibraltar",
      "flag": "gi"
    },
    {
      "country": "Greece",
      "city": "Athenai",
      "flag": "gr"
    },
    {
      "country": "Greenland",
      "city": "Nuuk",
      "flag": "gl"
    },
    {
      "country": "Grenada",
      "city": "Saint George's",
      "flag": "gd"
    },
    {
      "country": "Guadeloupe",
      "city": "Basse-Terre",
      "flag": "gp"
    },
    {
      "country": "Guam",
      "city": "Aga",
      "flag": "gu"
    },
    {
      "country": "Guatemala",
      "city": "Ciudad de Guatemala",
      "flag": "gt"
    },
    {
      "country": "Guinea",
      "city": "Conakry",
      "flag": "gn"
    },
    {
      "country": "Guinea-Bissau",
      "city": "Bissau",
      "flag": "gw"
    },
    {
      "country": "Guyana",
      "city": "Georgetown",
      "flag": "gy"
    },
    {
      "country": "Haiti",
      "city": "Port-au-Prince",
      "flag": "ht"
    },
    {
      "country": "Holy See (Vatican City State)",
      "city": "Citt",
      "flag": "va"
    },
    {
      "country": "Honduras",
      "city": "Tegucigalpa",
      "flag": "hn"
    },
    {
      "country": "Hong Kong",
      "city": "Victoria",
      "flag": "hk"
    },
    {
      "country": "Hungary",
      "city": "Budapest",
      "flag": "hu"
    },
    {
      "country": "Iceland",
      "city": "Reykjav",
      "flag": "is"
    },
    {
      "country": "India",
      "city": "New Delhi",
      "flag": "in"
    },
    {
      "country": "Indonesia",
      "city": "Jakarta",
      "flag": "id"
    },
    {
      "country": "Iran",
      "city": "Tehran",
      "flag": "ir"
    },
    {
      "country": "Iraq",
      "city": "Baghdad",
      "flag": "iq"
    },
    {
      "country": "Ireland",
      "city": "Dublin",
      "flag": "ie"
    },
    {
      "country": "Israel",
      "city": "Jerusalem",
      "flag": "il"
    },
    {
      "country": "Italy",
      "city": "Roma",
      "flag": "it"
    },
    {
      "country": "Ivory Coast",
      "city": "Yamoussoukro",
      "flag": "ci"
    },
    {
      "country": "Jamaica",
      "city": "Kingston",
      "flag": "jm"
    },
    {
      "country": "Japan",
      "city": "Tokyo",
      "flag": "jp"
    },
    {
      "country": "Jordan",
      "city": "Amman",
      "flag": "jo"
    },
    {
      "country": "Kazakhstan",
      "city": "Astana",
      "flag": "kz"
    },
    {
      "country": "Kenya",
      "city": "Nairobi",
      "flag": "ke"
    },
    {
      "country": "Kiribati",
      "city": "Bairiki",
      "flag": "ki"
    },
    {
      "country": "Kuwait",
      "city": "Kuwait",
      "flag": "kw"
    },
    {
      "country": "Kyrgyzstan",
      "city": "Bishkek",
      "flag": "kg"
    },
    {
      "country": "Laos",
      "city": "Vientiane",
      "flag": "la"
    },
    {
      "country": "Latvia",
      "city": "Riga",
      "flag": "lv"
    },
    {
      "country": "Lebanon",
      "city": "Beirut",
      "flag": "lb"
    },
    {
      "country": "Lesotho",
      "city": "Maseru",
      "flag": "ls"
    },
    {
      "country": "Liberia",
      "city": "Monrovia",
      "flag": "lr"
    },
    {
      "country": "Libyan Arab Jamahiriya",
      "city": "Tripoli",
      "flag": "ly"
    },
    {
      "country": "Liechtenstein",
      "city": "Vaduz",
      "flag": "li"
    },
    {
      "country": "Lithuania",
      "city": "Vilnius",
      "flag": "lt"
    },
    {
      "country": "Luxembourg",
      "city": "Luxembourg [Luxemburg/L",
      "flag": "lu"
    },
    {
      "country": "Macao",
      "city": "Macao",
      "flag": "mo"
    },
    {
      "country": "North Macedonia",
      "city": "Skopje",
      "flag": "mk"
    },
    {
      "country": "Madagascar",
      "city": "Antananarivo",
      "flag": "mg"
    },
    {
      "country": "Malawi",
      "city": "Lilongwe",
      "flag": "mw"
    },
    {
      "country": "Malaysia",
      "city": "Kuala Lumpur",
      "flag": "my"
    },
    {
      "country": "Maldives",
      "city": "Male",
      "flag": "mv"
    },
    {
      "country": "Mali",
      "city": "Bamako",
      "flag": "ml"
    },
    {
      "country": "Malta",
      "city": "Valletta",
      "flag": "mt"
    },
    {
      "country": "Marshall Islands",
      "city": "Dalap-Uliga-Darrit",
      "flag": "mh"
    },
    {
      "country": "Martinique",
      "city": "Fort-de-France",
      "flag": "mq"
    },
    {
      "country": "Mauritania",
      "city": "Nouakchott",
      "flag": "mr"
    },
    {
      "country": "Mauritius",
      "city": "Port-Louis",
      "flag": "mu"
    },
    {
      "country": "Mayotte",
      "city": "Mamoutzou",
      "flag": "yt"
    },
    {
      "country": "Mexico",
      "city": "Ciudad de M",
      "flag": "mx"
    },
    {
      "country": "Micronesia, Federated States of",
      "city": "Palikir",
      "flag": "fm"
    },
    {
      "country": "Moldova",
      "city": "Chisinau",
      "flag": "md"
    },
    {
      "country": "Monaco",
      "city": "Monaco-Ville",
      "flag": "mc"
    },
    {
      "country": "Mongolia",
      "city": "Ulan Bator",
      "flag": "mn"
    },
    {
      "country": "Montserrat",
      "city": "Plymouth",
      "flag": "ms"
    },
    {
      "country": "Morocco",
      "city": "Rabat",
      "flag": "ma"
    },
    {
      "country": "Mozambique",
      "city": "Maputo",
      "flag": "mz"
    },
    {
      "country": "Myanmar",
      "city": "Rangoon (Yangon)",
      "flag": "mm"
    },
    {
      "country": "Namibia",
      "city": "Windhoek",
      "flag": "na"
    },
    {
      "country": "Nauru",
      "city": "Yaren",
      "flag": "nr"
    },
    {
      "country": "Nepal",
      "city": "Kathmandu",
      "flag": "np"
    },
    {
      "country": "Netherlands",
      "city": "Amsterdam",
      "flag": "nl"
    },
    {
      "country": "Netherlands Antilles",
      "city": "Willemstad",
      "flag": "an"
    },
    {
      "country": "New Caledonia",
      "city": "Noum",
      "flag": "nc"
    },
    {
      "country": "New Zealand",
      "city": "Wellington",
      "flag": "nz"
    },
    {
      "country": "Nicaragua",
      "city": "Managua",
      "flag": "ni"
    },
    {
      "country": "Niger",
      "city": "Niamey",
      "flag": "ne"
    },
    {
      "country": "Nigeria",
      "city": "Abuja",
      "flag": "ng"
    },
    {
      "country": "Niue",
      "city": "Alofi",
      "flag": "nu"
    },
    {
      "country": "Norfolk Island",
      "city": "Kingston",
      "flag": "nf"
    },
    {
      "country": "North Korea",
      "city": "Pyongyang",
      "flag": "kp"
    },
    {
      "country": "Northern Ireland",
      "city": "Belfast",
      "flag": "gb"
    },
    {
      "country": "Northern Mariana Islands",
      "city": "Garapan",
      "flag": "mp"
    },
    {
      "country": "Norway",
      "city": "Oslo",
      "flag": "no"
    },
    {
      "country": "Oman",
      "city": "Masqat",
      "flag": "om"
    },
    {
      "country": "Pakistan",
      "city": "Islamabad",
      "flag": "pk"
    },
    {
      "country": "Palau",
      "city": "Koror",
      "flag": "pw"
    },
    {
      "country": "Palestine",
      "city": "Gaza",
      "flag": "ps"
    },
    {
      "country": "Panama",
      "city": "Ciudad de Panam",
      "flag": "pa"
    },
    {
      "country": "Papua New Guinea",
      "city": "Port Moresby",
      "flag": "pg"
    },
    {
      "country": "Paraguay",
      "city": "Asunci",
      "flag": "py"
    },
    {
      "country": "Peru",
      "city": "Lima",
      "flag": "pe"
    },
    {
      "country": "Philippines",
      "city": "Manila",
      "flag": "ph"
    },
    {
      "country": "Pitcairn",
      "city": "Adamstown",
      "flag": "pn"
    },
    {
      "country": "Poland",
      "city": "Warszawa",
      "flag": "pl"
    },
    {
      "country": "Portugal",
      "city": "Lisboa",
      "flag": "pt"
    },
    {
      "country": "Puerto Rico",
      "city": "San Juan",
      "flag": "pr"
    },
    {
      "country": "Qatar",
      "city": "Doha",
      "flag": "qa"
    },
    {
      "country": "Reunion",
      "city": "Saint-Denis",
      "flag": "re"
    },
    {
      "country": "Romania",
      "city": "Bucuresti",
      "flag": "ro"
    },
    {
      "country": "Russian Federation",
      "city": "Moscow",
      "flag": "ru"
    },
    {
      "country": "Rwanda",
      "city": "Kigali",
      "flag": "rw"
    },
    {
      "country": "Saint Helena",
      "city": "Jamestown",
      "flag": "sh"
    },
    {
      "country": "Saint Kitts and Nevis",
      "city": "Basseterre",
      "flag": "kn"
    },
    {
      "country": "Saint Lucia",
      "city": "Castries",
      "flag": "lc"
    },
    {
      "country": "Saint Pierre and Miquelon",
      "city": "Saint-Pierre",
      "flag": "pm"
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "city": "Kingstown",
      "flag": "vc"
    },
    {
      "country": "Samoa",
      "city": "Apia",
      "flag": "ws"
    },
    {
      "country": "San Marino",
      "city": "San Marino",
      "flag": "sm"
    },
    {
      "country": "Sao Tome and Principe",
      "city": "S",
      "flag": "st"
    },
    {
      "country": "Saudi Arabia",
      "city": "Riyadh",
      "flag": "sa"
    },
    
    {
      "country": "Senegal",
      "city": "Dakar",
      "flag": "sn"
    },
    {
      "country": "Seychelles",
      "city": "Victoria",
      "flag": "sc"
    },
    {
      "country": "Sierra Leone",
      "city": "Freetown",
      "flag": "sl"
    },
    {
      "country": "Singapore",
      "city": "Singapore",
      "flag": "sg"
    },
    {
      "country": "Slovakia",
      "city": "Bratislava",
      "flag": "sk"
    },
    {
      "country": "Slovenia",
      "city": "Ljubljana",
      "flag": "si"
    },
    {
      "country": "Solomon Islands",
      "city": "Honiara",
      "flag": "sb"
    },
    {
      "country": "Somalia",
      "city": "Mogadishu",
      "flag": "so"
    },
    {
      "country": "South Africa",
      "city": "Pretoria",
      "flag": "za"
    },
    {
      "country": "South Korea",
      "city": "Seoul",
      "flag": "kr"
    },
    {
      "country": "South Sudan",
      "city": "Juba",
      "flag": "ss"
    },
    {
      "country": "Spain",
      "city": "Madrid",
      "flag": "es"
    },
    {
      "country": "Sudan",
      "city": "Khartum",
      "flag": "sd"
    },
    {
      "country": "Suriname",
      "city": "Paramaribo",
      "flag": "sr"
    },
    {
      "country": "Svalbard and Jan Mayen",
      "city": "Longyearbyen",
      "flag": "sj"
    },
    {
      "country": "Swaziland",
      "city": "Mbabane",
      "flag": "sz"
    },
    {
      "country": "Sweden",
      "city": "Stockholm",
      "flag": "se"
    },
    {
      "country": "Switzerland",
      "city": "Bern",
      "flag": "ch"
    },
    {
      "country": "Syria",
      "city": "Damascus",
      "flag": "sy"
    },
    {
      "country": "Tajikistan",
      "city": "Dushanbe",
      "flag": "tj"
    },
    {
      "country": "Tanzania",
      "city": "Dodoma",
      "flag": "tz"
    },
    {
      "country": "Thailand",
      "city": "Bangkok",
      "flag": "th"
    },
    {
      "country": "Togo",
      "city": "Lom",
      "flag": "tg"
    },
    {
      "country": "Tokelau",
      "city": "Fakaofo",
      "flag": "tk"
    },
    {
      "country": "Tonga",
      "city": "Nuku'alofa",
      "flag": "to"
    },
    {
      "country": "Trinidad and Tobago",
      "city": "Port-of-Spain",
      "flag": "tt"
    },
    {
      "country": "Tunisia",
      "city": "Tunis",
      "flag": "tn"
    },
    {
      "country": "Turkey",
      "city": "Ankara",
      "flag": "tr"
    },
    {
      "country": "Turkmenistan",
      "city": "Ashgabat",
      "flag": "tm"
    },
    {
      "country": "Turks and Caicos Islands",
      "city": "Cockburn Town",
      "flag": "tc"
    },
    {
      "country": "Tuvalu",
      "city": "Funafuti",
      "flag": "tv"
    },
    {
      "country": "Uganda",
      "city": "Kampala",
      "flag": "ug"
    },
    {
      "country": "Ukraine",
      "city": "Kyiv",
      "flag": "ua"
    },
    {
      "country": "United Arab Emirates",
      "city": "Abu Dhabi",
      "flag": "ae"
    },
    {
      "country": "United Kingdom",
      "city": "London",
      "flag": "gb"
    },
    {
      "country": "United States",
      "city": "Washington",
      "flag": "us"
    },
    {
      "country": "Uruguay",
      "city": "Montevideo",
      "flag": "uy"
    },
    {
      "country": "Uzbekistan",
      "city": "Taskent",
      "flag": "uz"
    },
    {
      "country": "Vanuatu",
      "city": "Port-Vila",
      "flag": "vu"
    },
    {
      "country": "Venezuela",
      "city": "Caracas",
      "flag": "ve"
    },
    {
      "country": "Vietnam",
      "city": "Hanoi",
      "flag": "vn"
    },
    {
      "country": "Virgin Islands, British",
      "city": "Road Town",
      "flag": "vg"
    },
    {
      "country": "Virgin Islands, U.S.",
      "city": "Charlotte Amalie",
      "flag": "vi"
    },
    {
      "country": "Wallis and Futuna",
      "city": "Mata-Utu",
      "flag": "wf"
    },
    {
      "country": "Western Sahara",
      "city": "El-Aai",
      "flag": "eh"
    },
    {
      "country": "Yemen",
      "city": "Sanaa",
      "flag": "ye"
    },
    {
      "country": "Zambia",
      "city": "Lusaka",
      "flag": "zm"
    },
    {
      "country": "Zimbabwe",
      "city": "Harare",
      "flag": "zw"
    }
  ]