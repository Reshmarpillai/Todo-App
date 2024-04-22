import styles from "./css/footer.module.css";

export default function Footer({ itemCompleted, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total todo list : {totalTodos}</span>
      <span className={styles.item}>Completed todo list : {itemCompleted}</span>
    </div>
  );
}
