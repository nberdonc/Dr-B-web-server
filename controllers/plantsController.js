const plantList = require('../models/plantModel');

class plantsController {

    /////////////////// TO DISPLAY ALL PLANTS /////////////////
    async findAll(req, res) {
        console.log("findAll from plants controller")
        try {
            const allPlants = await plantList.find({});
            res.send(allPlants);
        }
        catch (e) {
            console.log(e.message)
            res.send({ error: e.message })
        }
    }

    //////////////////// TO FIND ONE PLANT ////////////////////
    async findOne(req, res) {
        console.log("findOne from plants controller")
        let name = req.body.name;
        console.log(req.body.name)
        try {
            const onePlant = await plantList.findOne({ name: name });
            console.log(onePlant)
            res.send(onePlant);
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////// TO ADD ONE PLANT /////////////////////
    async insert(req, res) {
        console.log("add one from plants controller")
        let family = req.body.family
        let name = req.body.name
        let cientificName = req.body.cientificName
        let habitat = req.body.habitat
        let composition = req.body.composition
        let uses = req.body.uses
        let image = req.body.image
        let onFront = req.body.onFront
        try {
            const found = await plantList.findOne({ name: name });
            if (found) {
                res.send(false);
            }
            else {
                const added = await plantList.create({ name, family, cientificName, habitat, composition, image, uses, onFront });
                console.log("plant", added)
                res.send(added)
            }
        }
        catch (e) {
            res.send({ error: e.message })
        }
    }

    /////////////////////// TO DELETE ONE PLANT //////////////////////
    async delete(req, res) {
        console.log("delete from plants controller")
        let id = req.body.id;
        try {
            const removed = await plantList.findByIdAndDelete(id);
            res.send({ removed });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }

    //////////////////// TO UPDATE ONE PLANT /////////////////////////
    async update(req, res) {
        console.log("update from plants controller")
        let id = req.body.id
        let newName = req.body.name
        let newFamily = req.body.family
        let newCientificName = req.body.cientificName
        let newHabitat = req.body.habitat
        let newComposition = req.body.composition
        let newUses = req.body.uses
        let newImage = req.body.image
        let newOnFront = req.body.onFront
        try {
            const updated = await plantList.findOneAndUpdate(
                { _id: id }, { name: newName, family: newFamily, cientificName: newCientificName, habitat: newHabitat, composition: newComposition, uses: newUses, image: newImage, onFront: newOnFront }, { new: true }
            );
            res.send({ updated });
        }
        catch (error) {
            res.send({ error: error.message })
        };
    }
};
module.exports = new plantsController();