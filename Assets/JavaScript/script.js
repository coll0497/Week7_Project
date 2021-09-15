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

//   };

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
const walked = document.querySelector('#walked');
var projectItem = document.querySelector('.project-item');
var columnOne = document.querySelector('.columnOne');
var columnTwo = document.querySelector('.columnTwo');
var columnThree = document.querySelector('.columnThree');
const columnFour = document.querySelector('.columnFour');
var columnFive = document.querySelector('.columnFive');
var submit = document.querySelector('#submit');



submit.addEventListener('click', function (event) {
	// Don't submit the form
	event.preventDefault();

	// Ignore it if the project item is empty
	if (projectItem.value.length < 1) return;

	// Add item to project info
	columnOne.innerHTML += '<li>' + pnumber.value + '</li>';
  columnTwo.innerHTML += '<li>' + address.value + '</li>';
  columnThree.innerHTML += '<li>' + sdate.value + '</li>';
  columnFour.innerHTML += '<li>' + walked.value + '</li>';
  columnFive.innerHTML += '<li>' + fdate.value + '</li>';

	// Clear input
	projectItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('pnumber', columnOne.innerHTML);
  localStorage.setItem('address', columnTwo.innerHTML);
  localStorage.setItem('sdate', columnThree.innerHTML);
  localStorage.setItem('fdate', columnFive.innerHTML);
  localStorage.setItem('walked', columnFour.innerHTML);

}, false);
// Submit and cancel functions
const submitBtn = $('#submit');
const cancelBtn = $('#cancel');


$(function() {
  // Function for the submit button to work.
    $(submitBtn).click(function() {
      $('.modal').removeClass('is-active');
      // Function for the cancel button to work.
      $(cancelBtn).click(function() {
        $('.modal').removeClass('is-active');
      })
    })
});

// Check for saved project items
var pNumberSaved = localStorage.getItem('pnumber');
columnOne.innerHTML = pNumberSaved;
var addressSaved = localStorage.getItem('address');
columnTwo.innerHTML = addressSaved;
var sDateSaved = localStorage.getItem('sdate');
columnThree.innerHTML = sDateSaved;
var walkedSaved = localStorage.getItem('walked');
columnFour.innerHTML = walkedSaved;
var fDateSaved = localStorage.getItem('fdate');
columnFive.innerHTML = fDateSaved;



/* function to set date to red if it is 36 hours past finish date*/

// Create a function so that when the Submit button was clicked, 
// the time stamp is saved. 

// Create a function for the job walked status and finished status.
// Make the start date have a mandatory date styling to create conditionals
// based on the hours from the timestamp

// if timestamp <= 12 set class of finished status to green
// if else timestamp <= 36 set class of finished status to yellow

// if else time stamp <= 48 set class to red.

