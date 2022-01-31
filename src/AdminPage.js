import React, { useState } from "react";
import "./AdminPage.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function AdminPage() {
  const [tId, setTId] = useState("");
  const [sId, setSId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phNo, setPhNo] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [attendance, setAttendance] = useState("");
  const [tadded, setTadded] = useState("");
  const [sadded, setSadded] = useState("");
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addTeacher = () => {
    const credentials = {
      tId,
      name,
      email,
      password,
      city,
      phNo,
    };

    fetch("https://nodeurlapp.herokuapp.com/api/admin/createteacher", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Teacher added") {
          setTadded("Teacher Profile Added Successfully");
          setTId("");
          setName("");
          setEmail("");
          setPassword("");
          setCity("");
          setPhNo("");
        } else {
          setTadded("Error Adding Teacher Profile");
        }
      });
  };

  const addStudent = () => {
    const scredentials = {
      sId,
      name,
      gender,
      email,
      password,
      year,
      attendance,
    };

    fetch("https://nodeurlapp.herokuapp.com/api/admin/createstudent", {
      method: "POST",
      body: JSON.stringify(scredentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Student added") {
          setSadded("Student Profile Added Successfully");
          setSId("");
          setName("");
          setGender("");
          setEmail("");
          setPassword("");
          setYear("");
          setAttendance("");
        } else {
          setSadded("Error Adding Student Profile");
        }
      });
  };

  return (
    <div className="adminpage">
      <div className="admin-header">
        <h2 className="admin-title">Form for adding Teacher & Student</h2>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Teacher" {...a11yProps(0)} />
            <Tab label="Student" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="teacher-form">
            <TextField
              value={tId}
              onChange={(em) => setTId(em.target.value)}
              id="standard-basic"
              label="tId"
              variant="standard"
            />
            <TextField
              value={name}
              onChange={(em) => setName(em.target.value)}
              id="standard-basic"
              label="name"
              variant="standard"
            />
            <TextField
              value={email}
              onChange={(em) => setEmail(em.target.value)}
              id="standard-basic"
              label="email"
              variant="standard"
            />
            <TextField
              value={password}
              onChange={(em) => setPassword(em.target.value)}
              id="standard-basic"
              label="password"
              variant="standard"
            />
            <TextField
              value={city}
              onChange={(em) => setCity(em.target.value)}
              id="standard-basic"
              label="city"
              variant="standard"
            />
            <TextField
              value={phNo}
              onChange={(em) => setPhNo(em.target.value)}
              id="standard-basic"
              label="phNo"
              variant="standard"
            />
            <Button onClick={addTeacher} variant="outlined">
              Add Teacher
            </Button>
            {tadded}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="teacher-form">
            <TextField
              value={sId}
              onChange={(em) => setSId(em.target.value)}
              id="standard-basic"
              label="sId"
              variant="standard"
            />
            <TextField
              value={name}
              onChange={(em) => setName(em.target.value)}
              id="standard-basic"
              label="name"
              variant="standard"
            />
            <TextField
              value={gender}
              onChange={(em) => setGender(em.target.value)}
              id="standard-basic"
              label="gender"
              variant="standard"
            />
            <TextField
              value={email}
              onChange={(em) => setEmail(em.target.value)}
              id="standard-basic"
              label="email"
              variant="standard"
            />
            <TextField
              value={password}
              onChange={(em) => setPassword(em.target.value)}
              id="standard-basic"
              label="password"
              variant="standard"
            />
            <TextField
              value={year}
              onChange={(em) => setYear(em.target.value)}
              id="standard-basic"
              label="year"
              variant="standard"
            />
            <TextField
              value={attendance}
              onChange={(em) => setAttendance(em.target.value)}
              id="standard-basic"
              label="attendance"
              variant="standard"
            />
            <Button onClick={addStudent} variant="outlined">
              Add Student
            </Button>
            {sadded}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
