function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("horn");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if (y.style.display === "inline-block") {
      y.style.display = "none";
    } else {
      y.style.display = "inline-block";
    }
  }