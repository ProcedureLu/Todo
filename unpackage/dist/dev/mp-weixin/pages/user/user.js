"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  _easycom_custom_navbar2();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
if (!Math) {
  _easycom_custom_navbar();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const { isLoggedIn, userInfo } = common_vendor.storeToRefs(userStore);
    common_vendor.onMounted(() => {
      if (!isLoggedIn.value) {
        common_vendor.index.redirectTo({
          url: "/pages/user/login"
        });
      }
    });
    const navigateTo = (page) => {
      common_vendor.index.navigateTo({
        url: `/pages/user/${page}`
      });
    };
    const logout = () => {
      userStore.logout();
      common_vendor.index.reLaunch({ url: "/pages/login/login" });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isLoggedIn)
      }, common_vendor.unref(isLoggedIn) ? {
        b: common_assets._imports_0,
        c: common_vendor.t(common_vendor.unref(userInfo).username),
        d: common_vendor.o(($event) => navigateTo("userinfo")),
        e: common_vendor.o(($event) => logout())
      } : {
        f: common_vendor.o(($event) => navigateTo("login"))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
