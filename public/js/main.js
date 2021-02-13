var socket = io();
socket.on("cpu-info", (data) => {
  if (cpuHistogram.length >= 60) cpuHistogram.shift();
  cpuHistogram.push([new Date(), data]);
  drawChart();
});
// socket.on('ram-info', (data) => {
//   console.log(data);
// })
// socket.on('drive-info', (data) => {
//   console.log(data);
// })
