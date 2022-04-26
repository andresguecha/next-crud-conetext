import {useTasks} from '../context/taskContext'
import Layout from '../components/Layout'
import {useState} from 'react'
import {useRouter} from 'next/router'


const TaskFormPage = () => {
    
    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const {createTask} = useTasks()
    const {push} = useRouter()

    const handleChange = (e) => {
        const {name, value} = e.target
        setTask({...task,[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(task.title, task.description)
        push('/')
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <h1>Add a task</h1>
                <input 
                    className="bg-gray-800 focus:text-gray-100 focus.outline-none w-full py-3 px -4 mb-5" 
                    name="title"
                    type="text" 
                    placeholder="Write a Title"
                    onChange={handleChange}
                />
                <textarea 
                    className="bg-gray-800 focus:text-gray-100 focus.outline-none w-full py-3 px -4 mb-5"
                    rows="2"
                    placeholder="White deescription"
                    name="description"
                    onChange={handleChange}
                />

                <button 
                    className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" 
                    disabled={!task.title}>
                        save
                </button>
            </form>
        </Layout>
    )
}

export default TaskFormPage