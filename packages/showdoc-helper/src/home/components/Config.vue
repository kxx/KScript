<template>
  <ElForm :model="configForm" label-width="116px" label-position="left" class="demo-form-inline">
    <ElFormItem label="API Key">
      <ElInput v-model="configForm.apiKey" />
    </ElFormItem>
    <ElFormItem label="文档模板">
      <ElSelect v-model="configForm.templateId" placeholder="请选择模板">
        <ElOption v-for="item in templateOptions" :key="item.id" :value="item.id" :label="item.template_title">
        </ElOption>
      </ElSelect>
    </ElFormItem>
    <ElFormItem label="不同步目录">
      <ElSwitch v-model="configForm.sameCatalog" />
    </ElFormItem>
    <ElFormItem>
      <ElButton>取消</ElButton>
      <ElButton type="primary" @click="saveConfig">确定</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup>
import { ref, reactive, onMounted, toRaw } from "vue";
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElSwitch, ElButton } from 'element-plus'
import { showSuccess, showError } from "../../utils/notice";
import store from '../../utils/store'
import showdocService from '../service/showdoc-service'


const configForm = reactive({
  apiKey: '',
  templateId: '',
  sameCatalog: false,
})

const templateOptions = ref([]);

onMounted(() => {
  initConfig()
})


async function initConfig() {
  let config = store.getItem('config');
  configForm.apiKey = config.apiKey || '';
  configForm.templateId = config.templateId || '';
  configForm.sameCatalog = config.sameCatalog || false;

  let result = await showdocService.getTemplates();
  if (result.isSuccess()) {
    templateOptions.value = result.data.data;
  }
}


const saveConfig = () => {
  let used_template = '';
  let template = templateOptions.value.find(item=>item.id == configForm.templateId)
  if(template){
    used_template = template.template_content;
  }
  store.setItem('used_template', used_template)
  store.setItem('config', toRaw(configForm))
  showSuccess('配置保存成功')
}

</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
</style>
