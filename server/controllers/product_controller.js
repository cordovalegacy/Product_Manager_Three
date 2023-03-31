const Product = require('../models/product_model')

module.exports = {

    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                res.status(201).json(allProducts)
            })
            .catch((err) => {
                console.log("getAll: Something went wrong: ", err)
            })
    },

    createProducts: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                console.log("create: Something went wrong: ", err )
            })
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.status(201).json(oneProduct)
            })
            .catch((err) => {
                console.log("getOne: Something went wrong: ", err)
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id})
            .then((updatedProduct) => {
                res.status(201).json(updatedProduct)
            })
            .catch((err) => {
                console.log("update: Something went wrong: " , err)
            })
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct) => {
                res.status(201).json(deletedProduct)
            })
            .catch((err) => {
                console.log("delete: Something went wrong: " , err)
            })
    }

}