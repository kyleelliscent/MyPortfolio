import Contact from '../models/contact.model.js';
import errorHandler from '../helpers/dbErrorHandler.js';

//Creates a contact
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: 'Contact successfully created!',
      contact: contact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Lists all contacts
const list = async (req, res) => {
  try {
    let contacts = await Contact.find().select('firstName lastName contactNumber email message created');
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Finds a contact based on ID
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact) {
      return res.status(400).json({
        error: 'Contact not found'
      });
    }
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: 'Could not retrieve contact'
    });
  }
};

//Reads a contact
const read = (req, res) => {
  return res.json(req.profile);
};

//Updates a contact
const update = async (req, res) => {
  try {
    let contact = req.profile;
    Object.assign(contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Removs a contact
const remove = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, contactByID, read, update, remove };