google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

var cpuHistogram = [[new Date(), 0]];

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("datetime", "X");
  data.addColumn("number", "CPU");

  data.addRows(cpuHistogram);

  var cpuChartOptions = {
    height: 500,
    width: 900,
    hAxis: {
      textPosition: "none",
    },
    vAxis: {
      title: "Percentages",
      ticks: [0, 25, 50, 75, 100],
    },
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("cpuUsage")
  );
  chart.draw(data, cpuChartOptions);
}
