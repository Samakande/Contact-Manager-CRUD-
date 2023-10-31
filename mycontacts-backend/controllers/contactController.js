//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res)=> {
    res.status(200).json({message: "Get All Contacts"});
};

//@desc Get contact
//@route GET /api/contacts:id
//@access public
const getContact = (req, res)=> {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
};

//@desc Create new contact
//@route POST /api/contacts:id
//@access public
const createContact = (req, res)=> {
    //destructure
    const {name, email, phone}= req.body;
    if(!name || !email || !phone) //error handling for empty body
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log("The request body is:", req.body);
    res.status(201).json({message: "Create Contact"});
};

//@desc Update contact
//@route PUT /api/contacts
//@access public
const updateContact = (req, res)=> {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
};

//@desc Update contact
//@route PUT /api/contacts
//@access public

const deleteContact = (req, res)=> {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
};


module.exports = {getContact, createContact, deleteContact, updateContact, getContacts};