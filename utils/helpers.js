const os = require("node-os-utils");
const { cpu, mem, drive } = os;

exports.getCpuUsage = () => cpu.usage();
exports.getMemInfo = () => mem.info();
exports.getDriveInfo = () => drive.info();
