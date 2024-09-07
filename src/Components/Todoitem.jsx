import styles from './todoitem.module.css';
export default function Todoitem({ item }) {
  return (
    <>
      <li className={styles.listitem}>{item}</li>
    </>
  );
}
