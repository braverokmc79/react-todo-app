import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleChnage = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData(prev => [...prev, newTodoData])
    setValue("");
  }

  return (
    <div className="container" >
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할일을 입력 하세요."
            value={value}
            onChange={handleChnage}
          />

          <input
            type="submit"
            name="입력"
            className="btn"
            style={{ flex: '1' }}

          />
        </form>


        <List todoData={todoData} setTodoData={setTodoData} />



      </div>
    </div >
  )


}