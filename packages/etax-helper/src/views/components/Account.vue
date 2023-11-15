<template>
    <div class="wsaasa">
        <ElTable ref="tableRef" :data="tableData" height="400px" style="width: 100%">
            <ElTableColumn prop="name" label="税号"/>
            <ElTableColumn prop="name2" label="名称"/>
            <ElTableColumn prop="name3" label="用户"/>
            <ElTableColumn prop="name3" label="状态"/>
            <ElTableColumn prop="op" label="操作">
                <template #default="scope">
                    <ElButton size="small" text>校验</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row,'dta')">DTA</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row,'bim')">BIM</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row,'rim')">RIM</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
        <ElPopover placement="top" :width="600" trigger="click">
          <template #reference>
            <ElButton class="mt-4" style="margin-top: 6px;width: 100%">手动登录</ElButton>
          </template>
          <ElForm ref="formRef" :model="cookieForm" :rules="rules" label-width="100px" size="small">
            <ElFormItem label="CheckToken" prop="checkToken">
                <ElInput v-model="cookieForm.checkToken" />
            </ElFormItem>
            <ElFormItem label="DzfpToken" prop="dzfpToken">
                <ElInput v-model="cookieForm.dzfpToken" />
            </ElFormItem>
            <ElFormItem label="Platform" prop="platform">
                <ElRadioGroup radio-group v-model="cookieForm.platform">
                    <ElRadio  label="dta">税务数字账户</ElRadio>
                    <ElRadio  label="bim">蓝字发票开具</ElRadio>
                    <ElRadio  label="rim">红字发票开具</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" @click="onSubmit">确定</ElButton>
                <ElButton @click="resetForm">重置</ElButton>
            </ElFormItem>
          </ElForm>
        </ElPopover>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive, toRaw } from "vue";
import 'element-plus/dist/index.css'
import { ElForm, ElFormItem, ElInput, ElButton, ElTable, ElTableColumn, ElPopover, ElRadio, ElRadioGroup } from 'element-plus'
import supportService from '../service/support-service'
import { showSuccess, showError } from "../../utils/notice";
import { setDpptCookie } from "../../utils/cookie";
import store from '../../utils/store'
import { GM_openInTab } from '$';

const areaName = ref('')

const tableRef = ref(null)

const tableData = ref([]);

const formRef = ref(null)

const cookieForm = reactive({
    checkToken: '',
    dzfpToken: '',
    platform: 'dta'
})

const rules = {
    checkToken: [{ required: true, message: "checkToken不能为空", trigger: "blur" }],
    dzfpToken: [{ required: true, message: "dzfpToken不能为空", trigger: "blur" }],
}


onMounted(() => {
    getAreaName()
    handleFilter()
})

const getAreaName = () => {
    let url = window.location.href || ''
    areaName.value = (url.match(/\.(.*?)\./) || [])[1] || ''
}

async function handleFilter() {
    const apiKey = store.getItem('config').apiKey||''
    if(apiKey === ''){
        return
    }

    const result = JSON.parse(await supportService.getAccount({areaName:areaName.value}));

    if (result.code == 0) {
        tableData.value = result.data.workspaces;
    } else {
        console.log(result.msg || result.error)
    }
}

async function onSubmit() {
    formRef.value.validate((valid) => {
        if (!valid){
            return;
        }
        setDpptCookie(toRaw(cookieForm))
        openPage(cookieForm.platform);
    })
}
const resetForm = () => {
    formRef.value.resetFields()
}

async function handleAuth(row, ptdm) {
    const result = JSON.parse(await supportService.getCookie(row.cookieId));

    if (result.code == 0) {
        setCookies(result.data);
        openPage(ptdm);
    } else {
        console.log(result.msg || result.error)
    }
}

//打开页面
const openPage = (ptdm) => {

    let url = 'https://dppt.'+areaName.value+'.chinatax.gov.cn:8443'

    switch (ptdm) {
        case 'dta':
            url = url.concat('/digital-tax-account')
            break;
        case 'bim':
            url = url.concat('/blue-invoice-makeout')
            break;
        case 'rim':
            url = url.concat('/red-invoice/home')
            break;
    }
    GM_openInTab(url, { active: true });
}

</script>

<style scoped></style>