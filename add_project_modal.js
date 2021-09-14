
/* add project modal script below

var addProject = $("#launchProject");


addProject.click(function() {
    $(".modal").addClass("is-active");
  });
  
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
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
} */




/* function to set date to red if it is 36 hours past finish date
var fdate = document.querySelector('#fdate');

console.log(moment("not a real date").isValid());// false

var hoursAgo = moment(fdate).startOf('hour').fromNow()
  console.log(hoursAgo)

function changeRed (fdate); {
fdate.setAttribute("color:red");
}

if (hoursAgo > 36); {
 then changeRed(fdate);
} */