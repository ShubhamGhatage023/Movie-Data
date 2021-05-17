const express = require("express");
const bodyParser= require("body-parser");
const movieRoutes=require("./route/movieRoutes");
const mongoose=require("mongoose");
const cors=require("cors");

const app = express();

const mongoose_url='mongodb+srv://MyDBPass:MyDBPass@mycluster.ucepb.mongodb.net/Movies?retryWrites=true&w=majority';

mongoose.connect(mongoose_url,{useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(bodyParser.json());

app.use("/",movieRoutes);

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log("Server is running on port " + port);
})