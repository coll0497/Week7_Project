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
var fetchButton = $("#launch-weather");
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


/* add project modal script below */

var addProject = $("#launchProject");


addProject.click(function() {
  $(".project-modal").addClass("is-active");
});


$(".modal-close").click(function() {
   $(".project-modal").removeClass("is-active");
});

  // Get form, item, and wishlist
var projectInfo = document.querySelector('#project-info');
var pnumber = document.querySelector('#pnumber');
var address = document.querySelector('#address');
var sdate = document.querySelector('#sdate');
var fdate = document.querySelector('#fdate');
var projectItem = document.querySelector('.project-item');
var columnOne = document.querySelector('.columnOne')
var columnTwo = document.querySelector('.columnTwo')
var columnThree = document.querySelector('.columnThree')
var columnFive = document.querySelector('.columnFive')
var submit = document.querySelector('#submit')

submit.addEventListener('click', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the project item is empty
	if (projectItem.value.length < 1) return;

	// Add item to project info
	columnOne.innerHTML += '<li>' + pnumber.value + '</li>';
    columnTwo.innerHTML += '<li>' + address.value + '</li>';
    columnThree.innerHTML += '<li>' + sdate.value + '</li>';
    columnFive.innerHTML += '<li>' + fdate.value + '</li>';

	// Clear input
	projectItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('pnumber', columnOne.innerHTML);
    localStorage.setItem('address', columnTwo.innerHTML);
    localStorage.setItem('sdate', columnThree.innerHTML);
    localStorage.setItem('fdate', columnFive.innerHTML);

}, false);

// Check for saved project items
var saved = localStorage.getItem('projectItem');

// If there are any saved items, update our list
if (saved) {
	columnOne.innerHTML = saved;
    columnTwo.innerHTML = saved;
    columnThree.innerHTML = saved;
    columnFive.innerHTML = saved;
}




// function to set date to red if it is 36 hours past finish date
/* var fdate = document.querySelector('#fdate');

console.log(moment("not a real date").isValid());// false

var hoursAgo = moment(fdate).startOf('hour').fromNow()
  console.log(hoursAgo)

function changeRed (fdate) {
fdate.setAttribute("color:red");
}

if (hoursAgo > 36); {
 .then changeRed(fdate);
} */