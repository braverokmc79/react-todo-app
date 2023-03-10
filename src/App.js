import React, { useState, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";
import styled from "styled-components";


const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
const Iframe = styled.iframe`
  width:1062px;
  height:auto;
  display: inline-block;
`;

export default function App() {


  const [todoData, setTodoData] = useState(initialTodoData);
  const handleRemoveClick = useCallback(() => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      setTodoData([]);
      localStorage.setItem("todoData", []);
    };
  }, [setTodoData]);


  return (
    <>
      <div className="flex justify-center bg-blue-100">
        <Iframe src="https://ads-partners.coupang.com/widgets.html?id=637991&template=carousel&trackingCode=AF2176654&subId=&width=680&height=140"
          frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></Iframe>
      </div>
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">

        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg ">
          <div className="flex justify-between mb-3">

            <h1 className="justify-center text-2xl font-bold text-center">
              할일 목록
            </h1>
            <button
              className='p-2 text-red-400 border-2 border-red-400 rounded
             hover:text-white hover:bg-red-400 hover:cursor-pointer'
              onClick={handleRemoveClick} >전체삭제</button>
          </div>

          <Form todoData={todoData} setTodoData={setTodoData} />

          <Lists todoData={todoData} setTodoData={setTodoData} />
        </div>
      </div >
    </>
  )
}