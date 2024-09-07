import styles from "./todolist.module.css"
import Todoitem from "./Todoitem.jsx";

export default function TodoList({toDos}) {
    return    <ul className={styles.todolist}>
        {toDos.map((num) => (
            <Todoitem key={num} item={num}/>
        ))}
    </ul>
}