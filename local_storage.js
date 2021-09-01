// project status keeps showing up as undefined
// when comments are entered, where do they go?

var project = document.getElementById("project-names");
var status = document.getElementById("status");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

// below is an object
var projectStatus = {
  project: project.value,
  status: status.value,
  comment: comment.value.trim()
};

localStorage.setItem("projectStatus", JSON.stringify(projectStatus));
renderMessage();

});

function renderMessage() {
  var lastStatus = JSON.parse(localStorage.getItem("projectStatus"));
  if (lastStatus !== null) {
    document.querySelector(".message").textContent = lastStatus.project + 
    " is " + lastStatus.status
  }
}

