require('dotenv').config({path:__dirname+'/.env'});

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');


const importData = async () => {

    await connectDB();
    
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.log("Error with data import");

        process.exit(1)
    };
};

importData();