import { del, get, post, put } from "./generic"

export interface Task{
    id: number
    content: string
    concluded: boolean
}

export interface CreateTask{
    content: string
    concluded: boolean
}

export interface EditTask{
    id: number
    concluded: boolean
    content: string
}

export function listsTasks(): Promise<Task[]>{
    return get('tasks')
}

export function createTask(data: CreateTask): Promise<Task>{
    return post('tasks', data)
}

export function editTask(data: EditTask): Promise<Task>{
    return put(`tasks/${data.id}`, {
        concluded: data.concluded,
        content: data.content
    })
}

export function deleteTask(id: number): Promise<void>{
    return del(`tasks/${id}`)
}