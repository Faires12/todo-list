import axios, {AxiosError} from "axios";

function getInstance(){
    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function get(url: string): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        if(error instanceof AxiosError)
            throw error.response   
        throw error     
    }
}

export async function post(url: string, data: any): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.post(url, data)
        return res.data
    } catch (error) {
        if(error instanceof AxiosError)
            throw error.response   
        throw error     
    }
}

export async function put(url: string, data: any): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.put(url, data)
        return res.data
    } catch (error) {
        if(error instanceof AxiosError)
            throw error.response   
        throw error     
    }
}

export async function del(url: string): Promise<any>{
    try {
        const axios = getInstance()
        const res = await axios.delete(url)
        return res.data
    } catch (error) {
        if(error instanceof AxiosError)
            throw error.response   
        throw error     
    }
}