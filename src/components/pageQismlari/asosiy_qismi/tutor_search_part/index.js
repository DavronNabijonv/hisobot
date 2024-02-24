import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios"; // Import axios directly
import "../../../../mainstyles/index.scss";
import "./index.scss";
import { Tutor_add } from "../../../medol_part/medol_part";
import { CiEdit } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi";

export default function Tutor_Search() {
  const [add_s, setAdd_s] = useState(false);
  return (
    <div>
      {add_s && (
        <Tutor_add
          close_medol={() => {
            setAdd_s(false);
          }}
        />
      )}
      <div className="searchPart">
        <p
          className="srch_p"
          onClick={() => {
            setAdd_s(!add_s);
          }}
        >
          +Добавить
        </p>
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
      .get("http://localhost:2002/data/TDcenter/tutor")
      .then((response) => {
        setData(response.data.data); // Access response data from the 'data' property
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message); // Implement error handling
      });
  }, []);

  return (
    <div className="ftch_grp">
      {data.length > 0 ? (
        data.map((r, index) => (
          <div key={index} className="f_grp">
            <div className="f_grp_name">
              <p>{r.id}.</p>
              <p>{r.tutor_name}</p>
            </div>
            <p>{r.yonalish}</p>
            <p>{r.status}</p>
            <div className="f_grp_edit">
              <button>
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
