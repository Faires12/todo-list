import styles from './styles.module.css'

export const NoTasks = () => {
    return(
        <div className={styles.main}>
            <img src="/clipboard.svg" alt="" />
            <p className={styles.textBold}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.text}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}