import axios from "axios";

export default {
    loadPlant: () => {
        return axios.get('/api/getplants')
    },
    searchPlant: (query) => {
        return axios.post('/api/getplants', query)
    },
    postPlantDetail: (id) => {
        return axios.post('api/getplants/:id', id)
    },
    getPlantDetail: () => {
        return axios.get('/api/getplants/:id')
    }
}