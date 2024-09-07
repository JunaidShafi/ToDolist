import styles from './todoitem.module.css';
export default function Todoitem({ item ,todos,setToDos}) {
    function handleDelete(item){
        setToDos(todos.filter((todo)=> todo !== item));
    }
    // function filterarr(todos){
    //     return todos != item
    // }

  return (
    <div>
        <li className={styles.listitem}>{item} <span>
            <button  onClick={()=>handleDelete(item)} className={styles.modernbutton}>x</button>
            </span></li>

    </div>
  );
}
