const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plant: { type: String }
});

module.exports = mongoose.model("Plant", plantSchema);