import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(qs => setQuestions(qs))
  }, [])

  function questionAddHnadler(newQ) {
    console.log(newQ)
    const updatedQuestions = [...questions, newQ]
    setQuestions(updatedQuestions)
  }

  function handleQuestionDelete(deletedQuestion) {
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
    console.log(deletedQuestion)
  }

  function handleAnswerUpdate(updatedQ) {
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQ.id) {
        return updatedQ;
      } else { 
        return question
      }
    })
    setQuestions(updatedQuestions);
    
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={questionAddHnadler}/> : <QuestionList questions={questions} setQuestions={setQuestions} onDeletedQuestion={handleQuestionDelete} onAnswerUpdate={handleAnswerUpdate}/>}
    </main>
  );
}

export default App;
