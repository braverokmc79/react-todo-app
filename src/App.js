import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {

  const [todoData, setTodoData] = useState([]);

  return (
    <div className="container" >
      <div className="todoBlock">
        <div className="text-3xl  py-6 font-bold underline">
          <h1>할일 목록</h1>
        </div>

        <Form setTodoData={setTodoData} />

        <List todoData={todoData} setTodoData={setTodoData} />

      </div>
    </div >
  )

}