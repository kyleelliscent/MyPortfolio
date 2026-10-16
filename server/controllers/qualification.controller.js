import Qualification from "../models/qualification.model.js";
import errorHandler from "../helpers/dbErrorHandler.js";

//Creates a qualification
const create = async (req, res) => {
  const qualification = new Qualification(req.body);
  try {
    await qualification.save();
    return res.status(200).json({
      message: "Qualification successfully created!",
      qualification: qualification
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Lists all qualifications
const list = async (req, res) => {
  try {
    let qualifications = await Qualification.find().select("title completionDate description created");
    res.json(qualifications);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Finds a qualification based on ID
const qualificationByID = async (req, res, next, id) => {
  try {
    let qualification = await Qualification.findById(id);
    if (!qualification) {
      return res.status(400).json({
        error: "Qualification not found"
      });
    }
    req.qualification = qualification;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve qualification"
    });
  }
};

//Reads a qualification
const read = (req, res) => {
  return res.json(req.qualification);
};

//Updates a qualification
const update = async (req, res) => {
  try {
    let qualification = req.qualification;
    Object.assign(qualification, req.body);
    await qualification.save();
    res.json(qualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Removes a qualification
const remove = async (req, res) => {
  try {
    let qualification = req.qualification;
    let deletedQualification = await qualification.deleteOne();
    res.json(deletedQualification);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, qualificationByID, read, update, remove };