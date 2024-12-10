"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_custom_navbar2 = common_vendor.resolveComponent("custom-navbar");
  const _easycom_calendar2 = common_vendor.resolveComponent("calendar");
  const _easycom_taskitem2 = common_vendor.resolveComponent("taskitem");
  (_easycom_custom_navbar2 + _easycom_calendar2 + _easycom_taskitem2)();
}
const _easycom_custom_navbar = () => "../../components/custom-navbar/custom-navbar.js";
const _easycom_calendar = () => "../../components/calendar/calendar.js";
const _easycom_taskitem = () => "../../components/taskitem/taskitem.js";
if (!Math) {
  (_easycom_custom_navbar + _easycom_calendar + _easycom_taskitem)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const isActive = common_vendor.ref("personal");
    const tasks = common_vendor.ref([]);
    const showModal = common_vendor.ref(false);
    const newTask = common_vendor.ref({ title: "", description: "", dueDate: "", assignee: "" });
    const toggle = (button) => {
      if (button === "team" && !userStore.isLoggedIn) {
        utils_common.handleUnauthAccess();
        return;
      }
      isActive.value = button;
    };
    const openTaskModal = () => {
      newTask.value = { title: "", description: "", dueDate: "", assignee: "" };
      showModal.value = true;
    };
    const closeTaskModal = () => {
      console.log("点击取消");
      showModal.value = false;
    };
    const saveTask = () => {
      console.log("点击保存");
      console.log("点击保存");
      const personalTasks = JSON.parse(localStorage.getItem("personalTasks") || "[]");
      personalTasks.push({ ...newTask.value, id: Date.now() });
      localStorage.setItem("personalTasks", JSON.stringify(personalTasks));
      fetchTasks();
      closeTaskModal();
    };
    const fetchTasks = () => {
      tasks.value = JSON.parse(localStorage.getItem("personalTasks") || "[]");
    };
    const viewTask = (taskId) => {
      if (isActive.value === "team") {
        console.log(`查看团队任务详情: ${taskId}`);
      }
    };
    common_vendor.onMounted(() => {
      fetchTasks();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isActive.value === "personal" ? 1 : "",
        b: common_vendor.o(($event) => toggle("personal")),
        c: isActive.value === "team" ? 1 : "",
        d: common_vendor.o(($event) => toggle("team")),
        e: common_vendor.f(tasks.value, (task, k0, i0) => {
          return {
            a: task.id,
            b: common_vendor.o(viewTask, task.id),
            c: "1cf27b2a-2-" + i0,
            d: common_vendor.p({
              task,
              mode: isActive.value
            })
          };
        }),
        f: common_vendor.o(openTaskModal),
        g: showModal.value
      }, showModal.value ? common_vendor.e({
        h: common_vendor.t(isActive.value === "personal" ? "个人" : "团队"),
        i: newTask.value.title,
        j: common_vendor.o(($event) => newTask.value.title = $event.detail.value),
        k: newTask.value.description,
        l: common_vendor.o(($event) => newTask.value.description = $event.detail.value),
        m: isActive.value === "team"
      }, isActive.value === "team" ? {
        n: newTask.value.assignee,
        o: common_vendor.o(($event) => newTask.value.assignee = $event.detail.value)
      } : {}, {
        p: newTask.value.dueDate,
        q: common_vendor.o(($event) => newTask.value.dueDate = $event.detail.value),
        r: common_vendor.o(closeTaskModal),
        s: common_vendor.o(saveTask)
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
