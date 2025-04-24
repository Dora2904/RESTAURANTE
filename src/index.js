const express = require('express');
const connectDB = require('./config/database'); // Adjust the path as necessary

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

connectDB(); // Connect to the database

app.get("/", (req, res) => {
    res.send('Bienivenido a la API del restaurante');   
});
const port = 3000;  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });