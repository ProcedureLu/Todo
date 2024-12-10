<!-- <template>
	<custom-navbar>
		<template #back>
			<view><</view>
		</template>
	</custom-navbar>
  <view class="login-container">
    <view class="title">登录</view>
    <form @submit.prevent="handleLogin">
      <view class="form-item">
        <input
          type="text"
          placeholder="请输入用户名"
          v-model="form.username"
          class="input"
        />
      </view>
      <view class="form-item">
        <input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
          class="input"
        />
      </view>
      <view class="form-item">
        <button type="submit" class="btn">登录</button>
      </view>
    </form>
    <view class="register-link">
      <text>还没有账号？</text>
      <text class="link" @click="goToRegister">立即注册</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { login } from '../../api/user.js';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const form = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
	console.log("登录")
  if (!form.value.username || !form.value.password) {
    return uni.showToast({
      title: "请输入用户名和密码",
      icon: "none",
    });
  }
  try {
    const res = await login(form.value); // 调用登录接口
    if (res.success) {
      uni.setStorageSync("token", res.token); // 保存 token
      uni.showToast({
        title: "登录成功",
        icon: "success",
      });
      router.switchTab("/pages/index/index"); // 跳转到个人任务页面
    } else {
      uni.showToast({
        title: res.message || "登录失败",
        icon: "none",
      });
    }
  } catch (error) {
    uni.showToast({
      title: "网络错误，请稍后重试",
      icon: "none",
    });
  }
};

const goToRegister = () => {
uni.navigateTo({
    // url: `/pages/${page}/index`
	url: `/pages/user/register`
  });
  };
</script>

<style scoped>
.login-container {
  padding: 20px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.form-item {
  margin-bottom: 15px;
}
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn {
  width: 100%;
  padding: 10px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-align: center;
}
.register-link {
  text-align: center;
  margin-top: 10px;
}
.link {
  color: #007aff;
  cursor: pointer;
}
</style -->>


<!-- src/pages/login/index.vue -->
<template>
  <custom-navbar>
  	<template #back>
  		<view>返回</view>
  	</template>
  </custom-navbar>
  <view>
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="handleLogin">登录</button>
	<view class="register-link">
	  <text>还没有账号？</text>
	  <text class="link" @click="goToRegister">立即注册</text>
	</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../../api/user.js';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  if (!username.value || !password.value) {
    return uni.showToast({
      title: "请输入用户名和密码",
      icon: "none",
    });
  }
  try {
    const user = await login(username.value, password.value);
    if (user) {
	  userStore.login(user.token,user); // 更新 Pinia 状态
      uni.showToast({
        title: '登录成功',
        icon: 'success'
      });
      uni.switchTab({
        url: '/pages/user/user'
      });
    } else {
      uni.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      });
    }
  } catch (error) {
    console.error('登录失败', error);
    uni.showToast({
      title: '登录过程中出现错误',
      icon: 'none'
    });
  }
};

const goToRegister = () => {
uni.navigateTo({
    // url: `/pages/${page}/index`
	url: `/pages/user/register`
  });
  };
</script>

<style scoped>
input {
  margin: 10px;
  padding: 8px;
}
button {
  padding: 10px 20px;
}
.register-link {
  text-align: center;
  margin-top: 10px;
}
.link {
  color: #007aff;
  cursor: pointer;
}
</style>
