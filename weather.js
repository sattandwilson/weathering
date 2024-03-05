let body = document.querySelector("body");
let backgroundImg = document.querySelector("#body-background");
let searchInput = document.getElementById("location");
let buttonSearch = document.querySelector("button");
let weatherLogo = document.querySelector("#weather-logo");
let cloudImg = document.querySelector(".cloud-logo");
let sunImg = document.querySelector(".sun-logo");
let tempareture = document.querySelector("#temp");
let stats = document.querySelector("h2");
let todayDate = document.querySelector("#now-date");
let Time = document.querySelector("#time");
let hrs = document.querySelector("#Hrs");
let min = document.querySelector("#Min");
let sec = document.querySelector("#Sec");
let locationInfo = document.querySelector("#location-info");
let sunriseTime = document.querySelector("#sunrise-time");
let humidiTY = document.querySelector("#humidity");
let visiblityTag = document.querySelector("#visibility");
let sunsetTime = document.querySelector("#sunset-time");
let windSpeed = document.querySelector("#wind-speed");
let cloudyNess = document.querySelector("#cloudiness");

// let pageWidth = window.innerWidth;
// console.log(pageWidth);
// if(pageWidth <= 448){
//     backgroundImg.src = "phone background.jpeg";
// }
// else {
//   backgroundImg.src = "snowy scape.jpg";
// }

let countries = [
  "Burkina Faso",
  "Mali",
  "Kiribati",
  "Djibouti",
  "Maldives",
  "Senegal",
  "Mauritania",
  "Tuvalu",
  "Palau",
  "Benin",
  "Gambia",
  "Marshall Islands",
  "Ghana",
  "Kuwait",
  "Niger",
  "Qatar",
  "Seychelles",
  "Togo",
  "Somalia",
  "Nigeria",
  "Sri Lanka",
  "Sudan",
  "Brunei",
  "Cambodia",
  "Bahrain",
  "Saint Vincent and the Grenadines",
  "Guinea-Bissau",
  "Samoa",
  "United Arab Emirates",
  "Chad",
  "Singapore",
  "Ivory Coast",
  "Thailand",
  "Sierra Leone",
  "Grenada",
  "Barbados",
  "Guyana	",
  "Indonesia",
  "Federated States of Micronesia",
  "Antigua and Barbuda",
  "Trinidad and Tobago",
  "Guinea",
  "Suriname",
  "Solomon Islands",
  "Oman",
  "Philippines",
  "Eritrea",
  "Saint Lucia",
  "Malaysia",
  "Panama",
  "Belize",
  "Comoros",
  "Venezuela",
  "Liberia",
  "Timor-Leste",
  "Papua New Guinea",
  "Tonga",
  "Cuba",
  "Gabon",
  "Bangladesh",
  "Brazil",
  "Jamaica",
  "Central African Republic",
  "Haiti",
  "Nicaragua",
  "Bahamas",
  "Costa Rica",
  "Kenya",
  "Saudi Arabia",
  "Cameroon",
  "Republic of the Congo",
  "Dominican Republic",
  "Equatorial Guinea",
  "Colombia",
  "Saint Kitts and Nevis",
  "Vietnam",
  "El Salvador",
  "Fiji",
  "Democratic Republic of the Congo",
  "Vanuatu",
  "Yemen",
  "Mozambique",
  "São Tomé and Príncipe",
  "India",
  "Paraguay",
  "Honduras",
  "Guatemala",
  "Cape Verde",
  "Laos",
  "Uganda",
  "Madagascar",
  "Algeria",
  "Mauritius",
  "Dominica",
  "Tanzania",
  "Ethiopia",
  "Egypt",
  "Malawi",
  "Ecuador",
  "Libya",
  "Australia",
  "Angola",
  "Bolivia",
  "Botswana",
  "Hong Kong",
  "Iraq",
  "Eswatini",
  "Zambia",
  "Mexico",
  "Zimbabwe",
  "Pakistan",
  "Namibia",
  "Burundi",
  "Peru",
  "Israel",
  "Malta",
  "Tunisia",
  "Cyprus",
  "Jordan",
  "Rwanda",
  "South Africa",
  "Syria",
  "Uruguay",
  "Iran",
  "Morocco",
  "Monaco",
  "Greece",
  "Portugal",
  "Turkmenistan",
  "Lebanon",
  "Argentina",
  "Italy",
  "Spain",
  "Myanmar",
  "San Marino",
  "New Zealand",
  "Afghanistan",
  "Uzbekistan",
  "Azerbaijan",
  "Lesotho",
  "Republic of Korea",
  "Albania",
  "Japan",
  "Croatia",
  "France",
  "Montenegro",
  "Bulgaria",
  "Serbia",
  "Turkey",
  "Bosnia and Herzegovina",
  "North Macedonia",
  "Hungary",
  "Belgium",
  "Moldova",
  "Ireland",
  "Netherlands",
  "Slovenia",
  "Romania",
  "Luxembourg",
  "United States",
  "United Kingdom",
  "Chile",
  "Germany",
  "Ukraine",
  "Nepal",
  "Poland",
  "Andorra",
  "Czech Republic",
  "China",
  "Bhutan",
  "Armenia",
  "Denmark",
  "Slovakia",
  "Tajikistan",
  "Austria",
  "Lithuania",
  "Belarus",
  "Liechtenstein",
  "Republic of Korea",
  "Georgia",
  "Latvia",
  "Kazakhstan",
  "Switzerland",
  "Kyrgyzstan",
  "Estonia",
  "Sweden",
  "Mongolia",
  "Finland",
  "Norway",
  "Iceland",
  "Canada",
  "Russia",
  "Greenland",
];

