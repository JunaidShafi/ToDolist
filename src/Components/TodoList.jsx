import styles from "./todolist.module.css"
import Todoitem from "./Todoitem.jsx";

export default function TodoList({toDos,setToDos}) {

    return    <div className={styles.todolist}>
        {toDos.map((num) => (
            <Todoitem  setToDos={setToDos} todos= {toDos} key={num} item={num}/>

        ))}
    </div>
}