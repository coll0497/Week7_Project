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