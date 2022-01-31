import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StudentPage.css";

export function StudentPage() {
  const { email } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch(`https://nodeurlapp.herokuapp.com/api/student/getstudent/${email}`)
      .then((data) => data.json())
      .then((details) => setStudent(details));
  }, [email]);

  return (
    <div className="studentpage">
      <h2>Student Details : </h2>
      <div className="top">
        <img
          className="studImg"
          src="https://cdn-icons-png.flaticon.com/512/201/201612.png"
          alt=""
        />
        <div className="details">
          <p>
            <span className="studDetail">Student Id : </span>
            {student.sId}
          </p>
          <p>
            <span className="studDetail">Name : </span>
            {student.name}
          </p>
          <p>
            <span className="studDetail">E-Mail : </span>
            {student.email}
          </p>
          <p>
            <span className="studDetail">Gender : </span>
            {student.gender}
          </p>
          <p>
            <span className="studDetail">Year : </span>
            {student.year}{" "}
          </p>
          <p>
            <span className="studDetail">Attendance : </span>
            {student.attendance}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
