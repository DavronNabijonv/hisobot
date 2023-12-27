import React, { useState } from "react";
import "./index.scss";
import tlimg from "../../../../assets/images/top-left-img.png";
import bg from "../../../../assets/images/bg-explosion.png";
import logo from "../../../../assets/images/hisobotimg.png";
import { IoIosArrowDown } from "react-icons/io";
import {NavLink} from 'react-router-dom'

export default function Register() {
  const [rgs, setRgs] = useState(false);
  return (
    <div className="register">
      {/* <img src={tlimg} className="tlimg" /> */}
      <div className={`rgs_inputs ${rgs ? "sup" : "sin"}`}>
        {rgs ? (
          <Signup
            func={() => {
              setRgs(false);
            }}
          />
        ) : (
          <Signin
            func={() => {
              setRgs(true);
            }}
          />
        )}
      </div>
      {/* <p className="anm">
        InnaSight product
        <br />
        <span>Xisobot.uz</span>
      </p> */}
      {/* <img src={bg} className="bg" /> */}
    </div>
  );
}

function Signin(props) {
  const [tog1, setTog1] = useState("Kim sifatida kiryapsiz?");
  const [sel, setSel] = useState(false);
  const [tog2, setTog2] = useState(true);
  const [tog3, setTog3] = useState(false);
  return (
    <div className="signin">
      <img src={logo} className="logo" />
      <div className="toggle">
        <p>Ro`yhatdan o`tganmisiz?</p>
        <button onClick={props.func} className="signupga">
          Sign up
        </button>
      </div>
      <p
        className="drop"
        onClick={() => {
          setSel(!sel);
        }}
      >
        {tog1} <IoIosArrowDown />
      </p>
      <p
        className={` ${sel ? "open1" : "close"}`}
        onClick={() => {
          setTog1("Administrator");
          setTog2(true);
          setTog3(false);
          setSel(false);
        }}
      >
        Administrator
      </p>
      <p
        className={`${sel ? "open2" : "close"}`}
        onClick={() => {
          setTog1("Rahbar");
          setTog2(false);
          setTog3(true);
          setSel(false);
        }}
      >
        Rahbar
      </p>
      {tog2 && <Admin />}
      {tog3 && <Rahbar />}
    </div>
  );
}

function Signup(props) {
  const [tog1, setTog1] = useState("Kim sifatida kiryapsiz?");
  const [sel, setSel] = useState(false);
  const [tog2, setTog2] = useState(true);
  const [tog3, setTog3] = useState(false);
  return (
    <div className="signup">
      <img src={logo} className="logo" />
      <div className="toggle">
        <p>Akkauntdan kirish - </p>
        <button onClick={props.func} className="loginga">
          Sign in
        </button>
      </div>
      <p
        className="drop"
        onClick={() => {
          setSel(!sel);
        }}
      >
        {tog1} <IoIosArrowDown />
      </p>
      <p
        className={` ${sel ? "open1" : "close"}`}
        onClick={() => {
          setTog1("Administrator");
          setTog2(true);
          setTog3(false);
          setSel(false);
        }}
      >
        Administrator
      </p>
      <p
        className={`${sel ? "open2" : "close"}`}
        onClick={() => {
          setTog1("Rahbar");
          setTog2(false);
          setTog3(true);
          setSel(false);
        }}
      >
        Rahbar
      </p>
      {tog2 && <Admin />}
      {tog3 && <Rahbar />}
    </div>
  );
}

function Admin() {
  return (
    <form className="admin">
      <input type="text" placeholder="Ta`lim markazini kiriting" />
      <input type="text" placeholder="Ism Familyangiz" />
      <input type="password" placeholder="Parolingizni kiriting" />
      <NavLink to="/asosiy">
        <button type="submit" className="loginbtn">
          Log in
        </button>
      </NavLink>
    </form>
  );
}

function Rahbar() {
  return (
    <form className="rahbar">
      <input type="text" className="r_input" placeholder="Ismingiz" />
      <input type="text" className="r_input" placeholder="Famiilyangiz" />
      <input type="text" className="r_input" placeholder="Tel-raqam" />
      <select>
        <option className="hudud">Hududlar</option>
        <option>Namangan v</option>
        <option>Andijon v</option>
        <option>Farg`ona v</option>
        <option>Toshkent v</option>
        <option>Jizzax v</option>
        <option>Samarqand v</option>
        <option>Qashqadaryo v</option>
        <option>Surhandaryo v</option>
        <option>Xorazm v</option>
        <option>Buxoro v</option>
        <option>Guliston v</option>
        <option>Navoiy v</option>
        <option>Qoraqalpog`iston Res</option>
      </select>
      <NavLink to="/asosiy">
        <button type="submit" className="loginbtn">
          Log in
        </button>
      </NavLink>
    </form>
  );
}
