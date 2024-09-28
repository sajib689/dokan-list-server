const mongoose = require('mongoose');

// Define the schema
const addDokanSchema = new mongoose.Schema({
  shopName: { type: String, required: true }, 
  ownerName: { type: String, required: true },
  ownerFatherName: { type: String, required: true },
  ownerMotherName: { type: String, required: true },
  ownerIdNumber: { type: Number, required: true }, 
  ownerAddress: { type: String, required: true },
  ownerBloodGroup: { type: String, required: true },
  ownerDuty: { type: Boolean, default: false },
  ownerPhoneNumber: { type: String, required: true }, 
  ownerPhoto: { type: String }, 
  ownerShopPhoto: { type: String } 
});


module.exports = addDokanSchema
