// 未登录时的处理逻辑
 export function handleUnauthAccess() {
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