import "./Home.css";
import { Teacher } from "./Teacher.js";
import { Student } from "./Student.js";
import { Admin } from "./Admin.js";

export function Home() {
  return (
    <div className="home">
      <img
        className="mainImg"
        src="https://www.pngall.com/wp-content/uploads/8/Business-Strategy-PNG-Clipart.png"
        alt=""
      />
      <div className="loginContainer">
        <Teacher />
        <Student />
        <Admin />
      </div>
    </div>
  );
}
