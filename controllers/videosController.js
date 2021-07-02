const videoList = require('../models/bookModel');

class videosController {

    /////////////////// TO DISPLAY ALL videoS /////////////////
    async findAll(req, res) {
        console.log("findAll videos")
        try {
            const allVideos = await videoList.find({});
            res.send(allVideos);
        }
        catch (e) {
            console.log(e.message)
            res.send({ error: e.message })
        }
    }

    //////////////////// TO FIND ONE video ////////////////////
    async findOne(req, res) {
        console.log("findOne video")
        let name = req.body.name;
        console.log(req.body.name)
        try {
            const oneVideo = await videoList.findOne({ name: name });
            console.log(oneVideo)
            res.send(oneVideo);
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////// TO ADD ONE video /////////////////////
    async insert(req, res) {
        console.log("add one video")
        let title = req.body.title
        let description = req.body.description
        let genre = req.body.genre
        let video = req.body.video
        let onFront = req.body.onFront
        try {
            const found = await videoList.findOne({ title: title });
            if (found) {
                res.send(false);
            }
            else {
                const done = await videoList.create({ title, description, genre, video, onFront });
                res.send(done)
            }
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////////// TO DELETE ONE video //////////////////////
    async delete(req, res) {
        console.log("delete video")
        let id = req.body.id;
        try {
            const removed = await videoList.findByIdAndDelete(id);
            res.send({ removed });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }

    //////////////////// TO UPDATE ONE video /////////////////////////
    async update(req, res) {
        console.log("update video")
        let id = req.body.id
        let newTitle = req.body.title
        let newDescription = req.body.description
        let newGenre = req.body.genre
        let newVideo = req.body.video
        let newOnFront = req.body.onFront
        try {
            const updated = await videoList.findOneAndUpdate(
                { _id: id }, { title: newTitle, description: newDescription, genre: newGenre, video: newVideo, onFront: newOnFront }, { new: true }
            );
            res.send({ updated });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }
};
module.exports = new videosController();