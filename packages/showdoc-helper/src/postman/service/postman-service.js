import axios from 'axios'
import Result from '../../utils/Result'
import store from '../../utils/store'

axios.interceptors.request.use(config=>{
    config.headers['X-API-Key'] = store.getItem('config').apiKey||''
    return config
})

const postmanService = {
    baseUrl: "https://api.getpostman.com",
   
     async getAllWorkspaces() {
        try {
            const response = await axios.get(`${this.baseUrl}/workspaces`)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getAllCollections(workspaceId) {
        try {
            const response = await axios.get(`${this.baseUrl}/collections?workspace=${workspaceId}`)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    },

    async getACollection(collectionId) {
        try {
            const response = await axios.get(`${this.baseUrl}/collections/${collectionId}`)
            return Result.success("成功").data(response.data).build();
        } catch (e) {
            return Result.error("失败：" + e.message).build();
        }
    }
}

export default postmanService;