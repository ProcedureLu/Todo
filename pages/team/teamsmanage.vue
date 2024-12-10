<template>
	<custom-navbar>
		<template #back>
			返回
		</template>
	</custom-navbar>
	<view class="menu-list">
	  <view class="menu-item" @click="navigateTo('userinfo')">
	    <text>我的团队</text>
	  </view>
	<view class="menu-item" @click="logout()">
		<text>创建团队</text>
	</view>
	<view class="menu-item" @click="logout()">
		<text>加入团队</text>
	</view>
	  <!-- 更多菜单项 -->
	</view>
</template>

<script>
</script>

<style scoped>
	.menu-list {
	  width: 100%;
	  margin-top: 20px;
	}
	.menu-item {
	  padding: 10px;
	  border-bottom: 1px solid #eee;
	}
</style>