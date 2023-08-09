<template>
    <div>
        <ElForm :inline="true" :model="postmanForm">
            <ElFormItem label="工作区">
                <ElSelect v-model="postmanForm.workspaceId" size="small" placeholder="" clearable
                    @change="queryAllCollections">
                    <ElOption v-for="item in workspaceOptions" :key="item.id" :value="item.id" :label="item.name">
                    </ElOption>
                </ElSelect>
            </ElFormItem>
            <ElFormItem label="集合">
                <ElSelect v-model="postmanForm.collectionVal" value-key="id" size="small" placeholder="" clearable
                    @change="handleFilter">
                    <ElOption v-for="item in collectionOptions" :key="item.id" :value="item" :label="item.name">
                    </ElOption>
                </ElSelect>
            </ElFormItem>
            <!-- <ElFormItem label="名称">
                <ElInput v-model="postmanForm.name" size="small" placeholder="name" clearable />
            </ElFormItem> -->
            <ElFormItem>
                <ElButton type="primary" @click="handleFilter">查询</ElButton>
                <ElButton type="primary" @click="batchCreateDoc">批量创建</ElButton>
            </ElFormItem>
        </ElForm>

        <!-- <div style="margin-top: 10px">
            <ElButton type="primary" size="small" @click="batchCreateDoc">批量创建</ElButton>
        </div> -->

        <ElTable ref="apiTableRef" :data="tableData" @selection-change="handleSelectionChange" height="250"
            style="width: 100%">
            <ElTableColumn type="selection" width="55" />
            <ElTableColumn prop="name" label="标题" />
            <ElTableColumn prop="creator" label="方式">
                <template #default="scope">
                    <ElPopover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>接口地址: {{ scope.row.request.url.raw }}</div>
                        </template>
                        <template #reference>
                            <ElTag>{{ scope.row.request.method }}</ElTag>
                        </template>
                    </ElPopover>
                </template>
            </ElTableColumn>
            <ElTableColumn prop="catalog" label="目录" width="100" :filters=catalogFilters :filter-method="filterCatalog"
                filter-placement="bottom-end">
                <template #default="scope">
                    {{ scope.row.catalog || '/' }}
                </template>
            </ElTableColumn>
            <ElTableColumn prop="op" label="操作">
                <template #default="scope">
                    <ElButton size="small" text>预览</ElButton>
                    <ElButton size="small" text type="danger" @click.prevent="createDoc(scope.row)">创建</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive, toRaw } from "vue";
import 'element-plus/dist/index.css'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElTable, ElTableColumn, ElPopover, ElTag } from 'element-plus'
import postmanService from '../service/postman-service'
import showdocService from '../../home/service/showdoc-service'
import { showSuccess, showError } from "../../utils/notice";
import store from '../../utils/store'

const postmanForm = reactive({
    workspaceId: '',
    collectionVal: '',
    name: '',
})

const workspaceOptions = ref([]);
const collectionOptions = ref([]);

const tableData = ref([]);
const selectedApis = ref([]);
const catalogFilters = ref([]);

const itemInfo = reactive({
    api_key: '',
    api_token: '',
    item_id: '',
})

onMounted(() => {
    initWorkspaces()
})

const handleSelectionChange = (val) => {
    selectedApis.value = val
}

const filterCatalog = (value, row) => {
    return row.catalog === value
}

async function initWorkspaces() {
    let result = await postmanService.getAllWorkspaces();
    if (result.isSuccess()) {
        workspaceOptions.value = result.data.workspaces;
    }
}

async function queryAllCollections(workspaceId) {
    collectionOptions.value = [];
    let result = await postmanService.getAllCollections(workspaceId);
    if (result.isSuccess()) {
        collectionOptions.value = result.data.collections;
    }
}

async function handleFilter() {
    let result = await postmanService.getACollection(postmanForm.collectionVal.id);
    if (result.isSuccess()) {
        tableData.value = treeToArray(result.data.collection?.item || [], '');
    }
}

function treeToArray(tree, catalog) {
    return tree.reduce((res, node) => {
        const { item, ...i } = node
        if (item) {
            const separators = (catalog == '' ? '' : '/');
            res = res.concat(treeToArray(item, `${catalog}${separators}${node.name}`));
        } else {
            res.push(Object.assign({}, i, { catalog: catalog }))
        }
        return res
    }, [])
}



async function createDoc(row) {
    await getItemInfo()
    await updateByApi(row)
}

async function getItemInfo() {
    let name = postmanForm.collectionVal.name;
    let result = await showdocService.getItemByName(name);
    if (result.isSuccess) {
        let item = result.data
        if (item) {
            itemInfo.item_id = item.item_id
        } else {
            let params = {};
            params.item_type = 1;
            params.item_name = name;
            params.item_description = '';
            result = await showdocService.addItem(params);
            itemInfo.item_id = result.data.data.item_id
        }
    };

    if (itemInfo.item_id == '') return;
    result = await showdocService.getItemKey({ item_id: itemInfo.item_id });
    if (result.isSuccess()) {
        itemInfo.api_key = result.data.data.api_key
        itemInfo.api_token = result.data.data.api_token
    }
}

async function updateByApi(row) {
    console.log(row)
    console.log(store.getItem('used_template'))
    let params = {};
    params.api_key = itemInfo.api_key;
    params.api_token = itemInfo.api_token;
    params.cat_name = row.catalog;
    params.page_title = row.name;
    params.page_content = store.getItem('used_template');
    let result = await showdocService.updateByApi(params);
    if (result.isSuccess()) {
        console.log('创建成功：'+JSON.stringify(result.data))
        showSuccess('创建成功')
    }
}

async function batchCreateDoc() {
    let list = [];
    if (tableData.value.length == 0) {
        showError('请先查询接口信息')
        return
    }
    if (selectedApis.value.length == 0) {
        list = toRaw(tableData.value)
    } else {
        selectedApis.value.map(item => {
            list.push(toRaw(item))
        })
    }

    await getItemInfo()

    let queue = list.map(item => {
        return new Promise(resolve => {
            updateByApi(item);
        });
    });

    Promise.all(queue).then(result => {
        showSuccess('批量创建成功')
    });

}


</script>

<style scoped></style>