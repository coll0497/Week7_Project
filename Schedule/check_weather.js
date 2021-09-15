// borrowed from activity 9 Demo Dynamic
// reference https://w3collective.com/fetch-display-api-data-javascript/
var current = document.getElementById('current');
var forecast = document.getElementById('forecast');
var fetchButton = $("#launchModal");
var today = document.getElementById('today');
var tomorrow = document.getElementById('tomorrow');
function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q='San Antonio'&days=1", {
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
        today.innerHTML = "Today's weather for San Antonio is ";
        tomorrow.innerHTML = "Tomorrow's weather will be ";
        current.innerHTML = data.current.condition.text;
      forecast.innerHTML = data.forecast.forecastday[0].day.condition.text;
      })

  };

fetchButton.click(function() {
  getApi();
  $(".modal").addClass("is-active");
});


$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});