import {useState} from "react";
import styles from "./form.module.css"
export default function Form({toDos,setToDos}) {
    const [item, setItem] = useState({name:"",status:false});
    function clickHandler(e) {
        e.preventDefault();
        setToDos([...toDos, item.name]);
        setItem({name:"",status:false});
    }
    return  <form className={styles.todoform}>
        <div className={styles.inputcontainer}>
            <input className={styles.moderninput}
                   onChange={(e) => setItem({name:e.target.value, status:false})}
                   type="text" placeholder="Enter Todo Item"
                   value={item.name}
            />
            <button className={styles.modernbutton} onClick={(e) => clickHandler(e)}> Add</button>

        </div>
    </form>

}