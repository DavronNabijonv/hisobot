import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./index.scss";
import { CiCirclePlus } from "react-icons/ci";
const axios = require("axios");

export default function Asosiy_Search() {
  return (
    <div>
      <div className="searchPart">
        <p className="srch_p">+Добавить</p>
        <p className="srch_rsp">
          <CiCirclePlus />
        </p>
        <form>
          <input type="text" placeholder="Ma'lumot..." className="srch" />
          <button className="srchbtn">
            <IoSearch />
          </button>
        </form>
        <div className="img"></div>
      </div>
      <div>
        <Rersult_Search/>
      </div>
    </div>
  );
}

function Rersult_Search() {
  const [ftch, setFtch] = useState();
  useEffect(() => {
    axios("http://localhost:3001/data/TDcenter/student").then((res) =>
      setFtch(res)
    );
  }, []);
  return (
    <div>
      {ftch.map((r, index) => (
        <div>
          <p>{r.id}</p>
          <p>{r.student_name}</p>
          <p>{r.guruh}</p>
          <p>{r.filial}</p>
          <p>{r.yonalish}</p>
          <p>{r.status}</p>
        </div>
      ))}
    </div>
  );
}
