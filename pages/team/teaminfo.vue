<!-- <template>
	<custom-navbar>
		<template #back>
			<navigator url="/pages/team/teamsmanage">更多</navigator>
		</template>
	</custom-navbar>
	<view class="infoHead">
		<text>团队名称</text>
		<view class="teamMemdsfbers">
			<view class="teamMember" v-for="">
				<img src="" alt="" />
			</view>
		</view>
	</view>
	<view class="teamContent">
		
	</view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {getTeamsByUserId, getTasksByUserId} from '../../api/team.js'

</script>

<style scoped>
</style -->>

<template>
	<custom-navbar>
		<template #back>
			<navigator url="/pages/team/teamsmanage">更多</navigator>
		</template>
	</custom-navbar>

	<!-- 团队信息头部 -->
	<view class="infoHead">
		<text class="teamName">{{ team.name }}</text>
		<view class="teamMembers">
			<view class="teamMember" v-for="member in team.members" :key="member.id">
				<img :src="member.avatar || defaultAvatar" alt="成员头像" />
			</view>
			<view class="teamMember addMember" @click="inviteMember">
							<text>+</text>
						</view>
		</view>
	</view>

	<!-- 团队内容 -->
	<view class="teamContent">
		<!-- 顶部导航栏 -->
		<view class="tabHeader">
			<view
				v-for="tab in tabs"
				:key="tab.key"
				:class="['tabItem', { active: activeTab === tab.key }]"
				@click="activeTab = tab.key"
			>
				{{ tab.label }}
			</view>
		</view>

		<!-- 内容切换 -->
		<view class="tabContent">
			<!-- 团队事务 -->
			<view v-if="activeTab === 'tasks'" class="taskList">
				<view v-for="task in tasks" :key="task.id" class="taskItem">
					<text class="taskTitle">{{ task.title }}</text>
					<text class="taskInfo">
						状态：{{ task.status }} | 优先级：{{ task.priority }} | 截止日期：{{ formatDate(task.dueDate) }}
					</text>
				</view>
			</view>

			<!-- 团队资源库 -->
			<view v-if="activeTab === 'resources'" class="resourceList">
				<view v-for="resource in resources" :key="resource.id" class="resourceItem">
					<text class="resourceName">{{ resource.name }}</text>
					<text class="resourceInfo">
						类型：{{ resource.type }} | 更新时间：{{ formatDate(resource.updatedAt) }}
					</text>
				</view>
			</view>

			<!-- 团队公告 -->
			<view v-if="activeTab === 'announcements'" class="announcementList">
				<view v-for="announcement in announcements" :key="announcement.id" class="announcementItem">
					<text class="announcementTitle">{{ announcement.title }}</text>
					<text class="announcementContent">{{ announcement.content }}</text>
					<text class="announcementDate">发布时间：{{ formatDate(announcement.date) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getTeamsByUserId, getTasksByUserId } from "../../api/team.js";

// 默认头像
const defaultAvatar = "/static/default-avatar.png";

// 数据状态
const team = ref({ name: "团队名称", members: [] }); // 团队信息
const tasks = ref([]); // 团队事务
const resources = ref([]); // 团队资源库
const announcements = ref([]); // 团队公告
const activeTab = ref("tasks"); // 当前激活的 Tab

// Tab 切换栏
const tabs = [
	{ key: "tasks", label: "团队事务" },
	{ key: "resources", label: "团队资源库" },
	{ key: "announcements", label: "团队公告" },
];

// 格式化日期
const formatDate = (date) => {
	const d = new Date(date);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// 模拟获取数据
const fetchTeamData = async () => {
	// 模拟获取团队信息
	team.value = {
		name: "开发团队",
		members: [
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
			{ id: 1, name: "张三", avatar: "/static/avatar1.png" },
			{ id: 2, name: "李四", avatar: "/static/avatar2.png" },
			{ id: 3, name: "王五", avatar: "/static/avatar3.png" },
		],
	};

	// 模拟获取团队事务
	tasks.value = [
		{
			id: 1,
			title: "完成需求分析",
			status: "待办",
			priority: "高",
			dueDate: "2023-12-15T18:00:00Z",
		},
		{
			id: 2,
			title: "代码评审",
			status: "已完成",
			priority: "中",
			dueDate: "2023-12-10T12:00:00Z",
		},
	];

	// 模拟获取团队资源库
	resources.value = [
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
		{ id: 1, name: "需求文档.docx", type: "文档", updatedAt: "2023-12-01" },
		{ id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" },
	];

	// 模拟获取团队公告
	announcements.value = [
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
		{ id: 1, title: "团队会议通知", content: "本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。本周五下午 3 点召开团队会议，请准时参加。", date: "2023-12-08" },
		{ id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" },
	];
};

// 邀请成员方法
const inviteMember = () => {
	console.log("邀请新成员");
};

// 页面加载时获取数据
onMounted(() => {
	fetchTeamData();
});
</script>
<style scoped>
.infoHead {
	padding: 20rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
	border-radius: 10rpx;
	box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}

.teamName {
	font-size: 32rpx;
	font-weight: bold;
	margin-bottom: 10rpx;
}

/* 团队成员容器 */
.teamMembers {
	display: flex;
	align-items: center;
	gap: 10rpx;
	margin: 10px;
	overflow-x: auto; /* 横向滚动条 */
	padding-bottom: 10rpx; /* 给滚动条留出空间 */
	position: relative; /* 确保加号按钮相对定位 */
}

.teamMember {
	flex-shrink: 0; /* 防止成员头像被压缩 */
	width: 80rpx;
	height: 80rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #f5f5f5;
	box-shadow: 0 1rpx 4rpx rgba(0, 0, 0, 0.1);
}

.teamMember img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
}

/* 邀请成员按钮样式 */
.addMember {
	position: sticky; /* 固定在容器的右侧 */
	right: 0; /* 距离容器右侧 0 */
	width: 80rpx;
	height: 80rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #007aff;
	color: #ffffff;
	font-size: 40rpx;
	font-weight: bold;
	cursor: pointer;
	box-shadow: 0 1rpx 4rpx rgba(0, 0, 0, 0.1);
}
/* 顶部导航栏 */
.tabHeader {
	display: flex;
	background-color: #f9f9f9;
	border-bottom: 1rpx solid #eeeeee;
}

.tabItem {
	flex: 1;
	text-align: center;
	padding: 20rpx 0;
	font-size: 28rpx;
	color: #666666;
	cursor: pointer;
}

.tabItem.active {
	color: #007aff;
	font-weight: bold;
	border-bottom: 2rpx solid #007aff;
}

/* 内容区域 */
.tabContent {
	padding: 20rpx;
}

.taskList,
.resourceList,
.announcementList {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.taskItem,
.resourceItem,
.announcementItem {
	padding: 20rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	box-shadow: 0 1rpx 4rpx rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column; /* 确保内容按列排列 */
}

/* 标题独占一行 */
.taskTitle,
.resourceName,
.announcementTitle {
	font-size: 28rpx;
	font-weight: bold;
	margin-bottom: 10rpx; /* 与下方内容的间距 */
	word-break: break-word; /* 防止长标题溢出 */
}

/* 剩余内容换行显示 */
.taskInfo,
.resourceInfo,
.announcementContent,
.announcementDate {
	font-size: 24rpx;
	color: #666666;
	line-height: 1.5; /* 增加行高，提升可读性 */
	word-break: break-word; /* 防止内容溢出 */
}
</style>
