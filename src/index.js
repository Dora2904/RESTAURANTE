const express = require('express');
const connectDB = require('./config/database'); // Adjust the path as necessary
const usuarioRoutes = require('./routes/user.routes'); // Adjust the path as necessary

//Initialize express app
const app = express();

//Middleware
app.use(express.json()); // Parse JSON bodies     

connectDB(); // Connect to MongoDB

app.get("/", (req, res) => {
    res.send("Welcome to the Restaurant API");
}
);
app.use("/api/usuarios", usuarioRoutes); // Use user routes

// Start the server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



