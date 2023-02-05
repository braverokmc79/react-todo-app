import React, { useState, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App() {
  console.log("App :");

  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "공부하기",
      complete: false
    },
    {
      id: 2,
      title: "청소하기",
      complete: true
    },

  ]);

  const handleRemoveClick = useCallback(() => {
    setTodoData([]);
  }, [setTodoData]);


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg ">
        <div className="flex justify-between mb-3">
          <h1 className="justify-center text-2xl font-bold text-center">
            할일 목록
          </h1>
          <button onClick={handleRemoveClick} >Delete All</button>
        </div>

        <Form setTodoData={setTodoData} />

        <Lists todoData={todoData} setTodoData={setTodoData} />

      </div>
    </div >
  )
}