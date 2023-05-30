import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState, useEffect } from "react";
import { Task, createTask, deleteTask, editTask, listsTasks } from "../services/tasks";

interface TodoContextInterface{
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
    createValue: string
    setCreateValue: Dispatch<SetStateAction<string>>
    handleCraeteNewTask(): Promise<void>
    handleChangeConcluded(task: Task): Promise<void>
    handleDeleteTask(task: Task): Promise<void>
}

const defaultValues: TodoContextInterface = {
    tasks: [],
    setTasks: () => {},
    createValue: "",
    setCreateValue: () => {},
    handleCraeteNewTask: async () => {},
    handleChangeConcluded: async () => {},
    handleDeleteTask: async () => {}
}

const TodoContext = createContext<TodoContextInterface>(defaultValues)

export function useTodo(){
    return useContext(TodoContext)
}

interface Props{
    children: ReactNode
}

export const TodoProvider = ({children}: Props) => {
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
        <TodoContext.Provider value={{tasks, setTasks, createValue, setCreateValue, handleCraeteNewTask, handleChangeConcluded, handleDeleteTask}}>
            {children}
        </TodoContext.Provider>
    )
}