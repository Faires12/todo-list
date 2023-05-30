import { useEffect, useState } from 'react'
import { CreateButton } from '../../components/CreateButton'
import { SearchBar } from '../../components/SearchBar'
import { TaskCard } from '../../components/Task'
import { TaskCount } from '../../components/TaskCount'
import { Task, createTask, deleteTask, editTask, listsTasks } from '../../services/tasks'
import styles from './styles.module.css'
import { NoTasks } from '../../components/NoTasks'

export const List = () => {
    const [createValue, setCreateValue] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = async () => {
        try {
            const tasks = await listsTasks()
            setTasks(tasks)
        } catch (error) {
            
        }
    }

    const handleCraeteNewTask = async () => {
        if(!createValue) return

        try {
            const newTask = await createTask({
                content: createValue,
                concluded: false
            })
            const newTasks = [...tasks]
            newTasks.push(newTask)
            setTasks(newTasks)
            setCreateValue("")
        } catch (error) {
            
        }
    }

    const handleChangeConcluded = async (task: Task) => {
        try {
            const editedTask = await editTask({
                id: task.id,
                concluded: !task.concluded,
                content: task.content
            })
            const newTasks = [...tasks]
            const taskFound = newTasks.find(t => t.id === editedTask.id)
            if(taskFound) taskFound.concluded = editedTask.concluded
            setTasks(newTasks)
        } catch (error) {
            
        }
    }

    const handleDeleteTask = async (task: Task) => {
        try {
            await deleteTask(task.id)
            const newTasks = [...tasks]
            const index = newTasks.findIndex(t => t.id === task.id)
            newTasks.splice(index, 1)
            setTasks(newTasks)
        } catch (error) {
            
        }
    }

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