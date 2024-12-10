"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => ({
    token: common_vendor.index.getStorageSync("token") || "",
    // 从本地存储中读取 token
    userInfo: common_vendor.index.getStorageSync("userInfo") || null
    // 用户信息
  }),
  actions: {
    // 登录成功后保存 token 和用户信息
    login(token, userInfo) {
      this.token = token;
      this.userInfo = userInfo;
      common_vendor.index.setStorageSync("token", token);
      common_vendor.index.setStorageSync("userInfo", userInfo);
    },
    // 退出登录
    logout() {
      this.token = "";
      this.userInfo = null;
      common_vendor.index.removeStorageSync("token");
      common_vendor.index.removeStorageSync("userInfo");
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token
    // 判断是否已登录
  }
});
exports.useUserStore = useUserStore;
