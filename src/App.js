import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Section from "./Components/Section";
import "./App.css"

const AppTitle = "Mi Lista de Tareas";
const list = [
  { title: "test #1", completed: false },
];

export const App = () => {
  const [todoList, setTodoList] = useState(list);
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('http://127.0.0.1:3030/toDos/');
      const data = await response.json();
      setTodoList(data);
    }
    fetchData();
  },[]);

  const addTodo = (item) => {
    setTodoList((oldlist) => [...oldlist, item]);
  };
  const removeTodo = (id) => {
    setTodoList(oldList => {
      return oldList.filter(item => item.title !== id);
    });
  };



  return (
    <div className="ui container center aligned" id="main-container">
        <div className="title">
          <h1>{AppTitle}</h1>
        </div>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List removeTodoListProp={removeTodo} list={todoList} />
      </Section>

    </div>
  );
};

export default App
