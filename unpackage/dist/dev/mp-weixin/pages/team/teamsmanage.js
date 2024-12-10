"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  _easycom_custom_navbar2();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
if (!Math) {
  _easycom_custom_navbar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.o(($event) => _ctx.navigateTo("userinfo")),
    b: common_vendor.o(($event) => _ctx.logout()),
    c: common_vendor.o(($event) => _ctx.logout())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0fb0f563"]]);
wx.createPage(MiniProgramPage);
