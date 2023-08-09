<template>
  <ElDialog v-model="dialogVisible" title="API平台" width="65%" append-to-body :close-on-click-modal=false>
    <PostmanView />
    <template #footer>
      <ElButton type="primary" :icon="Setting" circle @click="showConfig"/>
    </template>
  </ElDialog>

  <ElDialog v-model="configDialogVisible" title="设置" width="550" append-to-body :close-on-click-modal=false>
    <Config />
  </ElDialog>


</template>

<script setup>
import $ from "jquery"
import { ref, onMounted } from "vue";
import { ElDialog, ElButton} from 'element-plus'
import {Setting} from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import Config from '../components/Config.vue'
import PostmanView from '../../postman/view/Postman.vue'


const dialogVisible = ref(false)
const configDialogVisible = ref(false)


onMounted(() => {
  initMenuButton();
})


let showApiPlatform = function () {
  dialogVisible.value = true
}

let showConfig = function () {
  configDialogVisible.value = true
}


//初始化页面按钮
function initMenuButton() {

  if ($('.button-api-platform').length !== 0) {
    $('.button-api-platform').remove();
  }

  var css = $('#app .header-right:eq(0)')

  if ($(css).children().length > 0) {
    var html = ''
    html += '<div data-v-16856998 class="el-tooltip icon-item button-api-platform" aria-describedby="el-tooltip-9526" tabindex="0"><i data-v-16856998="" class="fas fa-laptop-code"></i></div>'

    $(css).children().prepend(html)
    $('.button-api-platform').on('click', showApiPlatform)

  } else {
    setTimeout(function () {
      initMenuButton(menuName)
    }, 1000)
  }
}

</script>