import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="nav" style={open ? { background: "rgb(68, 1, 77)",borderRadius:"0",height:"100%",width:"50vw" } : {}}>
        <div className="icon" onClick={()=>{setOpen(!open)}}>
          <LuMenuSquare />
        </div>
        <div className={`${open?"resp":"responsive"}`}>
          <div className="nav_f1">
            <NavLink to={"/asosiy"} onClick={()=>{setOpen(false)}}>Главнaя</NavLink>
            <NavLink to={"/tutors"} onClick={()=>{setOpen(false)}}>Pепетиторы</NavLink>
            <NavLink to={"/filial"} onClick={()=>{setOpen(false)}}>Ветви</NavLink>
            <NavLink to={"/analitika"} onClick={()=>{setOpen(false)}}>Aналитика</NavLink>
          </div>
          <div className="nav_f2">
            <NavLink to={"/qollash"} onClick={()=>{setOpen(false)}}>Поддерживать</NavLink>
            <NavLink to={"/nastroyka"} onClick={()=>{setOpen(false)}}>Настройки</NavLink>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={()=>{setOpen(false)}} style={open?{height:"100%",position:"absolute",width:"100%",zIndex:"2"}:{}}></div>
    </div>
  );
}
