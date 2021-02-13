google.charts.load("current", { packages: ["corechart"] });

// CPU
google.charts.setOnLoadCallback(drawCpuHistogram);
google.charts.setOnLoadCallback(drawCpuUsage);

// RAM
google.charts.setOnLoadCallback(drawRamHistogram);
google.charts.setOnLoadCallback(drawRamUsage);

var cpuHistogram = [[new Date(), 0]];
var ramHistogram = [[new Date(), 0]];
var cpuUsage = [
  ["Used", 0],
  ["Free", 0],
];
var ramUsage = [
  ["Used", 0],
  ["Free", 0],
];
/* CPU */

function drawCpuHistogram() {
  var data = new google.visualization.DataTable();
  data.addColumn("datetime", "X");
  data.addColumn("number", "CPU");

  data.addRows(cpuHistogram);

  var cpuChartOptions = {
    width: "100%",
    hAxis: {
      textPosition: "none",
    },
    vAxis: {
      title: "Percentages",
      ticks: [0, 25, 50, 75, 100],
    },
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("cpuHistogram")
  );
  chart.draw(data, cpuChartOptions);
}
function drawCpuUsage() {
  var data = google.visualization.arrayToDataTable([
    ["Type", "Percentages"],
    ...cpuUsage,
  ]);

  var options = {
    title: "CPU Usage",
    height: 400,
    width: "auto",
    pieHole: 0.4,
    slices: {
      1: {
        color: "cyan",
      },
      0: {
        color: "lightgray",
      },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("cpuUsage")
  );
  chart.draw(data, options);
}

/* RAM */

function drawRamHistogram() {
  var data = new google.visualization.DataTable();
  data.addColumn("datetime", "X");
  data.addColumn("number", "RAM");

  data.addRows(ramHistogram);

  var ramChartOptions = {
    width: "100%",
    hAxis: {
      textPosition: "none",
    },
    vAxis: {
      title: "Percentages",
      ticks: [0, 25, 50, 75, 100],
    },
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("ramHistogram")
  );
  chart.draw(data, ramChartOptions);
}

function drawRamUsage() {
  var data = google.visualization.arrayToDataTable([
    ["Type", "Percentages"],
    ...ramUsage,
  ]);

  var options = {
    title: "RAM Usage",
    height: 400,
    width: "auto",
    pieHole: 0.4,
    slices: {
      1: {
        color: "cyan",
      },
      0: {
        color: "lightgray",
      },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("ramUsage")
  );
  chart.draw(data, options);
}
