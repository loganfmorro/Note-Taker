//Setting up our Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Create our server and set the port location for localhost Heroku use
const app = express();
const PORT = process.env.PORT || 3000;

// Here we create our req.body and req.params rules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This tells the server to look in the public folder for static files
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the listener on the server
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));