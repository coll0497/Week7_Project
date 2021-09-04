
// line 9 weather.<condition name> not reading right
// reference https://w3collective.com/fetch-display-api-data-javascript/

var fetchButton = document.getElementById('fetch-button');

function displayWeather(data) {
    const weather = data.current[0];
    const weatherDiv = document.getElementById("weather");
    const weatherFeel = weather.cloud;
    const heading = document.createElement("h3");
    heading.innerHTML = weatherFeel;
    weatherDiv.appendChild(heading);
}

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
      });

}

fetchButton.addEventListener('click', getApi);


