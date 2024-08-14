<template>
    <div class="table-container">
        <ElTable ref="tableRef" :data="tableData" height="100%" size="small">
            <ElTableColumn prop="name" label="税号" />
            <ElTableColumn prop="name2" label="名称" />
            <ElTableColumn prop="name3" label="用户" />
            <ElTableColumn prop="name3" label="状态" />
            <ElTableColumn prop="op" width="100px">
                <template #header>
                    <ElInput v-model="search" size="small" placeholder="nsrsbh、cookieId" />
                </template>
                <template #default="scope">
                    <ElButton size="small" text>校验</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row, 'dta')">DTA</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row, 'bim')">BIM</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="handleAuth(scope.row, 'rim')">RIM</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>

        <ElPopover placement="top" :width="600" trigger="click">
            <template #reference>
                <ElButton class="mt-1" style="margin-top: 6px;">手动登录</ElButton>
            </template>
            <ElForm ref="formRef" :model="cookieForm" :rules="rules" label-width="100px" size="small">
                <ElFormItem v-if="cookieForm.platform == 'home'" label="Session" prop="session">
                    <ElInput v-model="cookieForm.session"/>
                </ElFormItem>
                <ElFormItem v-if="cookieForm.platform != 'home'" label="CheckToken" prop="checkToken">
                    <ElInput v-model="cookieForm.checkToken"/>
                </ElFormItem>
                <ElFormItem v-if="cookieForm.platform != 'home'" label="DzfpToken" prop="dzfpToken">
                    <ElInput v-model="cookieForm.dzfpToken"/>
                </ElFormItem>
                <ElFormItem label="Platform" prop="platform">
                    <ElRadioGroup radio-group v-model="cookieForm.platform">
                        <ElRadio label="home">主系统</ElRadio>
                        <ElRadio label="dta">税务数字账户</ElRadio>
                        <ElRadio label="bim">蓝字发票开具</ElRadio>
                        <ElRadio label="rim">红字发票开具</ElRadio>
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
import { GM_openInTab } from '$';
import { ref, onMounted, reactive, toRaw } from "vue";
//import 'element-plus/dist/index.css'
import { ElForm, ElFormItem, ElInput, ElButton, ElTable, ElTableColumn, ElPopover, ElRadio, ElRadioGroup } from 'element-plus'
import supportService from '../service/support-service'
//import { showSuccess, showError } from "../../utils/notice";
import { setEtaxCookie, setDpptCookie } from "../../utils/cookie";
import store from '../../utils/store'


const search = ref('')

const areaName = ref('')

const tableRef = ref(null)

const tableData = ref([]);

const formRef = ref(null)

const cookieForm = reactive({
    area: '',
    session: '',
    checkToken: '',
    dzfpToken: '',
    platform: 'dta'
})

const rules = {
    session: [{ required: true, message: "session不能为空", trigger: "blur" }],
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
    cookieForm.area = areaName.value
}

async function handleFilter() {
    const apiKey = store.getItem('config').apiKey || ''
    if (apiKey === '') {
        return
    }

    const result = JSON.parse(await supportService.getAccount({ areaName: areaName.value }));

    if (result.code == 0) {
        tableData.value = result.data.workspaces;
    } else {
        console.log(result.msg || result.error)
    }
}

async function onSubmit() {
    formRef.value.validate((valid) => {
        if (!valid) {
            return;
        }
        switch (cookieForm.platform) {
            case 'home':
                setEtaxCookie(toRaw(cookieForm))
                openEtaxPage(cookieForm.platform);
                break;
            case 'dta':
            case 'bim':
            case 'rim':
                setDpptCookie(toRaw(cookieForm))
                openDpptPage(cookieForm.platform)
                break;
        }
    })
}
const resetForm = () => {
    formRef.value.resetFields()
}

async function handleAuth(row, ptdm) {
    const result = JSON.parse(await supportService.getCookie(row.cookieId));

    if (result.code == 0) {
        // setCookies(result.data);
        // openDpptPage(ptdm);
    } else {
        console.log(result.msg || result.error)
    }
}

//打开页面
const openEtaxPage = (ptdm) => {
    let url = 'https://etax.' + areaName.value + '.chinatax.gov.cn'

    switch (areaName.value) {
        case 'jiangsu':
            url = url.concat('/portal/index.do')
            break;
        case 'shanghai':
            url = url.concat('/wszx-web/bszm/apps/views/companyPage/desktopTax.html#/change')
            break;
        case 'shandong':
            url = url.concat(':8443/loginb/')
            break;
        case 'qingdao':
            url = url.concat('/portal/')
            break;
        default:
            url = url.concat('/portal/index.do')
            break;
    }
    GM_openInTab(url, { active: true });
}

const openDpptPage = (ptdm) => {

    let url = 'https://dppt.' + areaName.value + '.chinatax.gov.cn:8443'

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

<style scoped>
.table-container {
display: flex;
flex-direction: column;
height: 100%;
}
</style>