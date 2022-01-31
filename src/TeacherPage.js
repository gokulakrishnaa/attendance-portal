import React, { useState, useEffect } from "react";
import "./TeacherPage.css";
import { StudentContainer } from "./StudentContainer.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function TeacherPage() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState("");
  const [sId, setSId] = useState("");
  const [disp, setDisp] = useState("");

  useEffect(() => {
    fetch("https://nodeurlapp.herokuapp.com/api/teacher/getallstudents")
      .then((data) => data.json())
      .then((details) => setStudents(details));
  }, [attendance]);

  const updateStatus = () => {
    const cred = {
      sId,
      attendance,
    };
    fetch("https://nodeurlapp.herokuapp.com/api/teacher/updatestatus", {
      method: "PUT",
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Updated") {
          setDisp("Student Profile Updated Successfully");
          setSId("");
          setAttendance("");
        } else {
          setDisp("Error Updating Student Profile");
        }
      });
  };

  return (
    <div className="teacherpage">
      <div className="updatestatus">
        <TextField
          value={sId}
          onChange={(em) => setSId(em.target.value)}
          id="standard-basic"
          label="sId"
          variant="standard"
        />
        <TextField
          value={attendance}
          onChange={(pass) => setAttendance(pass.target.value)}
          id="standard-basic"
          label="attendance"
          variant="standard"
        />
        <Button onClick={updateStatus} variant="outlined">
          Update
        </Button>
        {disp}
      </div>
      <p className="student-list">Students List : </p>
      <div className="card">
        {students.map((student) => (
          <StudentContainer student={student} />
        ))}
      </div>
    </div>
  );
}
