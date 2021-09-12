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
        //for (var i = 0; i < data.length; i++) {
          //var current = document.createElement('h3');
          //var forecast = document.createElement('h3');
          today.innerHTML = "Today's weather for San Antonio is ";
          tomorrow.innerHTML = "Tomorrow's weather will be ";
          current.innerHTML = data.current.condition.text;
          forecast.innerHTML = data.forecast.forecastday[0].day.condition.text;
      })

  };



/* var btn = document.querySelector("myBtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function()  {
  modal.style.display = "none";
}

window.onclick = function(event)  {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

fetchButton.click(function() {
  getApi();
  $(".modal").addClass("is-active");
});


$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});