"use strict";
const common_vendor = require("../common/vendor.js");
const getSystemInfo = () => {
  const systemInfo = common_vendor.index.getSystemInfoSync();
  const { statusBarHeight, platform } = systemInfo;
  const isIOS = platform === "ios";
  const navBarHeight = isIOS ? 44 : 48;
  return {
    statusBarHeight,
    // 状态栏高度
    navBarHeight,
    // 导航栏高度
    totalNavHeight: statusBarHeight + navBarHeight
    // 总高度
  };
};
exports.getSystemInfo = getSystemInfo;
