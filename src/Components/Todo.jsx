import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";
import Header from "./Header.jsx";
export default function Todo() {
    const [toDos, setToDos] = useState([]);
  return (
    <div>
        <Header/>
        <Form key = {toDos} toDos={toDos} setToDos={setToDos}/>
        <TodoList key={toDos+1} toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}
