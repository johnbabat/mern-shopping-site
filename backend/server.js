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
    // app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));

    app.get('*', (req, res) => {
        var varPath = req.params[0]
        if (varPath !== '/' && varPath.endsWith('/')) {
            varPath = varPath.slice(1,-1)
        } else {
            varPath = 'index.html'
        }
        console.log(req.params, varPath)
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', varPath))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))