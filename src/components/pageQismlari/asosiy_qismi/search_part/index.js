import React from "react";
import { IoSearch } from "react-icons/io5";
import "./index.scss"
import { CiCirclePlus } from "react-icons/ci";

export default function Asosiy_Search() {
  return (
  <div className="searchPart">
    <p className="srch_p">+Добавить</p>
    <p className="srch_rsp"><CiCirclePlus/></p>
    <form>
        <input type="text" placeholder="Ma'lumot..." className="srch"/>
        <button className="srchbtn"><IoSearch/></button>
    </form>
    <div className="img"></div>
  </div>
  )
}
