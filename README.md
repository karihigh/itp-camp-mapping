# 🌏 Intro to Web Mapping (Part 1: Leaflet) 🌍

## 😎 Overview

Web mapping workshop for ITP Camp 2020, a 4 week crash course for experimentations and skill sharing in art, media, and technology organized by the Interactive Telecommunications Program (ITP) at New York University.
In Part 1 of this Introduction to Web Mapping, we will go through the process of setting up a web map by using Javascript and the Leaflet.js library. For the purpose of this workshop we will be building our own simple dataset, then geocoding it to use it in a map.
The workshop takes place online through Zoom.

## Authors

Co-taught by [Winnie Yoe](https://winnieyoe.com) and [Karina Hyland](https://karinahy.com/).

## Outcomes & Goals

- Learn about map and web mapping fundamentals through the lense of critical cartography
- Introduce to [Leaflet.js](https://leafletjs.com/) an open-source Javascript library for interactive maps
- Publish a map project using Glitch

## Workshop Schedule

Duration: 2 hours

- Introduction to Maps
- Setting a base web map
- Creating a simple data set
- Placing points in the map
- Finishing detalis (title, description, legend and source)

### Note to participants

- No coding experience is required
- If you loved this session or couldn't make it, make sure to come to [Part 2](https://github.com/winnieyoe/web-mapping-workshop)

---

### Introduction to Maps (lecture)

[Slides here](https://docs.google.com/presentation/d/1M4Tfj4S7krn2nPhvGre8b2cRHG04BhfbwX0WOc6ng1M/edit?usp=sharing)

### Let's set up a map

1. Open this [project](https://glitch.com/edit/#!/itp-map-1-a) and click on Remix to start

2. Include Leaflet CSS and Javascript inside `<head>` in the `index.html` file:

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
```   
```
<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
```

3. Add a `<div>` inside the `<body>` of the `index.html` with the map ID

```
<div id="mapid"></div>
```

4. Give a height to your map in the `style.css` file using the same ID you gave it before

```
  #mapid {
    height: 600px;
  }
```

5.  Initialize the map in the `script.js` file. The coordinates will be the initial geographic center from which the map draws when it loads, and the number is the initial zoom.

```
let mymap = L.map('mapid').setView([40.69, -73.98], 13);

```
_See more about this step [here](https://leafletjs.com/reference-1.6.0.html#map-factory)_

6. Add the base map using Mapbox API as provider of tiles

```
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/outdoors-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: mytoken
  }).addTo(mymap);
  
```

_You can check out some other tiles by [Mapbox](https://docs.mapbox.com/api/maps/#styles), [Stamen](http://maps.stamen.com/#toner/12/37.7706/-122.3782) or [Thunderforest](https://www.thunderforest.com/maps/)
or design your own using [Mapbox Studio](https://www.mapbox.com/gallery/)_

7. Add an access token at the beginning of `script.js`, you can find some in the `tokens.js` file on your Glitch project. 

_For future projects you should create your own by setting up an account in [Mapbox](https://account.mapbox.com/access-tokens/), but 
for this workshop you can use the ones provided._

```
let mytoken = "";
```

7. Place a marker!

```
L.marker([40.69, -73.98]).addTo(mymap);
```

_To search for other location coordinates use [Geojson.io](http://geojson.io/#map=22/40.94671/-4.11987)_

----

At this point you should be seeing this:
<img src="https://cdn.glitch.com/5539b0ad-3e0e-488a-9ec0-ba7494efbc57%2Fitp-map-1c.png?v=1591818097929">

_See source code [here](https://glitch.com/edit/#!/itp-map-1-b)_

----

## Create a spatial dataset

1. Make a new spreadsheet using Google Drive

2. Add a column called places and write down as many as you like

3. _(optional)_ Add a second column with some additional information (ie. year, kind of trip, who) 

4. In Google Spreadsheet go to the menu and click on Add-ons > Get Add-ons

5. Search for “Geocode by Awesome Table” > Install

6. Once installed, click again on Add-ons > Geocode

7. Make sure you select the column where you wrote the places and click “Geocode!”

8. Voilá > It will automatically add columns for latitude and longitude and fill them with the information it finds

9. Download your spreadsheet as a .CSV

### Place the points in your map

1. Convert CSV to JSON. You can do it [online](https://csvjson.com/csv2json)

2. Copy the JSON output to your clipboard

3. In `script.js` load the data by making a variable `mydata = ` and paste your JSON

4. Make a the for loop 

```
for (let i = 0; i < mydata.length; i++) {
  
  let myplace = mydata[i];
  
  L.marker([myplace.Latitude, myplace.Longitude]).bindPopup(popupText).addTo(mymap);
  
}
```

5. Add a popup

```
let popupText = myplace.Place;
```

6. Add the popup onto the marker
```
L.marker([myplace.Latitude, myplace.Longitude]).bindPopup(popupText).addTo(mymap);

```

7. Add more information to your popup and add some style to it
```
  let popupText = "<h3>" + myplace.Place + "</h3>" + myplace.Year;
```

---

At this point you should be seeing this:
<img src="https://cdn.glitch.com/5539b0ad-3e0e-488a-9ec0-ba7494efbc57%2Fitp-map-1b.png?v=1591818093084">

_See source code [here](https://glitch.com/edit/#!/itp-map-1-c)_


### Finishing details _(if time allows)_

1. Add a title in the `index.html`

```
<h1>My Map</h1>
```

2. Add a description in `index.html`

```
<p>This is a map of all the places I've been and would like to got that I made during the ITP Camp 2020.</p>
```

3. Change the marker icon

---

## 🎉 Post Session Feedback & Resources

Please fill out the workshop feedback form

## Project References

### References and Further Reading

- [All Maps Lie](https://all-maps-lie-2020.netlify.app/#/) (class taught by Joey Lee for ITP, Spring 2020)
- Book: [Mapping: A Critical Introduction to Cartography and GIS](https://www.wiley.com/en-us/Mapping%3A+A+Critical+Introduction+to+Cartography+and+GIS-p-9781405121729), by Jeremy W. Crampton
- Book: [Experimental Geography: Radical approaches to landscape, cartography, and urbanism](https://www.mhpbooks.com/books/experimental-geography/), by Nato Thompson


---

**_Curriculum templates is inspired by [Eyebeam](https://github.com/eyebeam/curriculum/blob/master/TEMPLATE.md)_**
