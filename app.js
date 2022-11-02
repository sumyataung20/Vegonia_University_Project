// Start JQUERY AREA
$(document).ready(function () {
  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });
});
// END JQUERY AREA

// Start Counter Section
var getcountervalues = document.querySelectorAll(".countervalues");

getcountervalues.forEach(function (getcountervalue) {
  getcountervalue.textContent = 0;

  const updatecounter = function () {
    const getcttarget = +getcountervalue.getAttribute("data-target");
    // console.log(getcttarget);
    // console.log(typeof getcttarget, getcttarget);
    const getctcontent = +getcountervalue.innerText;
    const incnumber = getcttarget / 100;

    if (getctcontent < getcttarget) {
      getcountervalue.textContent = getctcontent + incnumber;

      setTimeout(updatecounter, 100);
    }
  };

  updatecounter();
});

// End Counter Section

// Start Rating
// Start google code for chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Singapore", 4],
    ["Indonesia", 2],
    ["Siri Lanka", 8],
  ]);

  var options = {
    title: "International Students",
    // is3D: true,
    pieHole: 0.4,
    width: 550,
    height: 400,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear;
getyear.textContent = getfullyear;

// loginbox
// Start Login Box
$(".open-btn").click(function () {
  document.getElementById("form-popup").style.display = "block";
});

$("#formclose-btn").click(function () {
  document.getElementById("form-popup").style.display = "none";
});
// End Login Box
