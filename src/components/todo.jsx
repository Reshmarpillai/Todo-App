import { useState } from "react";

import Form from "./form";
import Todolist from "./Todolist";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const itemCompleted = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer itemCompleted={itemCompleted} totalTodos={totalTodos} />
    </div>
  );
}
