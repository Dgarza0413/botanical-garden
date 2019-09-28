const router = require("express").Router();
const plantsRoute = require("./plantsRoute");

router.use("/plantsRoute", plantsRoute)


module.exports = router;
