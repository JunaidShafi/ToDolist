import styles from "./footer.module.css"
export default function Footer({toDos}){
     const net = toDos.filter((item) =>  item.status===true).length;



    return    <div className={styles.footer}> {`Completed ${net} items`}</div>
}
