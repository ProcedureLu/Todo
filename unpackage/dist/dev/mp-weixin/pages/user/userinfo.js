"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  _easycom_custom_navbar2();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
if (!Math) {
  _easycom_custom_navbar();
}
const avatarUrl = "/static/logo.png";
const _sfc_main = {
  __name: "userinfo",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const userInfo = common_vendor.computed(() => userStore.userInfo || {});
    const userRole = common_vendor.computed(() => userInfo.value.role === "admin" ? "管理员" : "普通用户");
    const logout = () => {
      userStore.logout();
      common_vendor.index.switchTab({ url: "/pages/user/user" });
    };
    return (_ctx, _cache) => {
      return {
        a: avatarUrl,
        b: common_vendor.t(userInfo.value.username),
        c: common_vendor.t(userRole.value),
        d: common_vendor.t(userInfo.value.email),
        e: common_vendor.t(userInfo.value.id),
        f: common_vendor.t(userInfo.value.role),
        g: common_vendor.o(logout)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-103261b1"]]);
wx.createPage(MiniProgramPage);
