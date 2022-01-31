import "./App.css";
import { Home } from "./Home.js";
import { Route, Switch, Link } from "react-router-dom";
import { TeacherPage } from "./TeacherPage.js";
import { StudentPage } from "./StudentPage.js";
import { AdminPage } from "./AdminPage.js";
import { Error } from "./Error.js";

function App() {
  return (
    <div className="App">
      <div className="home-header">
        <Link to="/">
          <img
            className="aplogo"
            src="https://cdn-icons-png.flaticon.com/512/3589/3589030.png"
            alt=""
          />
        </Link>
        <span className="title">Attendance Management System</span>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/teacherpage">
          <TeacherPage />
        </Route>
        <Route path="/studentpage/:email">
          <StudentPage />
        </Route>
        <Route path="/adminpage">
          <AdminPage />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
