const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

// Custom middleware
app.use('/api/contacts', require("./routes/contactRoutes"));
/*
// Route handler
app.get('/api/contacts', (req, res)=> {
    res.status(200).json({message: "Get All contacts"});
});*/

const port = process.env.PORT || 5000 ;

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});