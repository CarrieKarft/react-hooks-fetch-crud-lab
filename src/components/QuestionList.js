import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ onDeletedQuestion, questions, onAnswerUpdate }) {
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //   .then(r => r.json())
  //   .then(qs => setQuestions(qs))
  // }, [])

  const questionMap = questions.map(question => {
    return <QuestionItem  key={question.id} question={question} onDeletedQuestion={onDeletedQuestion} onAnswerUpdate={onAnswerUpdate}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
