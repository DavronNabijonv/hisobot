import React, { useState } from "react";
import "./index.scss";
import tlimg from "../../../../assets/images/top-left-img.png";
import bg from "../../../../assets/images/bg-explosion.png";
import logo from "../../../../assets/images/hisobotimg.png";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import Asosiy from "../../../../pages/asosiy";

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
      {tog2 && <Admin check_data={"signup"} />}
      {tog3 && <Rahbar check_boss={"signup"} />}
    </div>
  );
}

function Admin({ check_data }) {
  const [adminData, setAdminData] = useState({
    markaz_name: "",
    admin_name: "",
    parol: "",
  });
  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData, // Fixed typo: changed 'formData' to 'bossData'
      [name]: value,
    });
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (check_data === "signup") {
      try {
        await axios.post(
          `http://localhost:2002/data/TDcenter/admin`,
          adminData
        );
        // Handle success, maybe show a message to the user
        console.log("Data successfully added!");
        Navigate("/asosiy");
      } catch (error) {
        // Handle error, maybe show an error message to the user
        console.error("Error adding data:", error, adminData);
      }
    } else {
      try {
        await axios.post(
          `http://localhost:2002/data/TDcenter/admin/${adminData.admin_name}`
        );
        // Handle success, maybe show a message to the user
        console.log("Data successfully added!");
        Navigate("/asosiy");
      } catch (error) {
        // Handle error, maybe show an error message to the user
        console.error("Error:", error, adminData);
      }
    }
  };
  return (
    <form className="admin">
      <input
        type="text"
        name="markaz_name"
        value={adminData.markaz_name}
        onChange={handleAdminChange}
        placeholder="Ta`lim markazini kiriting"
      />
      <input
        type="text"
        name="admin_name"
        value={adminData.admin_name}
        onChange={handleAdminChange}
        placeholder="Ism Familyangiz"
      />
      <input
        type="password"
        name="parol"
        value={adminData.parol}
        onChange={handleAdminChange}
        placeholder="Parolingizni kiriting"
      />
      <NavLink to={"/asosiy"}>
        <button type="submit" className="loginbtn" onClick={handleAdminSubmit}>
          Log in
        </button>
      </NavLink>
    </form>
  );
}

function Rahbar(chack_boss) {
  const [bossData, setBossData] = useState({
    markaz_name: "",
    ism: "",
    tel: "",
    hudud: "",
  });

  const handleBossChange = (e) => {
    const { name, value } = e.target;
    setBossData({
      ...bossData, // Fixed typo: changed 'formData' to 'bossData'
      [name]: value,
    });
  };

  const handleBossSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (chack_boss === "signup") {
      try {
        await axios.post(`http://localhost:2002/data`, bossData);
        // Handle success, maybe show a message to the user
        console.log("Data successfully added!");
        Navigate("/asosiy");
      } catch (error) {
        // Handle error, maybe show an error message to the user
        console.error("Error adding data:", error, bossData);
      }
    } else {
      try {
        await axios.post(`http://localhost:2002/data/${bossData.markaz_name}`);
        // Handle success, maybe show a message to the user
        console.log("Data successfully added!");
        Navigate("/asosiy");
      } catch (error) {
        // Handle error, maybe show an error message to the user
        console.error("Error:", error, bossData);
      }
    }
  };

  return (
    <form className="rahbar" onSubmit={handleBossSubmit}>
      <input
        type="text"
        name="markaz_name"
        value={bossData.markaz_name}
        onChange={handleBossChange}
        className="r_input"
        placeholder="Ismingiz"
      />
      <input
        type="text"
        name="ism"
        value={bossData.ism}
        onChange={handleBossChange}
        className="r_input"
        placeholder="Famiilyangiz"
      />
      <input
        type="text"
        name="tel"
        value={bossData.tel}
        onChange={handleBossChange}
        className="r_input"
        placeholder="Tel-raqam"
      />
      <select
        name="hudud"
        value={bossData.hudud}
        onChange={handleBossChange}
        className="r_input"
      >
        <option disabled selected className="hudud">
          Hududlar
        </option>
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
