// ==UserScript==
// @name         etax助手
// @namespace    https://github.com/kxx/etax-helper
// @version      1.0.0
// @author       kxx
// @description  支持etax参数解密
// @license      MIT
// @match        https://*.chinatax.gov.cn/*
// @match        https://*.chinatax.gov.cn:8443/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.prod.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/element-plus@2.2.32/dist/index.full.min.js
// @resource     element-plus/dist/index.css  https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.32/index.min.css
// @connect      skynjweb.com
// @grant        GM_cookie
// @grant        GM_getResourceText
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(a=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=a,document.head.appendChild(e)})(".viewDialog span[data-v-bf38f6fe]{word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden}");

(function(vue, jquery, elementPlus) {
  "use strict";
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
  var _sfc_main226 = {
    name: "Setting"
  }, _hoisted_1226 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2226 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
  }, null, -1), _hoisted_3225 = [
    _hoisted_2226
  ];
  function _sfc_render226(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1226, _hoisted_3225);
  }
  var setting_default = /* @__PURE__ */ export_helper_default(_sfc_main226, [["render", _sfc_render226], ["__file", "setting.vue"]]);
  var _sfc_main250 = {
    name: "Switch"
  }, _hoisted_1250 = {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_2250 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
  }, null, -1), _hoisted_3249 = [
    _hoisted_2250
  ];
  function _sfc_render250(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1250, _hoisted_3249);
  }
  var switch_default = /* @__PURE__ */ export_helper_default(_sfc_main250, [["render", _sfc_render250], ["__file", "switch.vue"]]);
  const cssLoader = (e) => {
    const t = GM_getResourceText(e), o = document.createElement("style");
    return o.innerText = t, document.head.append(o), t;
  };
  cssLoader("element-plus/dist/index.css");
  var monkeyWindow = window;
  var GM_openInTab = /* @__PURE__ */ (() => monkeyWindow.GM_openInTab)();
  var GM_xmlhttpRequest = /* @__PURE__ */ (() => monkeyWindow.GM_xmlhttpRequest)();
  class Store {
    constructor() {
      this.prefix = "etax_helper_";
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
  const supportService = {
    baseUrl: "https://skynjweb.com:7443/dppt/ac-api/support",
    async getAccount(params) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: `${this.baseUrl}/getAccount`,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-API-Key": store.getItem("config").apiKey || ""
          },
          data: JSON.stringify(params),
          onload: function(response) {
            resolve(response.responseText);
          },
          onerror: function(response) {
            reject(response.statusText);
          }
        });
      });
    },
    async getCookie(params) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: `${this.baseUrl}/getCookie`,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-API-Key": store.getItem("config").apiKey || ""
          },
          data: JSON.stringify(params),
          onload: function(response) {
            resolve(response.responseText);
          },
          onerror: function(response) {
            reject(response.statusText);
          }
        });
      });
    },
    async decryptJmbw(params) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: `${this.baseUrl}/decryptJmbw`,
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          },
          data: JSON.stringify(params),
          onload: function(response) {
            resolve(response.responseText);
          },
          onerror: function(response) {
            reject(response.statusText);
          }
        });
      });
    }
  };
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
  let showSuccess = function(msg, timeout) {
    showMessge({
      message: msg,
      type: "success",
      duration: timeout || 3e3
    });
  };
  const path = "/";
  const domain = ".chinatax.gov.cn";
  let setDpptCookie = (params) => {
    try {
      setCookieByDocument("SSO_SECURITY_CHECK_TOKEN", params.checkToken, "", path, domain, true);
      setCookieByDocument("dzfp-ssotoken", params.dzfpToken, "", path, domain, true);
      setCookieByDocument("security-token-key", "dzfp-ssotoken", "", path, domain, false);
    } catch {
    }
  };
  let setCookieByDocument = (name, value, expires, path2, domain2, secure) => {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires=" + expires;
    }
    if (path2) {
      cookieText += "; path=" + path2;
    }
    if (domain2) {
      cookieText += "; domain=" + domain2;
    }
    if (secure) {
      cookieText += "; secure";
    }
    document.cookie = cookieText;
    console.log("Cookie set successfully : " + name);
  };
  const _hoisted_1$1 = { class: "wsaasa" };
  const _sfc_main$4 = {
    __name: "Account",
    setup(__props) {
      const areaName = vue.ref("");
      const tableRef = vue.ref(null);
      const tableData = vue.ref([]);
      const formRef = vue.ref(null);
      const cookieForm = vue.reactive({
        checkToken: "",
        dzfpToken: "",
        platform: "dta"
      });
      const rules = {
        checkToken: [{ required: true, message: "checkToken不能为空", trigger: "blur" }],
        dzfpToken: [{ required: true, message: "dzfpToken不能为空", trigger: "blur" }]
      };
      vue.onMounted(() => {
        getAreaName();
        handleFilter();
      });
      const getAreaName = () => {
        let url = window.location.href || "";
        areaName.value = (url.match(/\.(.*?)\./) || [])[1] || "";
      };
      async function handleFilter() {
        const apiKey = store.getItem("config").apiKey || "";
        if (apiKey === "") {
          return;
        }
        const result = JSON.parse(await supportService.getAccount({ areaName: areaName.value }));
        if (result.code == 0) {
          tableData.value = result.data.workspaces;
        } else {
          console.log(result.msg || result.error);
        }
      }
      async function onSubmit() {
        formRef.value.validate((valid) => {
          if (!valid) {
            return;
          }
          setDpptCookie(vue.toRaw(cookieForm));
          openPage(cookieForm.platform);
        });
      }
      const resetForm = () => {
        formRef.value.resetFields();
      };
      async function handleAuth(row, ptdm) {
        const result = JSON.parse(await supportService.getCookie(row.cookieId));
        if (result.code == 0) {
          setCookies(result.data);
          openPage(ptdm);
        } else {
          console.log(result.msg || result.error);
        }
      }
      const openPage = (ptdm) => {
        let url = "https://dppt." + areaName.value + ".chinatax.gov.cn:8443";
        switch (ptdm) {
          case "dta":
            url = url.concat("/digital-tax-account");
            break;
          case "bim":
            url = url.concat("/blue-invoice-makeout");
            break;
          case "rim":
            url = url.concat("/red-invoice/home");
            break;
        }
        GM_openInTab(url, { active: true });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createVNode(vue.unref(elementPlus.ElTable), {
            ref_key: "tableRef",
            ref: tableRef,
            data: tableData.value,
            height: "400px",
            style: { "width": "100%" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "name",
                label: "税号"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "name2",
                label: "名称"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "name3",
                label: "用户"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "name3",
                label: "状态"
              }),
              vue.createVNode(vue.unref(elementPlus.ElTableColumn), {
                prop: "op",
                label: "操作"
              }, {
                default: vue.withCtx((scope) => [
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    size: "small",
                    text: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("校验")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    size: "small",
                    text: "",
                    type: "danger",
                    onClick: vue.withModifiers(($event) => handleAuth(scope.row, "dta"), ["prevent"])
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("DTA")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    size: "small",
                    text: "",
                    type: "danger",
                    onClick: vue.withModifiers(($event) => handleAuth(scope.row, "bim"), ["prevent"])
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("BIM")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    size: "small",
                    text: "",
                    type: "danger",
                    onClick: vue.withModifiers(($event) => handleAuth(scope.row, "rim"), ["prevent"])
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("RIM")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"]),
          vue.createVNode(vue.unref(elementPlus.ElPopover), {
            placement: "top",
            width: 600,
            trigger: "click"
          }, {
            reference: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElButton), {
                class: "mt-4",
                style: { "margin-top": "6px", "width": "100%" }
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("手动登录")
                ]),
                _: 1
              })
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElForm), {
                ref_key: "formRef",
                ref: formRef,
                model: cookieForm,
                rules,
                "label-width": "100px",
                size: "small"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), {
                    label: "CheckToken",
                    prop: "checkToken"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput), {
                        modelValue: cookieForm.checkToken,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cookieForm.checkToken = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), {
                    label: "DzfpToken",
                    prop: "dzfpToken"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElInput), {
                        modelValue: cookieForm.dzfpToken,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cookieForm.dzfpToken = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), {
                    label: "Platform",
                    prop: "platform"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElRadioGroup), {
                        "radio-group": "",
                        modelValue: cookieForm.platform,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cookieForm.platform = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(elementPlus.ElRadio), { label: "dta" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("税务数字账户")
                            ]),
                            _: 1
                          }),
                          vue.createVNode(vue.unref(elementPlus.ElRadio), { label: "bim" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("蓝字发票开具")
                            ]),
                            _: 1
                          }),
                          vue.createVNode(vue.unref(elementPlus.ElRadio), { label: "rim" }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("红字发票开具")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(elementPlus.ElFormItem), null, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElButton), {
                        type: "primary",
                        onClick: onSubmit
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("确定")
                        ]),
                        _: 1
                      }),
                      vue.createVNode(vue.unref(elementPlus.ElButton), { onClick: resetForm }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode("重置")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  const Network_vue_vue_type_style_index_0_scoped_bf38f6fe_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    __name: "Network",
    setup(__props) {
      const tableData = vue.ref([]);
      const dialogVisible = vue.ref(false);
      const viewTitle = vue.ref("");
      const viewContent = vue.ref("");
      const dzfpSsotoken = vue.ref("");
      vue.onMounted(() => {
        xhrListener();
        dzfpSsotoken.value = store.getCookie("dzfp-ssotoken");
      });
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
          let res = await supportService.decryptJmbw(params);
          const result = JSON.parse(res);
          if (result.code == 0) {
            viewContent.value = result.data.params;
            row.deData = result.data.params;
          } else {
            showError(result.msg || result.error);
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
      function handleClear() {
        tableData.value = [];
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(vue.unref(elementPlus.ElTable), {
            ref: "netWorkRef",
            data: tableData.value,
            "highlight-current-row": "",
            height: "400px",
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
          vue.createVNode(vue.unref(elementPlus.ElButton), {
            class: "mt-4",
            style: { "margin-top": "6px", "width": "100%" },
            onClick: handleClear
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("清空")
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event),
            title: viewTitle.value,
            "close-on-click-modal": false,
            width: "35%",
            class: "viewDialog"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("span", null, vue.toDisplayString(viewContent.value), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]);
      };
    }
  };
  const Network = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bf38f6fe"]]);
  const _sfc_main$2 = {
    __name: "Config",
    emits: ["close"],
    setup(__props, { emit }) {
      const configForm = vue.reactive({
        apiKey: "",
        newTab: false
      });
      vue.onMounted(() => {
        initConfig();
      });
      async function initConfig() {
        let config = store.getItem("config");
        configForm.apiKey = config.apiKey || "";
        configForm.newTab = config.newTab || false;
      }
      const saveConfig = () => {
        store.setItem("config", vue.toRaw(configForm));
        showSuccess("配置保存成功");
        closeConfig();
      };
      const closeConfig = () => {
        emit("close");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElForm), {
          model: configForm,
          "label-width": "auto",
          size: "small"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "API Key" }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElInput), {
                  modelValue: configForm.apiKey,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configForm.apiKey = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            vue.createVNode(vue.unref(elementPlus.ElFormItem), { label: "新标签页" }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElSwitch), {
                  modelValue: configForm.newTab,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configForm.newTab = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            vue.createVNode(vue.unref(elementPlus.ElFormItem), null, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(elementPlus.ElButton), { onClick: closeConfig }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("取消")
                  ]),
                  _: 1
                }),
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  type: "primary",
                  onClick: saveConfig
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("确定")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]);
      };
    }
  };
  const _hoisted_1 = { style: { "flex": "auto" } };
  const _sfc_main$1 = {
    __name: "Home",
    setup(__props) {
      const drawerVisible = vue.ref(false);
      const direction = vue.ref("rtl");
      const componentRef = vue.ref();
      const componentName = vue.ref(null);
      const configDialogVisible = vue.ref(false);
      vue.onMounted(() => {
        if (window.location.href.startsWith("https://tpass.") || window.location.href.startsWith("https://etax.")) {
          componentName.value = vue.markRaw(_sfc_main$4);
        } else {
          componentName.value = vue.markRaw(Network);
        }
      });
      const showDrawer = () => {
        drawerVisible.value = true;
      };
      const changeMode = () => {
        if (componentName.value == vue.markRaw(_sfc_main$4)) {
          componentName.value = vue.markRaw(Network);
        } else if (componentName.value == vue.markRaw(Network)) {
          componentName.value = vue.markRaw(_sfc_main$4);
        }
      };
      const showConfig = () => {
        configDialogVisible.value = true;
      };
      const closeConfig = () => {
        configDialogVisible.value = false;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(vue.unref(elementPlus.ElAffix), { offset: 120 }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(elementPlus.ElButton), {
                type: "primary",
                icon: vue.unref(promotion_default),
                circle: "",
                onClick: showDrawer
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(elementPlus.ElDrawer), {
            modelValue: drawerVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => drawerVisible.value = $event),
            title: "接口",
            direction: direction.value,
            "with-header": false,
            size: "50%"
          }, {
            footer: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_1, [
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  type: "primary",
                  icon: vue.unref(setting_default),
                  style: { "float": "left" },
                  circle: "",
                  onClick: showConfig
                }, null, 8, ["icon"]),
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  type: "info",
                  icon: vue.unref(switch_default),
                  plain: "",
                  onClick: changeMode
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("模式")
                  ]),
                  _: 1
                }, 8, ["icon"])
              ])
            ]),
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(componentName.value), {
                ref_key: "componentRef",
                ref: componentRef
              }, null, 512))
            ]),
            _: 1
          }, 8, ["modelValue", "direction"]),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: configDialogVisible.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configDialogVisible.value = $event),
            title: "设置",
            width: "350",
            "append-to-body": "",
            "close-on-click-modal": false
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$2, { onClose: closeConfig })
            ]),
            _: 1
          }, 8, ["modelValue"])
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
