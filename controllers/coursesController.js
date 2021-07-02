const courseList = require('../models/courseModel');

class coursesController {

    /////////////////// TO DISPLAY ALL courseS /////////////////
    async findAll(req, res) {
        console.log("findAll")
        try {
            const allcourses = await courseList.find({});
            res.send(allcourses);
        }
        catch (e) {
            console.log(e.message)
            res.send({ error: e.message })
        }
    }

    //////////////////// TO FIND ONE course ////////////////////
    async findOne(req, res) {
        console.log("findOne")
        let name = req.body.name;
        console.log(req.body.name)
        try {
            const onecourse = await courseList.findOne({ name: name });
            console.log(onecourse)
            res.send(onecourse);
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////// TO ADD ONE course /////////////////////
    async insert(req, res) {
        console.log("add one")
        let title = req.body.title
        let description = req.body.description
        let genre = req.body.genre
        let image = req.body.image
        let onFront = req.body.onFront
        try {
            const found = await courseList.findOne({ title: title });
            if (found) {
                res.send(false);
            }
            else {
                const done = await courseList.create({ title, description, genre, image, onFront });
                res.send(done)
            }
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////////// TO DELETE ONE course //////////////////////
    async delete(req, res) {
        console.log("delete")
        let id = req.body.id;
        try {
            const removed = await courseList.findByIdAndDelete(id);
            res.send({ removed });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }

    //////////////////// TO UPDATE ONE course /////////////////////////
    async update(req, res) {
        console.log("update")
        let id = req.body.id
        let newTitle = req.body.title
        let newDescription = req.body.description
        let newGenre = req.body.genre
        let newImage = req.body.image
        let newOnFront = req.body.onFront
        try {
            const updated = await courseList.findOneAndUpdate(
                { _id: id }, { title: newTitle, description: newDescription, genre: newGenre, image: newImage, onFront: newOnFront }, { new: true }
            );
            res.send({ updated });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }
};
module.exports = new coursesController();