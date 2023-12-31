const asyncHandler = require("express-async-handler");
const Contact =require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res)=> {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts:id
//@access public
const getContact = asyncHandler(async(req, res)=> {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//@desc Create new contact
//@route POST /api/contacts:id
//@access public
const createContact = asyncHandler(async(req, res)=> {
    console.log("The request body is:", req.body);
    //destructure
    const {name, email, phone}= req.body;
    if(!name || !email || !phone) //error handling for empty body
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({name, email, phone});
    res.status(201).json({contact});
});

//@desc Update contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async(req, res)=> {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts
//@access public

const deleteContact = asyncHandler(async(req, res)=> {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});


module.exports = {getContact, createContact, deleteContact, updateContact, getContacts};