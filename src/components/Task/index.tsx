import { Task } from '../../services/tasks'
import styles from './styles.module.css'

interface Props{
  task: Task
  handleChangeConcluded(task: Task): void
  handleDeleteTask(task: Task): void
}

export const TaskCard = ({task, handleChangeConcluded, handleDeleteTask}: Props) => {
  return (
    <div className={styles.main}>
        <div className={styles.flexDiv}>
            <input type="checkbox" checked={task.concluded} onClick={() => handleChangeConcluded(task)}/>
            <p className={styles.text} style={{textDecoration: task.concluded ? 'line-through' : 'none',
          color: task.concluded ? '#808080' : '#F2F2F2'}}>{task.content}</p>
        </div>
        <div className={styles.trashDiv}>
            <img src="/trash.svg" className={styles.trashImg} onClick={() => handleDeleteTask(task)}/>
        </div>
    </div>
  )
}
