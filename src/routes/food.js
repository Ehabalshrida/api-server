'use strict'

const express = require('express');
const foodRouter = express.Router();
const {foodcollection}=require('../models/index');

foodRouter.get('/food', getfood); 
foodRouter.get('/food/:id', getonefood); 
foodRouter.post('/food', createfood); 
foodRouter.put('/food/:id', updatefood); 
foodRouter.delete('/food/:id', deletefood);


async function getfood (req,res){
    let allfoods = await foodcollection.read();

    res.status(200).json(allfoods);



}

async function getonefood(req,res){
 const id = parseInt(req.params.id)
let onefood= await foodcollection.read(id);

res.status(200).json(onefood);



}

async function createfood(req,res){
let obj=req.body;
let createdfood= await foodcollection.create(obj)
res.status(201).json(createdfood);



}
async function updatefood(req,res){
const id = parseInt(req.params.id);
let newobj=req.body;
let updatedfood= await foodcollection.update(id,newobj);

res.status(201).json(updatedfood);


}

async function deletefood(req,res){
const id = parseInt(req.params.id);
let deletedfood= await foodcollection.delete(id);
res.status(204).json(deletedfood);


}

module.exports={foodRouter};