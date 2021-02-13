require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").Server(app);
const auth = require("basic-auth");
const io = require("socket.io")(http);
const helpers = require("./utils/helpers");
const port = process.env.PORT || 3000;

const basicAuth = function (req, res, next) {
  var user = auth(req);
  console.log(user);

  if (
    user === undefined ||
    user["name"] !== process.env.USERNAME ||
    user["pass"] !== process.env.PASSWORD
  ) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", 'Basic realm="MyRealmName"');
    res.end("Unauthorized");
  } else {
    next();
  }
};

app.use(basicAuth);
app.use(express.static("public"));

io.on("connection", async (socket) => {
  const { getCpuUsage, getMemInfo, getDriveInfo } = helpers;

  setInterval(async () => {
    socket.emit("cpu-info", await getCpuUsage());
    socket.emit("ram-info", await getMemInfo());
    socket.emit("drive-info", await getDriveInfo());
  }, 500);
});

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
