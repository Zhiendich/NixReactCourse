import { useState, useEffect } from 'react'
import { useAppSelector } from '../hooks/UseTypeSelected'
import ToDo from './ToDo'
import ToDoForm from './AddForm'
import ChangeForm from './ChangeForm'
import { ToDoItemProps } from '../types/ToDoItemsList'

const ToDoMenu = () => {
    const todos = useAppSelector((state) => state.todos);
    const [todoList, setTodoList] = useState<ToDoItemProps[]>([])
    const [add, setAdd] = useState(false)
    const [change, setChange] = useState(false)
    const [currentId, setCurrnetId] = useState('')
    const [status, setStatus] = useState('All')
    const [checkBox, setCheckBox] = useState(true)
    useEffect(() => {
        setTodoList([...todos])
    }, [todos])
    const sortTodos = () => {
        setCheckBox(!checkBox)
        if (checkBox) {
            setTodoList(todoList.sort((a, b) => Date.parse(b.createDate) - Date.parse(a.createDate)))
        }
        else {
            setTodoList([...todos])
        }
    }
    const filterTodos = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)
    }
    return (
        <div className='max-w-[1200px] w-full min-h-[400px] bg-white rounded-2xl p-4 relative'>
            <div className='flex mb-5'>
                <button onClick={() => setAdd(!add)} className='rounded-xl bg-[#2261CB] text-white w-full h-[50px]'>Add new todo</button>
            </div>
            {status === 'All' && todoList.map(todo =>
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    status={todo.status}
                    title={todo.title}
                    createDate={todo.createDate}
                    change={change}
                    setChange={setChange}
                    setCurrentId={setCurrnetId}
                />)}
            {status === 'Open' && todoList.filter(todo => todo.status === 'Open').map(todo =>
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    status={todo.status}
                    title={todo.title}
                    createDate={todo.createDate}
                    change={change}
                    setChange={setChange}
                    setCurrentId={setCurrnetId}
                />)}
            {status === 'In Progress' && todoList.filter(todo => todo.status === 'In Progress').map(todo =>
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    status={todo.status}
                    title={todo.title}
                    createDate={todo.createDate}
                    change={change}
                    setChange={setChange}
                    setCurrentId={setCurrnetId}
                />)}
            {status === 'Done' && todoList.filter(todo => todo.status === 'Done').map(todo =>
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    status={todo.status}
                    title={todo.title}
                    createDate={todo.createDate}
                    change={change}
                    setChange={setChange}
                    setCurrentId={setCurrnetId}
                />)}
            <div className='mb-[40px]'></div>
            {todos.length === 0 && <h1 className='text-center text-[bold] text-[40px]'>Пора записать новые дела!</h1>}
            <div className='absolute bottom-[10px] flex justify-between w-[90%]'>
                <select value={status} onChange={filterTodos} className='border-[#2261CB] border-[2px] rounded-xl outline-none p-1 mt-3 inline-block align-bottom'>
                    <option >All</option>
                    <option >Open</option>
                    <option >In Progress</option>
                    <option >Done</option>
                </select>
                <div className='flex items-center'>
                    <h1 className='text-[18px]'>Sort by time</h1>
                    <input checked={!checkBox} onChange={sortTodos} className='mt-1 ml-2' type="checkbox" name="" id="" />
                </div>
            </div>
            {add ? <ToDoForm todos={todos} add={add} setAdd={setAdd} /> : null}
            {change ? <ChangeForm currentId={currentId} change={change} setChange={setChange} /> : null}
        </div>
    )
}

export default ToDoMenu