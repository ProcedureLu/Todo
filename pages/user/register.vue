<template>
	<custom-navbar>
		<template #back>
			<view>返回</view>
		</template>
	</custom-navbar>
  <view class="register-container">
    <view class="title">注册</view>
    <form @submit.prevent="handleRegister">
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
        <input
          type="password"
          placeholder="请确认密码"
          v-model="form.confirmPassword"
          class="input"
        />
      </view>
      <view class="form-item">
        <button type="submit" class="btn">注册</button>
      </view>
    </form>
    <view class="login-link">
      <text>已有账号？</text>
      <text class="link" @click="goToLogin">立即登录</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
// import { register } from "@/services/auth"; // 引入注册接口
// import { useRouter } from "@uni-helper/vue-router"; // 使用 UniApp 路由

// const router = useRouter();

const form = ref({
  username: "",
  password: "",
  confirmPassword: "",
});

const handleRegister = async () => {
  if (!form.value.username || !form.value.password || !form.value.confirmPassword) {
    return uni.showToast({
      title: "请填写完整信息",
      icon: "none",
    });
  }
  if (form.value.password !== form.value.confirmPassword) {
    return uni.showToast({
      title: "两次密码输入不一致",
      icon: "none",
    });
  }
  try {
    const res = await register(form.value); // 调用注册接口
    if (res.success) {
      uni.showToast({
        title: "注册成功",
        icon: "success",
      });
      router.push("/pages/auth/login"); // 跳转到登录页面
    } else {
      uni.showToast({
        title: res.message || "注册失败",
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

const goToLogin = () => {
uni.navigateTo({
    // url: `/pages/${page}/index`
	url: `/pages/user/login`
  });
  };
</script>

<style scoped>
.register-container {
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
.login-link {
  text-align: center;
  margin-top: 10px;
}
.link {
  color: #007aff;
  cursor: pointer;
}
</style>
