'use strict'

const express = require('express');
const clothesRouter = express.Router();
const {clothescollection}=require('../models/index');

clothesRouter.get('/clothes', getclothes); 
clothesRouter.get('/clothes/:id', getoneclothes); 
clothesRouter.post('/clothes', createclothes); 
clothesRouter.put('/clothes/:id', updateclothes); 
clothesRouter.delete('/clothes/:id', deleteclothes);


async function getclothes (req,res){
    let allclothes = await clothescollection.read();

    res.status(200).json(allclothes);



}

async function getoneclothes(req,res){
 const id = parseInt(req.params.id)
let oneclothes= await clothescollection.read(id);

res.status(200).json(oneclothes);



}

async function createclothes(req,res){
let obj=req.body;
let createdclothes= await clothescollection.create(obj)
res.status(201).json(createdclothes);



}
async function updateclothes(req,res){
const id = parseInt(req.params.id);
let newobj=req.body;
let updatedclothes= await clothescollection.update(id,newobj);

res.status(201).json(updatedclothes);


}

async function deleteclothes(req,res){
const id = parseInt(req.params.id);
let deletedclothes= await clothescollection.delete(id);
res.status(204).json(deletedclothes);


}

module.exports={clothesRouter};