let tempar = [
  28.29, 28.25, 28.2, 28.0, 28.0, 27.85, 27.65, 27.65, 27.6, 27.55, 27.5, 27.4,
  27.2, 27.15, 27.15, 27.15, 27.15, 27.15, 27.05, 27.0, 26.95, 26.9, 26.85,
  26.8, 26.8, 26.8, 26.75, 26.7, 26.65, 26.55, 27.5, 26.35, 26.3, 26.05, 26.0,
  26.0, 26.0, 25.85, 25.85, 25.85, 25.75, 25.7, 25.7, 25.65, 25.6, 25.55, 25.5,
  25.5, 25.4, 25.4, 25.35, 25.3, 25.35, 25.3, 25.25, 25.25, 25.25, 25.2, 25.05,
  25.0, 24.95, 24.95, 24.9, 24.9, 24.9, 24.85, 24.8, 24.75, 24.65, 24.6, 24.55,
  24.55, 24.55, 24.5, 24.5, 24.45, 24.45, 24.4, 24.0, 23.95, 23.85, 23.8, 23.75,
  23.65, 23.55, 23.5, 23.45, 23.3, 22.8, 22.8, 22.65, 22.5, 22.4, 22.35, 22.35,
  22.2, 22.1, 21.9, 21.85, 21.8, 21.65, 21.55, 21.55, 21.5, 21.45, 21.4, 21.4,
  21.4, 21.0, 21.0, 20.2, 19.95, 19.8, 19.6, 19.2, 19.2, 19.2, 18.45, 18.3,
  17.85, 17.75, 17.75, 17.55, 17.25, 17.1, 16.4, 13.03, 12.15, 12.1, 12.0, 11.8,
  11.45, 11.3, 11.05, 10.9, 10.74, 10.6, 10.05, 9.95, 9.85, 9.5, 9.4, 9.15,
  10.9, 10.7, 10.55, 10.55, 10.55, 9.9, 9.85, 9.8, 9.75, 9.55, 9.45, 9.3, 9.25,
  8.9, 8.8, 8.65, 8.55, 8.45, 8.45, 8.4, 8.3, 8.1, 7.85, 7.6, 7.55, 7.5, 7.4,
  7.15, 6.95, 6.8, 6.4, 6.35, 6.2, 6.15, 5.8, 5.7, 5.65, 5.6, 5.5, 5.1, 2.1,
  2.0, 1.75, 1.7, 1.55, 1.5, -0.7, -5.1, -5.35, -5.6,
];

let statsOption = [
  "SUNNY",
  "FOGY",
  "PARTLY CLOUDY",
  "CLOUDY",
  "LIGHT RAIN",
  "MEDIUM RAIN",
  "HEAVY RAIN",
  "THUNDERSTORM",
  "SNOWFALL",
];

let backImg = [];
backImg.push("sunny weather.jpg");
backImg.push("foggy weather.jpg");
backImg.push("partly cloudy.jpg");
backImg.push("cloudy sky.jpg");
backImg.push("light rain.jpg");
backImg.push("medium rain horizontal.jpg");
backImg.push("heavy rain.jpg");
backImg.push("thunderstorm weather.jpg");
backImg.push("snowfall.jpg");

let logo = [];
logo.push("sunny logo.png");
logo.push("foggy icon.png");
logo.push("cloudy logo.png");
logo.push("cloud icon.png");
logo.push("light rain icon.png");
logo.push("medium rain icon.png");
logo.push("heavy rain icon.webp");
logo.push("thunderstorm icon.png");
logo.push("snowfall icon.png");

let sunnyWind = Math.floor(Math.random() * (10 - 1) + 1);
let fogyWind = Math.floor(Math.random() * (20 - 2) + 2);
let partlyCloudyWind = Math.floor(Math.random() * (28 - 8) + 8);
let cloudyWind = Math.floor(Math.random() * (40 - 12) + 12);
let lightRainWind = Math.floor(Math.random() * (25 - 2) + 2);
let mediumRainWind = Math.floor(Math.random() * (30 - 2) + 2);
let heavyRainWind = Math.floor(Math.random() * (35 - 2) + 2);
let ThunderStormWind = Math.floor(Math.random() * (200 - 60) + 60);
let snowFallWind = Math.floor(Math.random() * (60 - 2) + 2);

