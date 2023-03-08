module.exports = {
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    MongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
