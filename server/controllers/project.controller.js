import Project from '../models/project.model.js';
import errorHandler from '../helpers/dbErrorHandler.js';

//Creates a project
const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({
      message: 'Project successfully created!',
      project: project
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Lists all projects
const list = async (req, res) => {
  try {
    let projects = await Project.find().select('title completionDate description created');
    res.json(projects);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

//Finds a project based on ID
const projectByID = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project) {
      return res.status(400).json({
        error: 'Project not found'
      });
    }
    req.project = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: 'Could not retrieve project'
    });
  }
};

//Reads a project
const read = (req, res) => {
  return res.json(req.project);
};

//Updates a project
const update = async (req, res) => {
  try {
    let project = req.project;
    Object.assign(project, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Removes a project
const remove = async (req, res) => {
  try {
    let project = req.project;
    let deletedProject = await project.deleteOne();
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default { create, list, projectByID, read, update, remove };