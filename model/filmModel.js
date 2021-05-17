const mongoose=require("mongoose");

const filmSchema= new mongoose.Schema({
    filmName:{ type:String, required:true },
    filmCollection:{ type:Number, required:true },
    filmRating:{ type:Number, required:true },
    filmDirectors:[{ type:String, required:true}]
})

const filmModel=mongoose.model("Film",filmSchema);

module.exports=filmModel;