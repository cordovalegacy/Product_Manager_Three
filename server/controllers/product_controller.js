const Product = require('../models/product_model')

module.exports = {

    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                res.status(201).json(allProducts)
            })
            .catch((err) => {
                res.status(500).json("UpdateOne: Something went wrong: " , err)
            })
    },

    createProducts: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                res.status(500).json("UpdateOne: Something went wrong: " , err)
            })
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.status(201).json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json("UpdateOne: Something went wrong: " , err)
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedProduct) => {
                res.status(201).json(updatedProduct)
            })
            .catch((err) => {
                res.status(400).json("UpdateOne: Something went wrong: " , err)
            })
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct) => {
                res.status(201).json(deletedProduct)
            })
            .catch((err) => {
                res.status(500).json("UpdateOne: Something went wrong: " , err)
            })
    }

}