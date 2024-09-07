import {useState} from "react";
import styles from "./form.module.css"
export default function Form({toDos,setToDos}) {
    const [item, setItem] = useState("");
    function clickHandler(e) {
        e.preventDefault();
        setToDos([...toDos, item]);
        setItem("");
    }
    return  <form className={styles.todoform}>
        <div className={styles.inputcontainer}>
            <input className={styles.moderninput}
                   onChange={(e) => setItem(e.target.value)}
                   type="text" placeholder="Enter Todo Item"
                   value={item}
            />
            <button className={styles.modernbutton} onClick={(e) => clickHandler(e)}> Add</button>

        </div>
    </form>

}