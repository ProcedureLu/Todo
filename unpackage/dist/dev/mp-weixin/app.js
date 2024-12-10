"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_user = require("./store/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/team/teaminfo.js";
  "./pages/team/teamsmanage.js";
  "./pages/user/user.js";
  "./pages/user/login.js";
  "./pages/user/register.js";
  "./pages/user/userinfo.js";
  "./pages/search/search/search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function setupInterceptor() {
  const protectedPages = [
    "/pages/team/"
    // 需要登录的页面路径前缀
  ];
  function isProtected(url) {
    return protectedPages.some((path) => url.startsWith(path));
  }
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
  function createGuard() {
    return {
      invoke(args) {
        const userStore = store_user.useUserStore();
        if (!userStore.isLoggedIn && isProtected(args.url)) {
          handleUnauthAccess();
          return false;
        }
        return true;
      }
    };
  }
  common_vendor.index.addInterceptor("navigateTo", createGuard());
  common_vendor.index.addInterceptor("redirectTo", createGuard());
  common_vendor.index.addInterceptor("switchTab", createGuard());
}
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const pinia = common_vendor.createPinia();
  app.use(pinia);
  setupInterceptor();
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
