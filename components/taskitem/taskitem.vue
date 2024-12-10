<!-- src/components/TaskCard.vue -->
<template>
  <view class="task-card" @click="handleClick">
    <view class="task-title">{{ task.title }}</view>
    <view class="task-desc">{{ task.description }}</view>
    <view class="task-meta">
      <text v-if="task.dueDate">截止日期: {{ task.dueDate }}</text>
      <text v-if="task.assignee">负责人: {{ task.assignee }}</text>
    </view>
  </view>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';

// 接收任务数据和模式（个人/团队）
defineProps({
  task: {
    type: Object,
    required: true
  },
  mode: {
    type: String,
    required: true // "personal" 或 "team"
  }
});

// 触发事件
const emit = defineEmits(['viewTask']);

// 点击任务卡片的处理逻辑
const handleClick = () => {
  if (mode === 'team') {
    emit('viewTask', task.id); // 仅在团队模式下触发查看任务详情
  }
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.task-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.task-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.task-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.task-meta {
  font-size: 12px;
  color: #999;
}
</style>
