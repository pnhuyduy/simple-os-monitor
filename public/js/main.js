var socket = io();
socket.on("cpu-info", (data) => {
  if (cpuHistogram.length >= 60) cpuHistogram.shift();
  cpuHistogram.push([new Date(), data]);
  drawCpuHistogram();

  cpuUsage = [
    ["Used", data],
    ["Free", 100 - data],
  ];
  drawCpuUsage();
});

socket.on("ram-info", (data) => {
  const { usedMemMb, freeMemMb, freeMemPercentage } = data;
  if (ramHistogram.length >= 60) ramHistogram.shift();
  ramHistogram.push([new Date(), freeMemPercentage]);
  drawRamHistogram();

  ramUsage = [
    ["Used", usedMemMb],
    ["Free", freeMemMb],
  ];
  drawRamUsage();
});
