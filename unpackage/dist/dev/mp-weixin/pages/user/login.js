"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
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
  __name: "login",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const handleLogin = async () => {
      if (!username.value || !password.value) {
        return common_vendor.index.showToast({
          title: "请输入用户名和密码",
          icon: "none"
        });
      }
      try {
        const user = await api_user.login(username.value, password.value);
        if (user) {
          userStore.login(user.token, user);
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
          common_vendor.index.switchTab({
            url: "/pages/user/user"
          });
        } else {
          common_vendor.index.showToast({
            title: "用户名或密码错误",
            icon: "none"
          });
        }
      } catch (error) {
        console.error("登录失败", error);
        common_vendor.index.showToast({
          title: "登录过程中出现错误",
          icon: "none"
        });
      }
    };
    const goToRegister = () => {
      common_vendor.index.navigateTo({
        // url: `/pages/${page}/index`
        url: `/pages/user/register`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: username.value,
        b: common_vendor.o(($event) => username.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(handleLogin),
        f: common_vendor.o(goToRegister)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6163e5ce"]]);
wx.createPage(MiniProgramPage);
