import styles from "./css/form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter your new task here"
          value={todo.name}
          onChange={(event) =>
            setTodo({ name: event.target.value, done: false })
          }
        />

        <button className={styles.modernButton}>+</button>
      </div>
    </form>
  );
}
