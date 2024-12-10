<template>
	<custom-navbar>
		<template #back>
		</template>
	</custom-navbar>
  <view class="container">
    <view v-if="isLoggedIn">
      <view class="profile-header">
        <image class="avatar" src="/static/logo.png" />
       <text class="username">{{ userInfo.username }}</text>
      </view>
      <view class="menu-list">
        <view class="menu-item" @click="navigateTo('userinfo')">
          <text>更多信息</text>
        </view>
		<view class="menu-item" @click="logout()">
			退出登录
		</view>
        <!-- 更多菜单项 -->
      </view>
    </view>
    <view v-else>
      <text>请先登录</text>
	  <view class="menu-item"  @click="navigateTo('login')">
	  	登录
	  </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const { isLoggedIn, userInfo } = storeToRefs(userStore);

onMounted(() => {
  if (!isLoggedIn.value) {
    uni.redirectTo({
      url: '/pages/user/login'
    });
  }
});

const navigateTo = (page) => {
  uni.navigateTo({
    url: `/pages/user/${page}`
  });
};

const logout = () => {
  userStore.logout();
  uni.reLaunch({ url: '/pages/login/login' });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.username {
  margin-top: 10px;
  font-size: 20px;
  color: #333;
}
.menu-list {
  width: 100%;
  margin-top: 20px;
}
.menu-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
