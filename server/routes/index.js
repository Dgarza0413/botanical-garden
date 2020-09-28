const path = require("path");
const router = require("express").Router();
const axios = require('axios');
const token = "SzdHMkwvZDdZVTZUMGpYckFlOVNFUT09";
const url = `https://trefle.io/api/plants`;

router.post("/api/getplants", async (req, res) => {
    console.log("route hit")
    console.log(req.body)
    try {
        const headers = {
            headers: { Authorization: `Bearer ${token}` },
            params: { q: req.body.plantName }
        }
        const { data } = await axios.get(url, headers)
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('/api/getplants/:id', async (req, res) => {
    axios.get(`${url}/${req.body.id}`, {
        headers: { Authorization: `Bearer ${token}` }
    }).then(data => {
        res.json(data.data)
    }).catch(err => console.error(err))
})


router.get("/api/getplants", (req, res) => {
    console.log('route hit')
    // axios.get(url, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }).then(data => {
    //     res.json(data.data)
    // }).catch(err => console.error(err))
})

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
