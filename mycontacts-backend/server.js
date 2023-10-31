const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000 ;

// Custom middleware
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use(errorHandler);
/*
// Route handler
app.get('/api/contacts', (req, res)=> {
    res.status(200).json({message: "Get All contacts"});
});*/

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});