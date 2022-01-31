import React from "react";
import "./StudentContainer.css";

export function StudentContainer({ student }) {
  return (
    <div className="student-container">
      <div className="student-card">
        <div className="top">
          <img
            className="studImg"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            alt=""
          />
        </div>
        <div className="bottom">
          <p>
            <span className="details">Name : </span>
            {student.name}
          </p>
          <p>
            <span className="details">Gender : </span>
            {student.gender}
          </p>
          <p>
            <span className="details">Year : </span>
            {student.year}
          </p>
          <p>
            <span className="details">Attendance : </span>
            {student.attendance}
          </p>
        </div>
      </div>
    </div>
  );
}
