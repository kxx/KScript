// ==UserScript==
// @name         etax助手
// @namespace    https://github.com/kxx/etax-helper
// @version      1.0.0
// @author       kxx
// @description  支持etax参数解密
// @license      MIT
// @match        https://dppt.guangdong.chinatax.gov.cn:8443/*
// @match        https://dppt.jiangsu.chinatax.gov.cn:8443/*
// @match        https://dppt.qingdao.chinatax.gov.cn:8443/*
// @match        https://dppt.shanghai.chinatax.gov.cn:8443/*
// @require      https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.global.min.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.32/index.full.min.js
// @resource     element-plus/dist/index.css  https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.32/index.min.css
// @connect      skynjweb.com
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(a=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=a,document.head.appendChild(e)})(".viewDialog span[data-v-3d1453fe]{word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden}");

(function(vue, jquery, elementPlus) {
  "use strict";
  var monkeyWindow = window;
  var GM_xmlhttpRequest = /* @__PURE__ */ (() => monkeyWindow.GM_xmlhttpRequest)();
  /*! Element Plus Icons Vue v2.0.6 */
  var export_helper_default = (sfc, props) => {
    let target = sfc.__vccOpts || sfc;
    for (let [key, val] of props)
      target[key] = val;
    return target;
  };
  var _sfc_main205 = {
    name: "Promotion"
  }, _hoisted_1205 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2205 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
  }, null, -1), _hoisted_3204 = [
    _hoisted_2205
  ];
  function _sfc_render205(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1205, _hoisted_3204);
  }
  var promotion_default = /* @__PURE__ */ export_helper_default(_sfc_main205, [["render", _sfc_render205], ["__file", "promotion.vue"]]);
  const cssLoader = (e) => {
    const t = GM_getResourceText(e), o = document.createElement("style");
    return o.innerText = t, document.head.append(o), t;
  };
  cssLoader("element-plus/dist/index.css");
  var message = null;
  let showMessge = function(option) {
    try {
      message.close();
    } catch {
    }
    message = elementPlus.ElMessage(option);
  };
  let showError = function(msg, timeout) {
    showMessge({
      message: msg,
      type: "error",
      duration: timeout || 3e3
    });
  };
  class Store {
    constructor() {
      this.prefix = "etax_hepper_";
    }
    getEtax(key = "") {
      let item = localStorage.getItem(key);
      if (!item) {
        return "";
      }
      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    }
    getItem(key = "") {
      return this.getEtax(this.prefix + key);
    }
    setItem(key = "", value) {
      localStorage.setItem(this.prefix + key, value instanceof Object ? JSON.stringify(value) : value);
    }
    removeItem(key) {
      if (key == null || key == "") {
        return;
      }
      localStorage.removeItem(this.prefix + key);
    }
    getCookies() {
      var cookieObj = {};
      var cookieStr = document.cookie;
      var cookieList = cookieStr.split(";");
      for (const cookie of cookieList) {
        let _c = cookie.trim().split("=");
        cookieObj[_c[0]] = _c[1];
      }
      return cookieObj;
    }
    getCookie(key = "") {
      var cookieObj = this.getCookies();
      return cookieObj[key];
    }
  }
  const store = new Store();
  const NetWork_vue_vue_type_style_index_0_scoped_3d1453fe_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    __name: "NetWork",
    props: ["tableData"],
    setup(__props) {
      const props = __props;
      const dialogVisible = vue.ref(false);
      const viewTitle = vue.ref("");
      const viewContent = vue.ref("");
      const viewLoaing = vue.ref(true);
      const dzfpSsotoken = vue.ref("");
      vue.onMounted(() => {
        dzfpSsotoken.value = store.getCookie("dzfp-ssotoken");
      });
      function urlFormatter(row, column, cellValue, index) {
        return cellValue.split("?")[0];
      }
      async function viewRequest(row) {
        viewTitle.value = "负载";
        viewContent.value = "";
        dialogVisible.value = true;
        let rowObj = vue.toRaw(row);
        if (rowObj && rowObj.deData) {
          viewContent.value = rowObj.deData;
          return;
        }
        if (rowObj && rowObj.data && rowObj.data.includes("Jmbw")) {
          let params = {};
          params.url = row.url.split("?")[0];
          params.token = dzfpSsotoken.value;
          params.jmbw = JSON.parse(row.data)["Jmbw"];
          const res = await postData("https://skynjweb.com:7443/dppt/ac-api/support/decryptJmbw", params);
          const result = JSON.parse(res);
          if (result.code == 0) {
            viewContent.value = result.data.params;
            row.deData = result.data.params;
          } else {
            showError(result.msg);
          }
        } else {
          viewContent.value = row.data;
        }
      }
      function viewResponse(row) {
        viewTitle.value = "响应";
        viewContent.value = JSON.parse(row.response);
        dialogVisible.value = true;
      }
      function postData(url, data) {
        return new Promise((resolve, reject) => {
          GM_xmlhttpRequest({
            method: "POST",
            url,
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            },
            data: JSON.stringify(data),
            onload(xhr) {
              resolve(xhr.responseText);
            }
          });
        });
      }
      return (_ctx, _cache) => {
        const _directive_loading = vue.resolveDirective("loading");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(vue.unref(elementPlus.ElTable), {
            ref: "netWorkRef",
            data: props.tableData,
            "highlight-current-row": "",
            height: "90%",
            style: { "width": "100%" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                type: "index",
                width: "50"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "url",
                label: "接口",
                formatter: urlFormatter
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "method",
                label: "方法",
                width: "70"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "status",
                label: "状态",
                width: "60"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                fixed: "right",
                label: "操作",
                width: "100"
              }, {
                default: vue.withCtx((scope) => [
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => viewRequest(scope.row)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("参数")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: ($event) => viewResponse(scope.row)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("响应")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"]),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event),
            title: viewTitle.value,
            "close-on-click-modal": false,
            width: "35%",
            class: "viewDialog"
          }, {
            default: vue.withCtx(() => [
              vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", null, [
                vue.createElementVNode("span", null, vue.toDisplayString(viewContent.value), 1)
              ])), [
                [_directive_loading, viewLoaing.value]
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]);
      };
    }
  };
  const NetWork = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3d1453fe"]]);
  const _hoisted_1 = { style: { "flex": "auto" } };
  const _sfc_main$1 = {
    __name: "Home",
    setup(__props) {
      const drawer = vue.ref(false);
      const direction = vue.ref("rtl");
      const tableData = vue.ref([]);
      vue.ref(["/v1/report"]);
      vue.onMounted(() => {
        xhrListener();
      });
      const handleClear = () => {
        tableData.value = [];
      };
      function xhrListener() {
        monkeyWindow.m_log = monkeyWindow.console.log;
        monkeyWindow.m_log("开启请求监听");
        const originalXhrOpen = monkeyWindow.XMLHttpRequest.prototype.open;
        monkeyWindow.XMLHttpRequest.prototype.open = function(method, url) {
          const xhr = this;
          const originalXhrSend = xhr.send;
          xhr.send = function(data) {
            const requestData = {
              method,
              url,
              data,
              date: new Date().toLocaleTimeString()
            };
            xhr.addEventListener("load", function() {
              const responseData = {
                status: xhr.status,
                response: xhr.responseText
              };
              insertRequest(Object.assign({}, requestData, responseData));
            });
            originalXhrSend.call(xhr, data);
          };
          originalXhrOpen.apply(this, arguments);
        };
      }
      function insertRequest(request) {
        if (!request || request.url.includes("/v1/report"))
          return;
        tableData.value.unshift(request);
        if (tableData.value.length > 50) {
          tableData.value.pop();
        }
      }
      let showDrawer = function() {
        drawer.value = true;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(vue.unref(elementPlus.ElAffix), { offset: 120 }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElButton), {
                type: "primary",
                icon: vue.unref(promotion_default),
                circle: "",
                onClick: vue.unref(showDrawer)
              }, null, 8, ["icon", "onClick"])
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(elementPlus.ElDrawer), {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => drawer.value = $event),
            title: "接口",
            direction: direction.value,
            "with-header": false,
            size: "50%"
          }, {
            footer: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_1, [
                vue.createVNode(vue.unref(elementPlus.ElButton), { onClick: handleClear }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("清空")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(NetWork, { tableData: tableData.value }, null, 8, ["tableData"])
            ]),
            _: 1
          }, 8, ["modelValue", "direction"])
        ], 64);
      };
    }
  };
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$1);
      };
    }
  };
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );
})(Vue, $, ElementPlus);
