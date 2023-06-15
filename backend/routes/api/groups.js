const express = require('express');

const { Op } = require('sequelize');

const{ Group } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const { check } = require('express-validator');

const router = express.Router();

router.get('/',async(req,res)=>{
    const groups =await Group.findAll();
    return res.json(groups);
})





module.exports = router;