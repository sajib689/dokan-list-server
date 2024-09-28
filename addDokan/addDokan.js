const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const addDokanSchema = require('../addDokanSchema/addDokanSchema.js')
const Dokan = new mongoose.model('Dokan', addDokanSchema)

router.get('/dokanlist', async(req, res) => {
    
})
router.post('/dokanlist', async(req, res) => {
    try {
        const newDokan = await Dokan(req.body)
        res.status(200).json({message: 'dokan added successfully'})
    } catch (err) {
        console.log(err.message)
    }
})





module.exports = router