<template>
	<view class="layout">
  <view class="nav-bar" :style="{ height: `${totalNavHeight}px`, backgroundColor: backgroundColor }">
    <!-- 状态栏占位 -->
    <view class="status-bar" :style="{ height: `${statusBarHeight}px` }"></view>

    <!-- 导航栏内容 -->
    <view class="nav-bar-content" :style="{ height: `${navBarHeight}px` }">
      <!-- 左侧返回按钮 -->
      <view class="nav-bar-left" @click="onBack">
        <slot name="back">
          
        </slot>
      </view>
	 <!-- 左侧按钮 -->
	 <view class="nav-bar-title" >
	   <slot name="center">
	     <!-- <image v-if="showBack" class="back-icon" src="/static/icons/back.png" /> -->
	   </slot>
	 </view>

      <!-- 中间标题 -->
     <!-- <view class="nav-bar-title">
        <slot name="title">
          <text :style="{ color: color }">{{ title }}</text>
        </slot>
      </view> -->

      <!-- 右侧按钮 -->
      <view class="nav-bar-right">
        <slot name="right"></slot>
      </view>
	 
    </view>
  </view>
  <view class="fill" :style="{ height: `${totalNavHeight}px` }"></view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getSystemInfo } from '@/utils/systemInfo';

// Props
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  showBack: {
    type: Boolean,
    default: true, // 是否显示返回按钮
  },
  backgroundColor: {
    type: String,
    default: '#9fefef', // 背景颜色
  },
  color: {
    type: String,
    default: '#000000', // 字体颜色
  },
});

// 响应式数据
const { statusBarHeight, navBarHeight, totalNavHeight } = getSystemInfo();

// 返回按钮点击事件
const onBack = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style scoped lang="scss">
.nav-bar {
	position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.status-bar {
  width: 100%;
  
}

.nav-bar-content {
	
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.nav-bar-left {
  display: flex;
  /* align-items: center; */
}

.back-icon {
  width: 24px;
  height: 24px;
}

.nav-bar-title {
	display: flex;
  // flex: 1;
  // text-align: center;
  // font-size: 18px;
  // font-weight: bold;
}

.nav-bar-right {
  display: flex;
  align-items: center;
}

.left{
	display: flex;
	/* margin: 10px; */
	
}
</style>
