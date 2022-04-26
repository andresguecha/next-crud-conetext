import {useTasks} from '../context/taskContext'
import Layout from '../components/Layout'


const Home = () => {
    const {tasks} = useTasks()
    console.log(tasks)
    return (

        <Layout>
        <div className="flex justify-center">
            {tasks.length === 0 ?(
                    <h2>No tasks</h2>
                ) : (
                    <div className="w-7/10">
                        {tasks.map((task, i) => (
                        <div key={task.title} className="bg-gray-700 hover:bg-gray-600 flex justify-between crusor-pointer px-20 py-5 m-2">
                            <spam>{i}</spam>
                            <div>
                                <h1 className ="font-bold">{task.title}</h1>
                                <p className="text-gray-300">{task.description}</p>
                                <spam className="text-gray-400">{task.id}</spam>
                            </div>
                        </div>
                        ))}
                    </div>
            )}
        </div>
        </Layout>
    )
}

export default Home