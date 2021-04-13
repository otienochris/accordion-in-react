import React, { useState } from "react";
import "./App.css";

function Question({ question }) {
  const [show, setShow] = useState(false);
  const { title, info } = question;
  return (
    <>
      <div className="question">
        <div className="header-tab">
          <h5 className="title">{title}</h5>
          <button className="btn" onClick={() => setShow(!show)}>
            {show ? `-` : `+`}
          </button>
        </div>
        {show ? <p className="paragraph">{info}</p> : <></>}
      </div>
    </>
  );
}

export default Question;
