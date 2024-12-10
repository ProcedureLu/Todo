<template>
	<custom-navbar class="navbar">
		<template #center>
			<view class="navbar_left">
				<button
					class="navbar_bt" 
					:class="{ active: isActive === 'personal' }" 
					@click="toggle('personal')"
				>
					个人
				</button>
				<button 
					class="navbar_bt" 
					:class="{ active: isActive === 'team' }" 
					@click="toggle('team')"
				>
					团队
				</button>
			</view>
		</template>
	</custom-navbar>
	<calendar></calendar>
	
	
	<!-- 事务卡片列表 -->
	  <view class="task-list">
	    <taskitem
	      v-for="task in tasks"
	      :key="task.id"
	      :task="task"
	      :mode="isActive"
	      @viewTask="viewTask"
	    />
	  </view>
	
	  <!-- 添加事务按钮 -->
	  <button class="add-task-btn" @click="openTaskModal">+</button>
	
	  <!-- 弹窗 -->
	  <view v-if="showModal" class="modal-overlay">
	    <view class="modal">
	      <h3>添加{{ isActive === 'personal' ? '个人' : '团队' }}事务</h3>
	      <form @submit="saveTask">
	        <label>
	          标题:
	          <input v-model="newTask.title" type="text" required />
	        </label>
	        <label>
	          描述:
	          <textarea v-model="newTask.description"></textarea>
	        </label>
	        <label v-if="isActive === 'team'">
	          负责人:
	          <input v-model="newTask.assignee" type="text" />
	        </label>
	        <label>
	          截止日期:
	          <input v-model="newTask.dueDate" type="date" />
	        </label>
	        <button form-type="submit">保存</button>
	        <button form-type="button" @click="closeTaskModal">取消</button>
	      </form>
	    </view>
	  </view>
	
</template>

<script setup>
 import { ref, computed, onMounted } from 'vue'; 
 import { useUserStore } from '@/store/user'; 
 import { handleUnauthAccess } from '@/utils/common.js' 
 const userStore = useUserStore();

const isActive = ref('personal'); // 默认选中“个人”按钮

const tasks = ref([]); // 当前显示的事务列表
const showModal = ref(false); // 控制弹窗显示
const newTask = ref({ title: '', description: '', dueDate: '', assignee: '' }); // 新事务数据


const toggle = (button) => {
	if (button === 'team' && !userStore.isLoggedIn)
	{ handleUnauthAccess();
	 // 如果未登录，跳转到登录页面
	  return; }
	isActive.value = button; // 切换按钮状态
	 }; 
	 
// 打开弹窗
const openTaskModal = () => {
  newTask.value = { title: '', description: '', dueDate: '', assignee: '' }; // 重置表单
  showModal.value = true;
};

// 关闭弹窗
const closeTaskModal = () => {
	console.log("点击取消")
  showModal.value = false;
};

// 保存事务
const saveTask = () => {
	console.log("点击保存")
    // 保存个人事务到本地
	console.log("点击保存")
    const personalTasks = JSON.parse(localStorage.getItem('personalTasks') || '[]');
    personalTasks.push({ ...newTask.value, id: Date.now() });
    localStorage.setItem('personalTasks', JSON.stringify(personalTasks));
    fetchTasks(); // 刷新事务列表
  closeTaskModal();
};

// 加载事务
const fetchTasks = () => {
    // 从本地加载个人事务
    tasks.value = JSON.parse(localStorage.getItem('personalTasks') || '[]');
};

// 查看任务详情（团队模式）
const viewTask = (taskId) => {
  if (isActive.value === 'team') {
    // 跳转到任务详情页面
    console.log(`查看团队任务详情: ${taskId}`);
  }
};

// 页面加载时初始化
onMounted(() => {
  fetchTasks();
});
</script>

<style scoped>
.navbar {
   
}

.navbar_left {
	/* height: 75%; */
    display: flex;
	
	/* border: none; */
	/* margin: auto auto; */
	/* border-radius: 50%; */
    /* gap: 10px; */
}

.navbar_bt {
	height: 60%;
	margin: auto auto;
    background-color: #f0f0f0; /* 默认背景色 */
    border: none;
    padding: 5px 10px; /* 调整按钮的内边距 */
    cursor: pointer;
    transition: background-color 0.3s;
    white-space: nowrap; /* 防止文本换行 */
	display: flex; /* 使用 flexbox 布局 */
	    align-items: center; /* 垂直居中对齐 */
	    justify-content: center;
}

.navbar_bt.active {
    background-color: #007bff; /* 激活状态背景色 */
    color: white; /* 激活状态文字颜色 */
}

.add-task-btn {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

.add-task-btn:hover {
  background-color: #0056b3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal h3 {
  margin-bottom: 20px;
}

.modal form label {
  display: block;
  margin-bottom: 10px;
}

.modal form input,
.modal form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal form button {
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal form button[type="submit"] {
  background-color: #007bff;
  color: white;
}

.modal form button[type="button"] {
  background-color: #ddd;
}
</style>
