import { useEffect, useState } from 'react'
import { CreateButton } from '../../components/CreateButton'
import { SearchBar } from '../../components/SearchBar'
import { TaskCard } from '../../components/Task'
import { TaskCount } from '../../components/TaskCount'
import { Task, createTask, deleteTask, editTask, listsTasks } from '../../services/tasks'
import styles from './styles.module.css'
import { NoTasks } from '../../components/NoTasks'
import { useTodo } from '../../context/todo-context'

export const List = () => {
    const {tasks, setTasks, createValue, setCreateValue, handleCraeteNewTask, handleChangeConcluded, handleDeleteTask} 
    = useTodo()

    return(
        <>
            <div className={styles.header}>
                <img src="/logo.png" alt="" />
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.searchDiv}>
                        <SearchBar value={createValue} changeValue={setCreateValue}/>
                        <CreateButton click={handleCraeteNewTask}/>
                    </div>
                    <TaskCount totalTasks={tasks.length} concludedTasks={tasks.filter(t => t.concluded).length}/>
                    <div className={styles.taskDiv}>
                        {
                            tasks.length ? tasks.map((task: Task) => 
                                <TaskCard task={task} handleChangeConcluded={handleChangeConcluded}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            ) :
                            <NoTasks/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}