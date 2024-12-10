<!-- <template>
  <div class="calendar">
    <div class="header">
      <button @click="prevMonth">上一月</button>
      <span>{{ currentYear }}年{{ currentMonth }}月</span>
      <button @click="nextMonth">下一月</button>
    </div>
    <div class="days">
      <div class="day" v-for="day in days" :key="day">{{ day }}</div>
    </div>
    <div class="dates">
      <div class="date" v-for="date in monthDates" :key="date">{{ date }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 响应式数据
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);
const days = ref(['日', '一', '二', '三', '四', '五', '六']);
const monthDates = ref([]);

// 计算上一个月
const prevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
  generateDates();
};

// 计算下一个月
const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
  generateDates();
};

// 生成当前月份的日期
const generateDates = () => {
  const lastDay = new Date(currentYear.value, currentMonth.value, 0);
  monthDates.value = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
};

// 组件挂载时生成日期
onMounted(() => {
  generateDates();
});
</script>

<style scoped>
.calendar {
  /* 样式设置 */
}
.header {
  display: flex;
  justify-content: space-between;
}
.days, .dates {
  display: flex;
  flex-wrap: wrap;
}
.day, .date {
  width: 14.28%; /* 7天 */
  text-align: center;
}
</style -->>

<template>
  <view class="calendar">
    <swiper class="sw" :current="currentIndex" @change="onSwiperChange">
      <swiper-item class="sw_item" v-for="(month, index) in months" :key="index">
        <view class="calendar-month">
          <text>{{ month.name }}</text>
          <view class="calendar-days">
            <view v-for="day in month.days" :key="day" class="calendar-day">
              <text>{{ day }}</text>
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);
const months = ref([]);

// 模拟生成日历数据
function generateCalendarData() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for (let i = 0; i < 12; i++) {
    months.value.push({
      name: monthNames[i],
      days: Array.from({ length: 30 }, (_, index) => index + 1) // 假设每个月30天
    });
  }
}

// 处理滑动事件
function onSwiperChange(event) {
  currentIndex.value = event.detail.current;
}

onMounted(() => {
  generateCalendarData();
});
</script>

<style scoped>
.calendar {
	 margin: 0 auto; 
	 margin-top: 5px;
  width: 90%;
  /* height: 100%; */
    border: none; /* 去掉默认边框 */

  border-radius: 10px;
}

.sw{
	background-color: #9fefef;
	height: 310px;
	border: none; /* 去掉默认边框 */
	
	border-radius: 10px;
}



.calendar-month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  /* background-color: #00d6d6; */
}
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 20px;
}
.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
}
</style>