require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").Server(app);
const auth = require("basic-auth");
const io = require("socket.io")(http);
const helpers = require("./utils/helpers");
const port = process.env.PORT || 3000;

app.use(express.static("public"));

io.on("connection", async (socket) => {
  const { getCpuUsage, getMemInfo, getDriveInfo } = helpers;

  setInterval(async () => {
    socket.emit("cpu-info", await getCpuUsage());
    socket.emit("ram-info", await getMemInfo());
    socket.emit("drive-info", await getDriveInfo());
  }, 1000);
});

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
