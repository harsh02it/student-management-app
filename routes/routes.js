// routes/routes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");

// Student routes
router.post("/students", studentController.addStudent);
router.delete("/students/:id", studentController.removeStudent);
router.patch("/students/:id", studentController.modifyStudent);
router.get("/students", studentController.getAllStudents); // Get all students
router.get("/students/:id", studentController.getStudentById); // Get student by ID

// Course routes
router.patch("/courses/:id", courseController.modifyCourse);
router.get("/courses", courseController.getAllCourses); // Get all courses

module.exports = router;
