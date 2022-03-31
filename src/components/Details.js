import React from "react";
import { useState } from "react";
import img from "../assets/people.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  const state = location.state;
  const [value, setValue] = useState([]);

  React.useEffect(() => {
    fetch("tutors.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      {value
        .filter((val) => {
          console.log(val, state);
          if (val.id === state) {
            console.log("hello");
            return val;
          }
        })
        .map((data) => (
          <div>
            <img className="rounded-circle center" src={img} />
            <h1 className="name">{data.name}</h1>
            <h2 className="about">{data.about_me}</h2>
            <p className="title">Expertise:{data.expertise}</p>
            <p className="yrs">Years of Experience: {data.experience}</p>
            <Link to="/Home">
              <button type="button" className="btn btn-outline-primary">
                Back
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Details;
