import React from "react";
import data from "./datas";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = React.useState(data);
  return (
    <>
      <div className="container">
        <h1>Questions and Answers</h1>
       
        {questions.map((qus) => {
          return <Questions key={qus.id} {...qus} />;
        })}
      </div>
    </>
  );
}
export default App;
