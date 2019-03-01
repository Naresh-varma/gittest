const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

module.exports =  (req, res, next) => {
    console.log('Entered checkAdmin');
    jwt.verify(req.body.token, 'decryptKey', (err, decoded) => {
        if(err){
            console.log('Token invalid : verify function failed');
            res.status('500').json({
                msg : 'Token Invalid '
            })
        }else{
            //next();
            console.log('User Token identfied' + JSON.stringify(decoded));
            if(decoded.isAdmin == true)
                next();
            else{
                res.status(401).json({
                    msg : "Only admin can create a blog"
                })
            }
        }
        
    })
}