let windArr = [
  sunnyWind,
  fogyWind,
  partlyCloudyWind,
  cloudyWind,
  lightRainWind,
  mediumRainWind,
  heavyRainWind,
  ThunderStormWind,
  snowFallWind,
];

let Visibility = [
  "23-50 Kms",
  "0.2-0.5 kms",
  "20-45 Kms",
  "19-42 Kms",
  "5.9-10 Kms",
  "2.8-4 Kms",
  "1.9-2 Kms",
  "1.5-2 Kms",
  "0.5-1 Kms",
];

let clouds = [
  "0-5%",
  "2-10%",
  "15-45%",
  "50-85%",
  "35-75%",
  "50-80%",
  "85-95%",
  "99-100%",
  "95-100%",
];

function getSunHours() {
  return Math.floor(Math.random() * (8 - 5) + 5);
}
function getSunMins() {
  return Math.floor(Math.random() * 60);
}

let countryToLow = countries.map((index) => {
  return index.toLowerCase();
});

let searchListening = searchInput.addEventListener("keydown", () => {
  buttonSearch.disabled = false;
  // backgroundImg.src = "snowy scape.jpg";
  // sunImg.src = "sunny logo.png";
  // weatherLogo.appendChild(cloudImg);
  // sunImg.style.width = "60%";
});

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();

  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();
  todayDate.innerHTML = `DATE: ${date}:${month + 1}:${year}`;
}, 1000);

buttonSearch.addEventListener("click", () => {
  let inSearch = searchInput.value;
  goLow = inSearch.toLowerCase();
  goUp = inSearch.toUpperCase();
  let found = false;
  let countryIndex;
  for (let i = 0; i < countries.length; i++) {
    if (goLow == countryToLow[i]) {
      found = true;
      countryIndex = countryToLow.indexOf(countryToLow[i]);
      break;
    }
  }

  if (found) {
    locationInfo.innerHTML = `Location: ${goUp}`;
    function getOption() {
      return Math.floor(Math.random() * statsOption.length);
    }
    let option = getOption();
    backgroundImg.src = backImg[option];
    stats.innerHTML = statsOption[option];
    sunImg.src = logo[option];
    weatherLogo.removeChild(cloudImg);
    sunImg.style.width = "90%";
    tempareture.innerHTML = `${tempar[countryIndex]} \u00B0C`;
    visiblityTag.innerHTML = `Visibility: ${Visibility[option]}`;
    cloudyNess.innerHTML = `Cloudiness: ${clouds[option]}`;
    windSpeed.innerHTML = `Windspeed: ${windArr[option]} Km/h`;
    function getHumidity() {
      return Math.floor(Math.random() * (97 - 23) + 23);
    }
    humidiTY.innerHTML = `Humidity: ${getHumidity()}%`;
    sunriseTime.innerHTML = `Sunrise: ${getSunHours()}:${getSunMins()} AM`;
    sunsetTime.innerHTML = `Sunset; ${getSunHours()}:${getSunMins()} PM`;
  } else {
    if (goLow == "") {
      locationInfo.innerHTML = `Location:`;
      stats.innerHTML = "STATUS";
      sunImg.src = "sunny logo.png";
      weatherLogo.appendChild(cloudImg);
      sunImg.style.width = "60%";
      tempareture.innerHTML = `TEMPERATURE`;
      visiblityTag.innerHTML = `Visibility:`;
      cloudyNess.innerHTML = `Cloudiness:`;
      humidiTY.innerHTML = `Humidity:`;
      windSpeed.innerHTML = `Windspeed:`;
      sunriseTime.innerHTML = `Sunrise:`;
      sunsetTime.innerHTML = `Sunset:`;
      backgroundImg.src = "snowy scape.jpg";
    } else {
      locationInfo.innerHTML = `Location: INVALID`;
      stats.innerHTML = "INVALID STATUS";
      sunImg.src = "sunny logo.png";
      weatherLogo.appendChild(cloudImg);
      sunImg.style.width = "60%";
      tempareture.innerHTML = `Location: INVALID`;
      visiblityTag.innerHTML = `Visibility: INVALID`;
      cloudyNess.innerHTML = `Cloudiness: INVALID`;
      humidiTY.innerHTML = `Humidity: INVALID`;
      windSpeed.innerHTML = `Windspeed: INVALID`;
      sunriseTime.innerHTML = `Sunrise: 00:00`;
      sunsetTime.innerHTML = `Sunset: 00:00`;
      backgroundImg.src = "snowy scape.jpg";
    }
  }

  buttonSearch.disabled = true;
});
