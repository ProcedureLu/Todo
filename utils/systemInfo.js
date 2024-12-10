export const getSystemInfo = () => {
  const systemInfo = uni.getSystemInfoSync();
  const { statusBarHeight, platform } = systemInfo;

  // 判断平台
  const isIOS = platform === 'ios';
  const navBarHeight = isIOS ? 44 : 48; // iOS 通常为 44px，Android 通常为 48px

  return {
    statusBarHeight, // 状态栏高度
    navBarHeight,    // 导航栏高度
    totalNavHeight: statusBarHeight + navBarHeight, // 总高度
  };
};

