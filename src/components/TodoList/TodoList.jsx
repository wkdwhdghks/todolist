import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "장보기", status: "active" },
    { id: "2", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDel = (itemId) => {
    setTodos(todos.filter((el) => el.id !== itemId));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox"></input>
            {item.text}
            <Button onDel={handleDel} itemId={item.id} />
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function Button({ onDel, itemId }) {
  const handleClick = () => {
    onDel(itemId);
  };
  return <button onClick={handleClick}>x</button>;
}
