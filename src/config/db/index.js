const mongoose = require("mongoose");

async function connect() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb://127.0.0.1/f8_educaiton_dev");

        console.log("Connect success");
    } catch (error) {
        console.log("Connect fail");
    }
}

module.exports = { connect };
