<template>
    <ElAffix :offset="120">
      <ElButton type="primary" :icon="Promotion" circle @click="showDrawer" />
    </ElAffix>
  
    <ElDrawer v-model="drawerVisible" title="接口" :direction="direction" :with-header="false" size="50%">
      <component ref="componentRef" :is="componentName"></component>
      <template #footer>
        <div style="flex: auto">
            <ElButton type="primary" :icon="Setting" style="float: left;" circle @click="showConfig"/>
            <ElButton type="info" :icon="Switch" plain @click="changeMode">模式</ElButton>
        </div>
      </template>
    </ElDrawer>

    <ElDialog v-model="configDialogVisible" title="设置" width="350" append-to-body :close-on-click-modal=false>
        <Config @close="closeConfig" />
    </ElDialog>
  </template>

<script setup>
import $ from "jquery"
import { ref, onMounted,markRaw } from "vue";
import { ElAffix, ElButton, ElDrawer,ElDialog } from 'element-plus'
import { Promotion,Setting,Switch} from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import Account from './components/Account.vue';
import Network from './components/Network.vue';
import Config from './components/Config.vue';

const drawerVisible = ref(false)
const direction = ref('rtl')

const componentRef = ref()
const componentName = ref(null)

const configDialogVisible = ref(false)

onMounted(() => {
    if (window.location.href.startsWith('https://tpass.') || window.location.href.startsWith('https://etax.')) {
    componentName.value = markRaw(Account)
  }else{
    componentName.value = markRaw(Network)
  }
})

const showDrawer = () => {
    drawerVisible.value = true
}

//切换模式
const changeMode = () => {
    if (componentName.value == markRaw(Account)) {
        componentName.value = markRaw(Network)
    } else if (componentName.value == markRaw(Network)) {
        componentName.value = markRaw(Account)
    }
}

const showConfig = () => {
  configDialogVisible.value = true
}

const closeConfig = () => {
  configDialogVisible.value = false
}

</script>