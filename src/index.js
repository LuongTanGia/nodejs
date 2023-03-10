const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const router = require("./routes");
const db = require("./config/db");

// connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan("combined"));
// template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Route init
router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
