import {AiFillPlusCircle} from 'react-icons/ai'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useTasks} from '../context/taskContext'


const Layout = ({children}) => {
    const router = useRouter()
    const {tasks} = useTasks()

    return (
        <div className='h-screen bg-gray-900 text-white zc'>
            <header className='flex items-center bg-gray-600  px-28 py-5'>
                <Link href='/'>
                    <a>
                    <h1 className='font-black text-lg'>task app</h1>
                    </a>
                </Link>

                <span className='ml-2 text-gray-400 font-bolkd '>
                    {tasks.length} tareas
                </span>

                <div className='flex-grow text-right'>
                    <button className='bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm inline-flex items-center'
                    onClick={() => router.push('/new')}>
                        <AiFillPlusCircle className="mr-2"/>
                        add task</button>
                </div>
            </header>

            <main className='px-28 '>
                {children}
            </main>


        </div>
    )
}

export default Layout