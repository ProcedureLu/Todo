"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "calendar",
  setup(__props) {
    const currentIndex = common_vendor.ref(0);
    const months = common_vendor.ref([]);
    function generateCalendarData() {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      for (let i = 0; i < 12; i++) {
        months.value.push({
          name: monthNames[i],
          days: Array.from({ length: 30 }, (_, index) => index + 1)
          // 假设每个月30天
        });
      }
    }
    function onSwiperChange(event) {
      currentIndex.value = event.detail.current;
    }
    common_vendor.onMounted(() => {
      generateCalendarData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(months.value, (month, index, i0) => {
          return {
            a: common_vendor.t(month.name),
            b: common_vendor.f(month.days, (day, k1, i1) => {
              return {
                a: common_vendor.t(day),
                b: day
              };
            }),
            c: index
          };
        }),
        b: currentIndex.value,
        c: common_vendor.o(onSwiperChange)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a94fe31"]]);
wx.createComponent(Component);
