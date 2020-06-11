// Paste your data here
let mydata = [
  {
    "Year": 1996,
    "Place": "Disney World",
    "Latitude": 28.385233,
    "Longitude": -81.563874
  },
  {
    "Year": 2000,
    "Place": "Dublin",
    "Latitude": 53.3498053,
    "Longitude": -6.2603097
  },
  {
    "Year": 2002,
    "Place": "Buenos Aires",
    "Latitude": -34.6036844,
    "Longitude": -58.3815591
  },
  {
    "Year": 2006,
    "Place": "Lima",
    "Latitude": -12.0463731,
    "Longitude": -77.042754
  },
  {
    "Year": 2008,
    "Place": "Bariloche",
    "Latitude": -41.1334722,
    "Longitude": -71.3102778
  },
  {
    "Year": 2008,
    "Place": "Castro",
    "Latitude": 37.7609082,
    "Longitude": -122.4350043
  },
  {
    "Year": 2010,
    "Place": "New York",
    "Latitude": 40.7127753,
    "Longitude": -74.0059728
  },
  {
    "Year": 2012,
    "Place": "Auckland",
    "Latitude": -36.8484597,
    "Longitude": 174.7633315
  },
  {
    "Year": 2015,
    "Place": "Oslo",
    "Latitude": 59.9138688,
    "Longitude": 10.7522454
  },
  {
    "Year": 2017,
    "Place": "Coyhaique",
    "Latitude": -45.5712254,
    "Longitude": -72.068265
  },
  {
    "Year": 2019,
    "Place": "Washigton",
    "Latitude": 47.7510741,
    "Longitude": -120.7401385
  },
  {
    "Year": 2021,
    "Place": "Goa",
    "Latitude": 15.2993265,
    "Longitude": 74.123996
  },
  {
    "Year": 2024,
    "Place": "Beijing",
    "Latitude": 39.9041999,
    "Longitude": 116.4073963
  },
  {
    "Year": 2025,
    "Place": "Seelampur",
    "Latitude": 28.6640177,
    "Longitude": 77.2711667
  }
];

// Mapbox token
let mytoken = "pk.eyJ1Ijoia2FyaWhpZ2giLCJhIjoiY2p1bGpnbTByMGZ1czRkbHI3aDBwdHk1eiJ9.KJSyhm6rfumygW_BhUDHMQ";

// Initialize Leaflet, declare the ID from the HTML div, set initial location and zoom
let mymap = L.map('mapid').setView([40.6933, -73.9874], 2);

// Initialize the base tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mytoken
}).addTo(mymap);

// Loop through the dataset and create markers and popups
for (let i = 0; i < mydata.length; i++) {
  
  let myplace = mydata[i];

  let popupText = "<h3>" + myplace.Place + "</h3>" + myplace.Year;
  
  L.marker([myplace.Latitude, myplace.Longitude]).bindPopup(popupText).addTo(mymap);
  
}


