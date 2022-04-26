import {createContext, useContext, useState} from 'react'
import {v4 as uuid} from 'uuid'

export const TaskContext = createContext()

export const useTasks = () => useContext(TaskContext)


export const TasksProvider= ({ children }) => {
    const [tasks, setTasks] = useState([
        {id:'1', title:'task1',description:'task1 description'}
    ])

    const createTask = (title, description)=>{
        setTasks([...tasks,{title, description, id:uuid() }])
    }

    return(
        <TaskContext.Provider value={{ tasks, createTask }}> {children} </TaskContext.Provider>
    )
}