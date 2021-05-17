const mongoose=require("mongoose");

const directorSchema= new mongoose.Schema({
    directorName:{ type:String, required:true },
    directorAge:{ type:Number, required:true },
    directorGender:{ type:String, required:true },
    directorAwards:{ type:Number, required:true}
})

const directorModel=mongoose.model("Director",directorSchema);

module.exports=directorModel;