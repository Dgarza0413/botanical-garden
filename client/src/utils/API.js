import axios from "axios";

export default {
    loadPlant: () => {
        return axios.get('/api/getplants')
    },
    searchPlant: (query, page) => {
        return axios.post('/api/getplants', query, page)
    },
    postPlantDetail: (id) => {
        return axios.post('/api/getplants/:id', id)
    },
    getPlantDetail: () => {
        return axios.get('/api/getplants/:id')
    }
}