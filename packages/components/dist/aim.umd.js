(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.aim = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main = vue.defineComponent({
    name: "ai-button",
    setup() {
      return {};
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "测试按钮");
  }
  const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  exports2.Button = Button;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
