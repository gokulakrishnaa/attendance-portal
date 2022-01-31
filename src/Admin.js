import "./Admin.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useHistory } from "react-router-dom";

export function Admin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminLogin = () => {
    const credentials = {
      email,
      password,
    };

    fetch("https://nodeurlapp.herokuapp.com/api/admin/adminlogin", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Login Successful") {
          history.push("/adminpage");
        } else {
          history.push("/error");
        }
      });
  };
  return (
    <div className="admin">
      <div className="login-container">
        <MdOutlineAdminPanelSettings size="40px" color="darkslategrey" />
        <h3>Admin Login</h3>
        <div className="login-credentials">
          <TextField
            value={email}
            onChange={(em) => setEmail(em.target.value)}
            id="standard-basic"
            label="Email Id"
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Button onClick={adminLogin} variant="outlined">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
