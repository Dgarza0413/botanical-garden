const router = require("express").Router();
const plantController = require("../../controllers/plantController");

// Matches with "/api/plants"
router.route("/")
    .get((req, res) => {
        res.json("this is a response")
    })
    .post(plantController.create);

// Matches with "/api/plants/:id"
router.route("/:id")
    .get(plantController.findById)
    .put(plantController.update)
    .delete(plantController.remove);

module.exports = router;
