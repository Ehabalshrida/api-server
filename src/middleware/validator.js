'use strict';

module.exports =(req, res, next) =>{
    let name= req.query.name
    if (typeof name === 'string' && name.length!==0) {
        req.name = name;
        next();
    } 
    else{
        next(`error`)
    }
    
    
}