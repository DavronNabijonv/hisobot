import React, { useState } from "react";
import "./medol_part.scss";
import axios from "axios";

export function Student_Add({ close_medol }) {
  const [formData, setFormData] = useState({
    student_name: "",
    guruh: "",
    filial: "",
    yonalish: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:2002/data/TDcenter/students", formData);
      // Handle success, maybe show a message to the user
      console.log("Data successfully added!");
      // Close the modal
      close_medol();
    } catch (error) {
      // Handle error, maybe show an error message to the user
      console.error("Error adding data:", error,formData);
    }
  };

  return (
    <div className="student_medol">
      <div className="get_info">
        <label>F. I. SH</label>
        <input
          type="text"
          name="student_name"
          placeholder="nimadur.."
          value={formData.student_name}
          onChange={handleChange}
        />
        <label>Guruh:</label>
        <input
          type="text"
          name="guruh"
          placeholder="nimadur.."
          value={formData.guruh}
          onChange={handleChange}
        />
        <label>Filial</label>
        <input
          type="text"
          name="filial"
          placeholder="nimadur.."
          value={formData.filial}
          onChange={handleChange}
        />
        <label>Yo`nalish</label>
        <input
          type="text"
          name="yonalish"
          placeholder="nimadur.."
          value={formData.yonalish}
          onChange={handleChange}
        />
        <label>Status</label>
        <input
          type="text"
          name="status"
          placeholder="nimadur.."
          value={formData.status}
          onChange={handleChange}
        />
        <div className="medol_btn_grp">
          <button className="chqsh" onClick={close_medol}>
            Chiqish
          </button>
          <button className="qsh" onClick={handleSubmit}>
            Qo`shish
          </button>
        </div>
      </div>
    </div>
  );
}

export function Filial_add(){
}

export function Tutor_add({close_medol}){
  const [formData, setFormData] = useState({
    tutor_name: "",
    yonalish: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:2002/data/TDcenter/tutor", formData);
      // Handle success, maybe show a message to the user
      console.log("Data successfully added!");
      // Close the modal
      close_medol();
    } catch (error) {
      // Handle error, maybe show an error message to the user
      console.error("Error adding data:", error,formData);
    }
  };

  return (
    <div className="student_medol">
      <div className="get_info">
        <label>F. I. SH</label>
        <input
          type="text"
          name="student_name"
          placeholder="nimadur.."
          value={formData.tutor_name}
          onChange={handleChange}
        />
        <label>Yo`nalish</label>
        <input
          type="text"
          name="yonalish"
          placeholder="nimadur.."
          value={formData.yonalish}
          onChange={handleChange}
        />
        <label>Status</label>
        <input
          type="text"
          name="status"
          placeholder="nimadur.."
          value={formData.status}
          onChange={handleChange}
        />
        <div className="medol_btn_grp">
          <button className="chqsh" onClick={close_medol}>
            Chiqish
          </button>
          <button className="qsh" onClick={handleSubmit}>
            Qo`shish
          </button>
        </div>
      </div>
    </div>
  );
}