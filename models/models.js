// models/models.js
const mongoose = require("mongoose");

// Course Schema
const courseSchema = new mongoose.Schema({
  name: String,
  code: String,
});

// Student Schema
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  id: { type: String, unique: true },
  semester: String,
  courses: [courseSchema],
});

const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Student, Course };
