
// need to add function so results display on webpage
// weather may not display as table... reformat as necessary
// see HTML lines 11-21 for Check Weather function

var current = document.getElementById('current');
var forecast = document.getElementById('current');
var weather = document.getElementById('weatherBtn');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "901cbaf60cmsh5e5bea7d5f1a8bap1edabajsn89697e7fb7b8"
	}})
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        current.innerHTML = data.current.condition.text;
        forecast.innerHTML = data.forecast.forecastday[0].day.condition.text;
      });
}

weather.addEventListener('click', function(e) {
  e.preventDefault();
  getApi();
});

