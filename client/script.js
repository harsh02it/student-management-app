// script.js
document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const selectedCourses = Array.from(
    document.getElementById("courses").selectedOptions
  ).map((option) => ({
    name: option.text,
    code: option.value,
  }));

  const studentData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    id: document.getElementById("id").value,
    semester: document.getElementById("semester").value,
    courses: selectedCourses,
  };

  try {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    if (response.ok) {
      const student = await response.json();
      console.log("Student added:", student);
      alert("Student added successfully!");
      loadStudents(); // Refresh the student list
    } else {
      console.error("Error adding student:", response.statusText);
      alert("Failed to add student.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred.");
  }
});

// Function to load courses into the dropdown
async function loadCourses() {
  try {
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();
    const coursesDropdown = document.getElementById("courses");
    coursesDropdown.innerHTML = ""; // Clear the dropdown

    courses.forEach((course) => {
      const option = document.createElement("option");
      option.value = course.code; // Use course code as value
      option.textContent = course.name; // Display course name
      coursesDropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading courses:", error);
  }
}

// Load courses on page load
window.onload = () => {
  loadCourses();
};
