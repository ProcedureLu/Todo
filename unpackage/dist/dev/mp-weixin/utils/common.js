"use strict";
const common_vendor = require("../common/vendor.js");
function handleUnauthAccess() {
  common_vendor.index.showModal({
    title: "提示",
    content: "您尚未登录，是否前往登录？",
    confirmText: "登录",
    cancelText: "取消",
    success: (res) => {
      if (res.confirm) {
        common_vendor.index.redirectTo({
          url: "/pages/user/login"
        });
      } else {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
          // 修改为你的首页路径
        });
      }
    }
  });
}
exports.handleUnauthAccess = handleUnauthAccess;
