"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  _easycom_custom_navbar2();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
if (!Math) {
  _easycom_custom_navbar();
}
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const form = common_vendor.ref({
      username: "",
      password: "",
      confirmPassword: ""
    });
    const handleRegister = async () => {
      if (!form.value.username || !form.value.password || !form.value.confirmPassword) {
        return common_vendor.index.showToast({
          title: "请填写完整信息",
          icon: "none"
        });
      }
      if (form.value.password !== form.value.confirmPassword) {
        return common_vendor.index.showToast({
          title: "两次密码输入不一致",
          icon: "none"
        });
      }
      try {
        const res = await register(form.value);
        if (res.success) {
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "success"
          });
          router.push("/pages/auth/login");
        } else {
          common_vendor.index.showToast({
            title: res.message || "注册失败",
            icon: "none"
          });
        }
      } catch (error) {
        common_vendor.index.showToast({
          title: "网络错误，请稍后重试",
          icon: "none"
        });
      }
    };
    const goToLogin = () => {
      common_vendor.index.navigateTo({
        // url: `/pages/${page}/index`
        url: `/pages/user/login`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: form.value.username,
        b: common_vendor.o(($event) => form.value.username = $event.detail.value),
        c: form.value.password,
        d: common_vendor.o(($event) => form.value.password = $event.detail.value),
        e: form.value.confirmPassword,
        f: common_vendor.o(($event) => form.value.confirmPassword = $event.detail.value),
        g: common_vendor.o(handleRegister),
        h: common_vendor.o(goToLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fd534bf9"]]);
wx.createPage(MiniProgramPage);
