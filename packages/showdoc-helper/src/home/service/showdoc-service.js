import axios from 'axios'
import Result from '../../utils/Result'

const showdocService = {
    baseUrl: "https://apidoc.chinackts.com/server/index.php",

    async getAllItems(params) {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/myList`, params)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getAItem(params) {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/info`, params)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getItemByName(itemName = '') {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/myList`, {})
            let item = (itemName == '' ? null : response.data.data?.find(item => item.item_name === itemName))
            return Result.success("成功").data(item).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async addItem(params) {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/add`, params)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getItemKey(params) {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/getKey`, params)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async updateByApi(params) {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/item/updateByApi`, params)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getTemplates() {
        try {
            const response = await axios.post(`${this.baseUrl}?s=/api/template/getMyList`, null)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

}

export default showdocService;