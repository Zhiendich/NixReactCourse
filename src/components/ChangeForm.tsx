import React from 'react'
import { useAppDispatch } from '../hooks/UseTypeSelected'
import { changeToDo } from '../store/reducers/TodoReducer'

interface IChangeForm {
    change: boolean,
    setChange: React.Dispatch<React.SetStateAction<boolean>>,
    currentId: string

}
const ChangeForm = ({ change, setChange, currentId }: IChangeForm) => {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [status, setStatus] = React.useState('Open')
    const dispatch = useAppDispatch()
    const changeToDoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (title !== '' && description !== "") {
            const newToDo = {
                id: currentId,
                createDate: new Date().toLocaleString(),
                title,
                description,
                status,
            }
            dispatch(changeToDo(newToDo))
            setTitle('')
            setDescription('')
            setChange(!change)
        }
        else {
            alert('Заполните все поля !')
            return
        }

    }
    return (
        <div className='bg-[white]  z-10 fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
            <div className='h-[280px] flex flex-col justify-between relative'>
                <span onClick={() => setChange(!change)} className='exit' />
                <div>
                    <h1 className='mb-2'>Заголовок</h1>
                    <input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className='border-[#2261CB] border-[2px] rounded-xl outline-none p-3 w-full' type="text" />
                </div>
                <div>
                    <h1 className='mb-2'>Описание</h1>
                    <input value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} className='border-[#2261CB] border-[2px] rounded-xl outline-none p-3 w-full' type="text" />
                </div>
                <select value={status} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)} className='border-[#2261CB] border-[2px] rounded-xl outline-none p-1 mt-3'>
                    <option >Open</option>
                    <option >In Progress</option>
                    <option >Done</option>
                </select>
                <button onClick={changeToDoHandler} className='rounded-xl bg-[#2261CB] text-white w-full h-[50px] mt-3'>Change</button>
            </div>
        </div>
    )
}

export default ChangeForm