import styles from './styles.module.css'

interface Props{
  totalTasks: number
  concludedTasks: number
}

export const TaskCount = ({totalTasks, concludedTasks}: Props) => {
  return (
    <div className={styles.main}>
        <div className={styles.tasksCraeted}>
            <p className={styles.tasksCreatedText}>Tarefas criadas</p>
            <div className={styles.infoBox}>{totalTasks}</div>
        </div>
        <div className={styles.tasksConcluded}>
            <p className={styles.tasksConcludedText}>Tarefas concluidas</p>
            <div className={styles.infoBox}>{concludedTasks}{totalTasks > 0 && ` de ${totalTasks}`}</div>
        </div>
    </div>
  )
}
