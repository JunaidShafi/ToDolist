import { useState } from "react";
import Todoitem from "./Todoitem.jsx";
export default function Todo() {
  function clickHandler(e) {
    e.preventDefault();
    setToDos([...toDos, item]);
    console.log(toDos);
    setItem("");
  }
  const [item, setItem] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div>
      <form>
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          value={item}
        />
        <button onClick={(e) => clickHandler(e)}> Add</button>
      </form>
      <ul>
        {toDos.map((num) => (
          <Todoitem key={num} item={num} />
        ))}
      </ul>
    </div>
  );
}
