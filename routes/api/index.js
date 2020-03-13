const router = require('express').Router();
const plantsRoute = require('./plantsRoute');
const userRoute = require('./userRoute');
const axios = require('axios');

// place in env file
const token = "SzdHMkwvZDdZVTZUMGpYckFlOVNFUT09";

//urls
const url = `https://trefle.io/api/plants`


router.use('/plantsRoute', plantsRoute);
router.use('/userRoute', userRoute);

router.post("/getplants", (req, res) => {
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: req.body.plantName
        }
    }).then(data => {
        res.json(data.data)
    }).catch(err => console.error(err))
})

router.post('/getplants/:id', (req, res) => {
    axios.get(`${url}/${req.body.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => {
        console.log(data)
        res.json(data.data)
    }).catch(err => console.error(err))
})


router.get("/getplants", (req, res) => {
    axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => {
        res.json(data.data)
    }).catch(err => console.error(err))
})

module.exports = router;
