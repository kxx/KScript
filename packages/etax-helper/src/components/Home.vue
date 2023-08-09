<template>
  <ElAffix :offset="120">
    <ElButton type="primary" :icon="Promotion" circle @click="showDrawer" />
  </ElAffix>

  <ElDrawer v-model="drawer" title="接口" :direction="direction" :with-header="false" size="50%">
    <NetWork :tableData="tableData" />
    <template #footer>
      <div style="flex: auto">
        <ElButton @click="handleClear">清空</ElButton>
      </div>
    </template>
  </ElDrawer>
</template>

<script setup>
import $ from "jquery"
import { monkeyWindow } from '$';
import { ref, onMounted } from "vue";
import { ElAffix, ElButton, ElDrawer } from 'element-plus'
import { Promotion } from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import NetWork from './NetWork.vue';

const drawer = ref(false)
const direction = ref('rtl')
const tableData = ref([])
const excludeUrls = ref(['/v1/report'])


onMounted(() => {
  xhrListener()
})

const handleClear = () => {
  tableData.value = []
}

function xhrListener() {
  monkeyWindow.m_log = monkeyWindow.console.log;
  monkeyWindow.m_log('开启请求监听');

  const originalXhrOpen = monkeyWindow.XMLHttpRequest.prototype.open;

  monkeyWindow.XMLHttpRequest.prototype.open = function (method, url) {
    const xhr = this;
    const originalXhrSend = xhr.send;
    xhr.send = function (data) {
      const requestData = {
        method,
        url,
        data,
        date:new Date().toLocaleTimeString()
      };

      xhr.addEventListener('load', function () {
        const responseData = {
          status: xhr.status,
          response: xhr.responseText,
        };
        insertRequest(Object.assign({},requestData,responseData))
      });

      originalXhrSend.call(xhr, data);
    };
    originalXhrOpen.apply(this, arguments);
  };
}


function insertRequest(request) {
      
  if (!request || request.url.includes('/v1/report')) return;

  tableData.value.unshift(request);

  // 控制数组长度不超过50
  if (tableData.value.length > 50) {
    tableData.value.pop(); // 移除末尾元素
  }
}


let showDrawer = function () {
  drawer.value = true
}

</script>