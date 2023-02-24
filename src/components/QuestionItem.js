import React from "react";

function QuestionItem({ question, onDeletedQuestion, onAnswerUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function clickHandler() {
    
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeletedQuestion(question))

  }

  function changeHandler(e) {
    const correctIndexObj = {
      "correctIndex": parseInt(e.target.value),
    }
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correctIndexObj)
    })
    .then(r => r.json())
    .then(updatedQ => onAnswerUpdate(updatedQ))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeHandler}>{options}</select>
      </label>
      <button onClick={clickHandler}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
