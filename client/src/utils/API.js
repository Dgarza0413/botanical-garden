import axios from "axios";

const key = `SzdHMkwvZDdZVTZUMGpYckFlOVNFUT09`;

export default {
    searchPlant: function (plant) {
        return axios.get("https://trefle.io/api/plants" + `?q=${plant}?token=${key}`)
    }
}