export function validate(values) {
  const errors = {};

  // Full Name
  if (!values.fullName.trim()) {
    errors.fullName = "Enter the student's full name.";
  }

  // Student ID
  if (!values.studentId.trim()) {
    errors.studentId = "Enter the student ID.";
  } else if (!/^\d{4}-\d{4}$/.test(values.studentId)) {
    errors.studentId = "Student ID must be in the format ####-####.";
  }

  // Email
  if (!values.email.trim()) {
    errors.email = "Enter the student's email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  // Course
  if (!values.course) {
    errors.course = "Select a course.";
  }

  // Year Level
  if (!values.yearLevel) {
    errors.yearLevel = "Select a year level.";
  }

  return errors;
}