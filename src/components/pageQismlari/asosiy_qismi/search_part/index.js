import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios"; // Import axios directly

import "./index.scss";

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
        <ResultSearch /> {/* Corrected component name */}
      </div>
    </div>
  );
}

function ResultSearch() {
  // Corrected function name
  const [data, setData] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    axios
      .get("http://localhost:3001/data/TDcenter/student")
      .then((response) => {
        setData(response.data.data); // Access response data from the 'data' property
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message); // Implement error handling
      });
    console.log(data);
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((r, index) => (
          <div key={index}>
            <p>{r.id}</p>
            <p>{r.student_name}</p>
            <p>{r.guruh}</p>
            <p>{r.filial}</p>
            <p>{r.yonalish}</p>
            <p>{r.status}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
