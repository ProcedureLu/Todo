// store/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: uni.getStorageSync('token') || '', // 从本地存储中读取 token
    userInfo: uni.getStorageSync('userInfo') || null, // 用户信息
  }),
  actions: {
    // 登录成功后保存 token 和用户信息
    login(token, userInfo) {
      this.token = token;
      this.userInfo = userInfo;
      uni.setStorageSync('token', token); // 持久化 token
      uni.setStorageSync('userInfo', userInfo); // 持久化用户信息
    },
    // 退出登录
    logout() {
      this.token = '';
      this.userInfo = null;
      uni.removeStorageSync('token');
      uni.removeStorageSync('userInfo');
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token, // 判断是否已登录
  },
});
