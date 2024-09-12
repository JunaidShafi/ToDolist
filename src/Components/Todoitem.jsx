import styles from './todoitem.module.css';
export default function Todoitem({ item ,todos,setToDos}) {
    function handleDelete(item){
        console.log(item)
        setToDos(todos.filter((todo)=> todo !== item));
    }
    function handleDone(item){
       setToDos(todos.map((todo)=>  item === todo.name ? {...todo , status: !todo.status} : todo))

    }
    const className = item.status ? styles.completed: styles.listitem;

    // function filterarr(todos){
    //     return todos != item
    // }

  return (
    <div className={styles.test}>
            <div onClick={() => handleDone(item.name)} className={className} >{item.name}</div>
             <button onClick={() => handleDelete(item)} className={styles.modernbutton}>x</button>
    </div>
  );
}
