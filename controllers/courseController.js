// controllers/courseController.js
const { Course } = require("../models/models");

// Modify course
exports.modifyCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) return res.status(404).send();
    res.send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
};
