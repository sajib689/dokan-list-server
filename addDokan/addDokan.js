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
router.get('/:id', async (req, res) => {
    const id = await Dokan.findById(req.params.id)
    try {
        if(id) {
            res.status(200).json({id})
        }
    } catch(error) {
        console.error(error.message)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = await Dokan.findById(req.params.id)
        if(id) {
            await Dokan.deleteOne(id)
            res.status(200).json({id})
        }
    } catch (error) {
        console.error(error.message)
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

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await Dokan.findOne(query);
        res.status(200).json(result)
    } catch (err) {
        console.error(err.message);
    }
})






module.exports = router