# AirCare Weather Dashboard

This is a weather dashboard I built while learning JavaScript and AJAX.

I wanted to create something practical rather than just another small coding exercise, so I built a simple weather search tool where the user can enter a town or postcode and see the current weather information.

## What it does

* Search for a town or postcode
* Shows the city and country
* Shows the current temperature
* Shows the feels-like temperature
* Shows humidity
* Shows wind speed
* Shows a simple weather description
* Displays an error message if the location cannot be found
* Works on different screen sizes

## Technologies I used

* HTML
* CSS
* JavaScript
* Fetch API
* Open-Meteo API
* Git
* GitHub

## How it works

When a location is entered, JavaScript first sends it to the Open-Meteo Geocoding API.

The API gives me the latitude and longitude for that location.

JavaScript then uses those coordinates to make a second request to the Open-Meteo Weather API. The weather information returned from that request is then displayed on the page.

I also added a small function to turn the weather codes returned by the API into descriptions such as “Clear sky”, “Cloudy”, “Rain” and “Snow”.

The page updates without needing to refresh the browser.

## What I learned

This project gave me more practice with JavaScript and helped me understand AJAX much better.

I learned how to:

* Use fetch() to communicate with an API
* Work with JSON data
* Make more than one API request
* Use information from one API request to make another request
* Work with objects and nested data
* Create and use JavaScript functions
* Use if and else if statements
* Display API data using template literals
* Add basic error handling
* Use CSS Grid to create the weather cards
* Use Git and GitHub to save and publish my project



## Running the project

To run the project on my computer, I open the project in VS Code and use Live Server to open index.html.

I can then enter a town or postcode and search for its current weather.

## About the project

I created this project as part of my front-end development learning journey.

It is one of my JavaScript/AJAX mini-projects and is part of my growing GitHub portfolio.