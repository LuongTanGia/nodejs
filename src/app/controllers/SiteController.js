const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // GET /
    index(req, res, next) {
        // Get /
        Course.find({})
            .then((course) => {
                res.render("home", {
                    course: multipleMongooseToObject(course),
                });
            })
            .catch((error) => next(error));
        // res.render('home');
    }
    // GET /search
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
