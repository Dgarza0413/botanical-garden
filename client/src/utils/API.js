import axios from "axios";

const key = `SzdHMkwvZDdZVTZUMGpYckFlOVNFUT09`;

export default {
    searchPlant: function (plant) {
        return axios.get("https://trefle.io/api/plants", {
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                q: "rosemary",
                token: `${key}`
            }
        })
    }
}