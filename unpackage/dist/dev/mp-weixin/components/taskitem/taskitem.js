"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "taskitem",
  props: {
    task: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      required: true
      // "personal" 或 "team"
    }
  },
  emits: ["viewTask"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleClick = () => {
      if (mode === "team") {
        emit("viewTask", task.id);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.task.title),
        b: common_vendor.t(__props.task.description),
        c: __props.task.dueDate
      }, __props.task.dueDate ? {
        d: common_vendor.t(__props.task.dueDate)
      } : {}, {
        e: __props.task.assignee
      }, __props.task.assignee ? {
        f: common_vendor.t(__props.task.assignee)
      } : {}, {
        g: common_vendor.o(handleClick)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-026cee52"]]);
wx.createComponent(Component);
