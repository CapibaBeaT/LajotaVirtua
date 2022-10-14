//start-Navigation-Slides-Auto
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

//end-Navigation-Slides-Auto

// $(".menuperfume").click(function () {
//   ".nav2 ul .itensPerfume".toggleClass("mostra");
// });
