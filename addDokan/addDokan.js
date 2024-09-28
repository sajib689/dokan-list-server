const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const addDokanSchema = require('../addDokanSchema/addDokanSchema.js')
const Dokan = new mongoose.model('Dokan', addDokanSchema)

router.get('/', async(req, res) => {
    try {
       const dokan = await Dokan.find()
        res.status(200).json({dokan})
    } catch (err) {
        console.error(err)
    }
})
router.post('/', async (req, res) => {
    try {
        const { shopName } = req.body;
        const isExists = await Dokan.findOne({ shopName });
        if (isExists) {
            return res.status(400).json({ message: 'Shop already exists' });
        }
        const newDokan = new Dokan(req.body);
        await newDokan.save();
        
        res.status(200).json({ message: 'Dokan added successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});






module.exports = router