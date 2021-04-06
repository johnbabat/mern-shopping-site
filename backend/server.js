require("dotenv").config({path:__dirname+'/.env'});
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const path = require('path')

connectDB();

const app = express();

app.use(express.json());

// Use routes
app.use("/api/products", productRoutes);

// Serve static asests if in production
if(process.env.NODE_ENV == 'production') {

    let root = path.join(__dirname, '..', 'frontend', 'build/')
    app.use(express.static(root))
    app.use(function(req, res, next) {

        if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
            res.sendFile('index.html', { root })
        } else next()
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))