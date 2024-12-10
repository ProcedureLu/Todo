import App from './App'
import { useUserStore } from '@/store/user'; // 引入 Pinia 的用户状态管理
import { handleUnauthAccess } from '@/utils/common.js'
// 全局路由守卫
function setupInterceptor() {
  const protectedPages = [
    '/pages/team/', // 需要登录的页面路径前缀
  ];

  // 判断是否是受保护页面
  function isProtected(url) {
    return protectedPages.some((path) => url.startsWith(path));
  }

  // 未登录时的处理逻辑
  function handleUnauthAccess() {
    uni.showModal({
      title: '提示',
      content: '您尚未登录，是否前往登录？',
      confirmText: '登录',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          // 跳转到登录页
          uni.redirectTo({
            url: '/pages/user/login',
          });
        } else {
          // 跳转到首页
          uni.switchTab({
            url: '/pages/index/index', // 修改为你的首页路径
          });
        }
      },
    });
  }

  // 通用拦截器
  function createGuard() {
    return {
      invoke(args) {
        const userStore = useUserStore();
        if (!userStore.isLoggedIn && isProtected(args.url)) {
          handleUnauthAccess();
          return false; // 阻止跳转
        }
        return true; // 允许跳转
      },
    };
  }

  // 注册拦截器
  uni.addInterceptor('navigateTo', createGuard());
  uni.addInterceptor('redirectTo', createGuard());
  uni.addInterceptor('switchTab', createGuard());
}


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

setupInterceptor();


const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia';

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia();

  app.use(pinia);
  
setupInterceptor();
  
  return {
    app
  }
}
// #endif