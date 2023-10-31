const express = require("express");
const router = express.Router();
const {getContacts, updateContact, deleteContact, getContact, createContact} = require("../controllers/contactController");

// Route handler
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).delete(deleteContact).put(updateContact);

module.exports = router;