const ProductController = require('../controllers/product_controller')

module.exports = (app) => {
    app.post('/api/products', ProductController.createProducts)
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.put('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}