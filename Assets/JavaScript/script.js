function myFunction() {
    // Declare variables
    var input, filter, tr, td, a, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value;
    tr = document.getElementById("tableContents");
    td = tr.getElementsByTagName('td');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < td.length; i++) {
      a = td[i].getElementsByClassName("columnOne", "columnTwo")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.indexOf(filter) > -1) {
        td[i].style.display = "";
      } else {
        td[i].style.display = "none";
      }
    }
  }
// $(document).foundation()

// weather api 
var current = document.getElementById('current');
var forecast = document.getElementById('forecast');
var fetchButton = $("#launchModal");
var today = document.getElementById('today');
var tomorrow = document.getElementById('tomorrow');
function getApi() {
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

// check weather button cals weather api and modal function
fetchButton.click(function() {
  getApi();
  $(".modal").addClass("is-active");
});


$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});