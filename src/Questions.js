import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function Questions() {
  const [question, setQuestion] = useState(data);
  return (
    <>
      {data.map((question) => {
        return <Question className="question-tab" question={question} key={question.id} />;
      })}
    </>
  );
}

export default Questions;
