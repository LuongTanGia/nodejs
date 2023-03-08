const Course = require("../models/Course");
const { MongooseToObject } = require("../../util/mongoose");

class CourseController {
    // GET /show /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render("courses/show", {
                    course: MongooseToObject(course),
                })
            )
            .catch(next);
    }

    // GET /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }
    // POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        // res.json(req.body);
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }
}
module.exports = new CourseController();
