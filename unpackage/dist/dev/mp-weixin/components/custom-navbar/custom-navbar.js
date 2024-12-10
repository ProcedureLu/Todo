"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_systemInfo = require("../../utils/systemInfo.js");
const _sfc_main = {
  __name: "custom-navbar",
  props: {
    title: {
      type: String,
      default: ""
    },
    showBack: {
      type: Boolean,
      default: true
      // 是否显示返回按钮
    },
    backgroundColor: {
      type: String,
      default: "#9fefef"
      // 背景颜色
    },
    color: {
      type: String,
      default: "#000000"
      // 字体颜色
    }
  },
  setup(__props) {
    const { statusBarHeight, navBarHeight, totalNavHeight } = utils_systemInfo.getSystemInfo();
    const onBack = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return {
        a: `${common_vendor.unref(statusBarHeight)}px`,
        b: common_vendor.o(onBack),
        c: `${common_vendor.unref(navBarHeight)}px`,
        d: `${common_vendor.unref(totalNavHeight)}px`,
        e: __props.backgroundColor,
        f: `${common_vendor.unref(totalNavHeight)}px`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94e9cc56"]]);
wx.createComponent(Component);
