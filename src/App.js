import React, { Component } from "react";
import "./App.css";

export default class App extends Component {

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"

    }
  }

  state = {

    todoData:
      [{
        id: "1",
        title: "공부하기",
        completed: false,
      },
      {
        id: "2",
        title: "청소하기",
        completed: true
      }
      ],

    value: ""
  }


  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    console.log(" newTodoData : ", newTodoData);
    this.setState({ todoData: newTodoData });
  }

  handleChnage = (e) => {
    console.log(" e  :", e.target.value);
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    this.setState({ todoData: [...this.state.todoData, newTodoData], value: "" })
  }


  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    });

    this.setState({ todoData: newTodoData })
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할일을 입력 하세요."
              value={this.state.value}
              onChange={this.handleChnage}
            />

            <input
              type="submit"
              name="입력"
              className="btn"
              style={{ flex: '1' }}

            />
          </form>



          {this.state.todoData.map(data => {
            return (
              <div style={this.getStyle(data.completed)} key={data.id}>
                <input type="checkbox" defaultChecked={data.completed} onChange={() => this.handleCompleteChange(data.id)} />
                {data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
              </div>
            )
          })}

        </div>
      </div >
    )
  }
}