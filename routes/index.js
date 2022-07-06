const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const actions =require('../module/action')

router.get('/',(req,res)=>{
    res.send("hello")
})


router.post('/adduser',actions.addNew);

router.post('/authentificate',actions.authenticate)

router.get('/getinfo',actions.getinfo)

module.exports=router;