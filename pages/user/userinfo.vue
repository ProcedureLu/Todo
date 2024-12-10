<template>
  <custom-navbar>
	  <template #back>
		  返回
	  </template>
  </custom-navbar>
  <view class="profile-page">
    <!-- 头部 -->
    <view class="header">
      <image class="avatar" :src="avatarUrl" mode="aspectFill" />
      <text class="username">{{ userInfo.username }}</text>
      <text class="role">{{ userRole }}</text>
    </view>

    <!-- 信息展示 -->
    <view class="info-section">
      <view class="info-item">
        <text class="label">邮箱：</text>
        <text class="value">{{ userInfo.email }}</text>
      </view>
      <view class="info-item">
        <text class="label">用户ID：</text>
        <text class="value">{{ userInfo.id }}</text>
      </view>
      <view class="info-item">
        <text class="label">角色：</text>
        <text class="value">{{ userInfo.role }}</text>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="actions">
      <button class="btn logout-btn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/store/user'; // 假设使用 Pinia 管理用户状态
// import { useRouter } from '@uni-helper/uni-router'; // 假设使用 uni-router 进行路由管理

// 获取用户状态和路由实例
const userStore = useUserStore();
// const router = useRouter();

// 默认头像
const avatarUrl = '/static/logo.png';

// 用户信息
const userInfo = computed(() => userStore.userInfo || {});

// 根据角色显示更友好的角色名称
const userRole = computed(() => (userInfo.value.role === 'admin' ? '管理员' : '普通用户'));

// 退出登录
const logout = () => {
  userStore.logout(); // 假设有一个 logout 方法清除用户状态
  uni.switchTab({url:'/pages/user/user'}); // 跳转到登录页
};
</script>

<style scoped>
/* 页面整体样式 */
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* 头部样式 */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
}

.avatar {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  margin-bottom: 20rpx;
  background-color: #ddd;
}

.username {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 10rpx;
}

.role {
  font-size: 28rpx;
  color: #666;
}

/* 信息展示样式 */
.info-section {
  width: 100%;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
  margin-bottom: 40rpx;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #eee;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  font-size: 30rpx;
  color: #333;
}

.value {
  font-size: 30rpx;
  color: #666;
}

/* 按钮样式 */
.actions {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn {
  width: 80%;
  padding: 20rpx;
  font-size: 32rpx;
  text-align: center;
  border-radius: 10rpx;
}

.logout-btn {
  background-color: #ff4d4f;
  color: #fff;
}
</style>
