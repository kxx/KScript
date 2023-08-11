<template>
    <div>
        <ElTable ref="netWorkRef" :data="props.tableData" highlight-current-row height="90%" style="width: 100%">
            <ElTableColumn type="index" width="50" />
            <!-- <ElTableColumn prop="date" label="日期" width="80"/> -->
            <ElTableColumn prop="url" label="接口" :formatter="urlFormatter" />
            <ElTableColumn prop="method" label="方法" width="70" />
            <ElTableColumn prop="status" label="状态" width="60" />
            <ElTableColumn fixed="right" label="操作" width="100">
                <template #default="scope">
                    <ElButton link type="primary" size="small" @click="viewRequest(scope.row)">参数</ElButton>
                    <ElButton link type="primary" size="small" @click="viewResponse(scope.row)">响应</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>

        <ElDialog v-model="dialogVisible" :title="viewTitle" :close-on-click-modal="false" width="35%" class="viewDialog">
            <span>{{ viewContent }}</span>
        </ElDialog>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted, toRaw } from "vue";
import 'element-plus/dist/index.css'
import { ElTable, ElTableColumn, ElButton, ElDialog } from 'element-plus'
import { showSuccess, showError } from "../utils/notice";
import store from '../utils/store'
import { GM_xmlhttpRequest } from '$';


const props = defineProps(['tableData'])

const dialogVisible = ref(false)

const viewTitle = ref('')
const viewContent = ref('')
const dzfpSsotoken = ref('')

onMounted(() => {
    dzfpSsotoken.value = store.getCookie('dzfp-ssotoken')
})

function urlFormatter(row, column, cellValue, index) {
    return cellValue.split('?')[0];
}


async function viewRequest(row) {

    viewTitle.value = '负载'
    viewContent.value = ''
    dialogVisible.value = true

    let rowObj = toRaw(row);


    if (rowObj && rowObj.deData) {
        viewContent.value = rowObj.deData
        return
    }
    if (rowObj && rowObj.data && rowObj.data.includes('Jmbw')) {
        let params = {}
        params.url = row.url.split('?')[0]
        params.token = dzfpSsotoken.value
        params.jmbw = JSON.parse(row.data)['Jmbw']

        const res = await postData('https://skynjweb.com:7443/dppt/ac-api/support/decryptJmbw', params)

        const result = JSON.parse(res)
        if (result.code == 0) {
            viewContent.value = result.data.params
            row.deData = result.data.params
        } else {
            showError(result.msg)
        }
    } else {
        viewContent.value = row.data
    }
}

function viewResponse(row) {
    viewTitle.value = '响应'
    viewContent.value = JSON.parse(row.response)
    dialogVisible.value = true
}

function postData(url, data) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: 'POST',
            url,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(data),
            onload(xhr) {
                resolve(xhr.responseText);
            }
        });
    });
}

</script>

<style scoped>
.viewDialog span {
    word-break: normal;
    width: auto;
    display: block;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
}
</style>