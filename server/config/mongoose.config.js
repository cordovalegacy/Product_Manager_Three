const mongoose = require('mongoose')
const db = "Products_DB"

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connection to the ${db} established`))
    .catch((err) => console.log(`Could not establish a connection to the ${db}`, err))