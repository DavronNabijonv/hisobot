import React, { useState } from "react";
import "./index.scss";
import tlimg from "../../../../assets/images/top-left-img.png";
import bg from "../../../../assets/images/bg-explosion.png";
import logo from "../../../../assets/images/hisobotimg.png";
import AnimatedLetters from "./animatedLetter";

export default function Register() {
  const [rgs, setRgs] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "I",
    "n",
    "n",
    "a",
    "S",
    "i",
    "g",
    "h",
    "t",
    "",
    "p",
    "r",
    "o",
    "d",
    "u",
    "c",
    "t",
  ];
  const jobArray = ["X", "i", "s", "o", "b", "o", "t"];
  return (
    <div className="register">
      <img src={tlimg} className="tlimg" />
      <div className="rgs_inputs">
        {rgs ? (
          <Signup
            func={() => {
              setRgs(false);
            }}
          />
        ) : (
          <Login
            func={() => {
              setRgs(true);
            }}
          />
        )}
      </div>
      <p className="anm">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={25}
        />
        <br/>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobArray}
          idx={15}
        />
      </p>
      <img src={bg} className="bg" />
    </div>
  );
}

function Login(props) {
  return (
    <div className="login">
      <img src={logo} className="logo" />
      <form>
        <input type="text" placeholder="Ta`lim markazini kiriting" />
        <input type="text" placeholder="Ism Familyangiz" />
        <input type="password" placeholder="Parolingizni kiriting" />
        <button type="submit" className="loginbtn">
          Log in
        </button>
      </form>
      <div className="toggle">
        <p>Ro`yhatdan o`tganmisiz?</p>
        <button onClick={props.func} className="signupga">
          Sign up
        </button>
      </div>
    </div>
  );
}

function Signup(props) {
  return (
    <div className="signup">
      <img src={logo} className="logo" />
      <form>
        <input type="text" placeholder="Ta`lim markazini kiriting" />
        <input type="text" placeholder="Ism Familyangiz" />
        <input type="password" placeholder="Parolingizni kiriting" />
        <button type="submit" className="signupbtn">
          Sign up
        </button>
      </form>
      <div className="toggle">
        <p>Akkauntingizdan kirish - </p>
        <button onClick={props.func} className="loginga">
          Log in
        </button>
      </div>
    </div>
  );
}
