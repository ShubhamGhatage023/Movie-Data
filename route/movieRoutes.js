const express = require("express");
const Director=require("../model/directorModel");
const Film=require("../model/filmModel");

const route=express();

route.get("/directors",async (req,res) => { 
    try{
        const director=await Director.find({});
        res.json(director);
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.get("/directors/:directorName",async (req,res) => { 
    try{
        const director=await Director.findOne({ directorName: req.params.directorName });
        res.json(director);
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.get("/films/:directorName",async (req,res) => { 
    try{
        const films=await Film.find({ filmDirectors: req.params.directorName });
        res.json(films);
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.get("/filmbyname/:filmName",async (req,res) => { 
    try{
        const film=await Film.find({ filmName: req.params.filmName });
        res.json(film);
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.get("/films",async (req,res) => { 
    try{
        const film=await Film.find({});
        res.json(film);
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.post("/director",async (req,res) => { 
    try{
        console.log(req.body);
        let director=new Director();
        director.directorName=req.body.directorName;
        director.directorAge=req.body.directorAge;
        director.directorGender=req.body.directorGender;
        director.directorAwards=req.body.directorAwards;
        await director.save();
        res.json({message:"Success",director});
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.post("/film",async (req,res) => { 
    try{
        let film=new Film();
        film.filmName=req.body.filmName;
        film.filmCollection=req.body.filmCollection;
        film.filmRating=req.body.filmRating;
        film.filmDirectors=req.body.filmDirectors;
        await film.save();
        res.json({message:"Success",film});
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.patch("/director/:directorName", async (req, res) => {
	try {
        const director = await Director.findOne({ directorName: req.params.directorName });
        director.directorAge=req.body.directorAge;
        director.directorAwards=req.body.directorAwards;
        await director.save();
        res.json({message:"Success",director});
	} catch {
		res.status(404).json({errMsg:err.message});
	}
})

route.delete("/film/:filmName", async (req, res) => {
	try {
		await Film.deleteOne({ filmName: req.params.filmName });
		res.json({message:"Success"});
	} catch {
		res.status(404).json({errMsg:err.message});
	}
})

module.exports=route;