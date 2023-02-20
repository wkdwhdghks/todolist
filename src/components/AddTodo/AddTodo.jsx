import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return setText("");
    }
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
