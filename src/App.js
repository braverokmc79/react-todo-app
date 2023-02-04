import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg ">
        <div className="flex justify-between mb-3">
          <h1 className="justify-center text-2xl font-bold text-center">할일 목록</h1>
        </div>

        <Form setTodoData={setTodoData} />

        <List todoData={todoData} setTodoData={setTodoData} />

      </div>
    </div >
  )
}