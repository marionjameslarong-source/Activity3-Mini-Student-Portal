import { useParams, useNavigate, Link } from "react-router-dom";
import { yearLabel } from "../data/students.js";

export default function StudentDetail({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <section>
        <h1>Student not found</h1>
        <p>
          The student you are looking for does not exist.
        </p>

        <Link to="/students" className="btn">
          Back to students
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Student details</h1>

      <div className="card">
        <p>
          <strong>Student ID:</strong> {student.id}
        </p>

        <p>
          <strong>Name:</strong> {student.fullName}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Year Level:</strong> {yearLabel(student.yearLevel)}
        </p>
      </div>

      <button
        type="button"
        className="btn"
        onClick={() => navigate("/students")}
      >
        Back to students
      </button>
    </section>
  );
}