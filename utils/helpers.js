const os = require("node-os-utils");
const { cpu, mem, drive } = os;

exports.getCpuUsage = () => cpu.usage();
exports.getMemInfo = () => mem.info();
exports.getDriveInfo = () => {
  if (process.platform !== "win32") return drive.info();
};
