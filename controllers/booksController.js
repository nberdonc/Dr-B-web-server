const bookList = require('../models/bookModel');

class booksController {

    /////////////////// TO DISPLAY ALL bookS /////////////////
    async findAll(req, res) {
        console.log("findAll")
        try {
            const allBooks = await bookList.find({});
            res.send(allBooks);
        }
        catch (e) {
            console.log(e.message)
            res.send({ error: e.message })
        }
    }

    //////////////////// TO FIND ONE book ////////////////////
    async findOne(req, res) {
        console.log("findOne")
        let name = req.params.name;
        console.log(req.params.name)
        try {
            const oneBook = await bookList.findOne({ name: name });
            console.log(oneBook)
            res.send(oneBook);
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////// TO ADD ONE book /////////////////////
    async insert(req, res) {
        console.log("add one")
        let title = req.body.title
        let description = req.body.description
        let genre = req.body.genre
        let image = req.body.image
        let onFront = req.body.onFront
        try {
            const found = await bookList.findOne({ title: title });
            if (found) {
                res.send(false);
            }
            else {
                const done = await bookList.create({ title, description, genre, image, onFront });
                res.send(done)
            }
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////////// TO DELETE ONE book //////////////////////
    async delete(req, res) {
        console.log("delete")
        let id = req.body.id;
        try {
            const removed = await bookList.findByIdAndDelete(id);
            res.send({ removed });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }

    //////////////////// TO UPDATE ONE book /////////////////////////
    async update(req, res) {
        console.log("update")
        let id = req.body.id
        let newTitle = req.body.title
        let newDescription = req.body.description
        let newGenre = req.body.genre
        let newImage = req.body.image
        let newOnFront = req.body.onFront
        try {
            const updated = await bookList.findOneAndUpdate(
                { _id: id }, { title: newTitle, description: newDescription, genre: newGenre, image: newImage, onFront: newOnFront }, { new: true }
            );
            res.send({ updated });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }
};
module.exports = new booksController();