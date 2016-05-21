var _ = require('lodash');
var rootURL = 'http://api.openweathermap.org/data/2.5/weather?APPID=61a3a6af3f06bbbd1b766dcd1fd425cf'

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + '˚F';
}

module.exports = function(latitude, longitude) {
  var url = `${rootURL}&lat=${latitude}&lon=${longitude}`; // Template strings

  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}
