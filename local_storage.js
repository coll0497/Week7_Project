// project status keeps showing up as undefined
// when comments are entered, where do they go?

var projectname = document.getElementById("project-names");
var setstatus = document.getElementById("set-status");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

// below is an object
var projectStatus = {
  project: projectname.value,
  status: setstatus.value,
  comment: comment.value.trim()
};

localStorage.setItem("projectStatus", JSON.stringify(projectStatus));
renderMessage();

// localStorage.setItem for comment

});

function renderMessage() {
  var lastStatus = JSON.parse(localStorage.getItem("projectStatus"));
  if (lastStatus !== null) {
    document.querySelector(".message").textContent = lastStatus.project + 
    " is " + lastStatus.status
  }
}

