const mongoose = require("mongoose");

var slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        slug: { type: String, slug: "name" },
        level: { type: String, maxLength: 255 },
        CreateDate: { type: Date, default: Date.now },
        UpdateDate: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", Course);
