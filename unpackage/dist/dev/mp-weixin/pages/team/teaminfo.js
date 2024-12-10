"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  _easycom_custom_navbar2();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
if (!Math) {
  _easycom_custom_navbar();
}
const defaultAvatar = "/static/default-avatar.png";
const _sfc_main = {
  __name: "teaminfo",
  setup(__props) {
    const team = common_vendor.ref({ name: "团队名称", members: [] });
    const tasks = common_vendor.ref([]);
    const resources = common_vendor.ref([]);
    const announcements = common_vendor.ref([]);
    const activeTab = common_vendor.ref("tasks");
    const tabs = [
      { key: "tasks", label: "团队事务" },
      { key: "resources", label: "团队资源库" },
      { key: "announcements", label: "团队公告" }
    ];
    const formatDate = (date) => {
      const d = new Date(date);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    };
    const fetchTeamData = async () => {
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
          { id: 3, name: "王五", avatar: "/static/avatar3.png" }
        ]
      };
      tasks.value = [
        {
          id: 1,
          title: "完成需求分析",
          status: "待办",
          priority: "高",
          dueDate: "2023-12-15T18:00:00Z"
        },
        {
          id: 2,
          title: "代码评审",
          status: "已完成",
          priority: "中",
          dueDate: "2023-12-10T12:00:00Z"
        }
      ];
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
        { id: 2, name: "设计图.psd", type: "图片", updatedAt: "2023-12-02" }
      ];
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
        { id: 2, title: "项目进度更新", content: "项目 A 已完成 80%，预计下周完成测试。", date: "2023-12-07" }
      ];
    };
    const inviteMember = () => {
      console.log("邀请新成员");
    };
    common_vendor.onMounted(() => {
      fetchTeamData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(team.value.name),
        b: common_vendor.f(team.value.members, (member, k0, i0) => {
          return {
            a: member.avatar || defaultAvatar,
            b: member.id
          };
        }),
        c: common_vendor.o(inviteMember),
        d: common_vendor.f(tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab.label),
            b: tab.key,
            c: common_vendor.n({
              active: activeTab.value === tab.key
            }),
            d: common_vendor.o(($event) => activeTab.value = tab.key, tab.key)
          };
        }),
        e: activeTab.value === "tasks"
      }, activeTab.value === "tasks" ? {
        f: common_vendor.f(tasks.value, (task, k0, i0) => {
          return {
            a: common_vendor.t(task.title),
            b: common_vendor.t(task.status),
            c: common_vendor.t(task.priority),
            d: common_vendor.t(formatDate(task.dueDate)),
            e: task.id
          };
        })
      } : {}, {
        g: activeTab.value === "resources"
      }, activeTab.value === "resources" ? {
        h: common_vendor.f(resources.value, (resource, k0, i0) => {
          return {
            a: common_vendor.t(resource.name),
            b: common_vendor.t(resource.type),
            c: common_vendor.t(formatDate(resource.updatedAt)),
            d: resource.id
          };
        })
      } : {}, {
        i: activeTab.value === "announcements"
      }, activeTab.value === "announcements" ? {
        j: common_vendor.f(announcements.value, (announcement, k0, i0) => {
          return {
            a: common_vendor.t(announcement.title),
            b: common_vendor.t(announcement.content),
            c: common_vendor.t(formatDate(announcement.date)),
            d: announcement.id
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-42032e6b"]]);
wx.createPage(MiniProgramPage);
