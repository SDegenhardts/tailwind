import { useEffect, useState } from "react"

import {AiFillEdit} from "react-icons/ai"

import Header from "./header"
import Input from "./input"
import Incheck from "./incheck"
import Button from "./button"
import sql from "../db"
import Edit from "./edit"

export default async function TodoList() {
    // const [todos, setTodos] = useState()

    // const getTodos = async () => {
    //     const query = await sql`select * from todolist`
    //     setTodos(query)
    // }

    // useEffect(() => {
    // }, [])
    const Todo = await sql`select * from todolist`
    
    return (
        <section className='mb-5 mt-2 bg-blacktext-white min-w-max min-h-screen justify-center flex text-center items-center flex-col text-white'>
            <Header />
            <Input />
            <div className="bg-white w-2/6 break-words hover:bg-green-400 transition duration-300 ease-in-out  flex justify-center outline-3 p-[2em] text-[1.5em] text-left w-120 rounded-xl  ">
                <ul className="w-full">
                    {Todo.map((p) => (
                        <li key={p.id} className='flex flex-row items-center text-black'>
                            {p.bol} <Incheck /> <Edit/> -{p.descricao} 
                        </li>
                    ))}
                    <Button />
                </ul>
            </div>
        </section>

    )
}
