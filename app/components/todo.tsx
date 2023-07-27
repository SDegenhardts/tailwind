import sql from "../db";
import Button from "./button";
import Incheck from "./incheck";
import { useState } from "react";

export default function Divtodo() {

    const [todolist, setTodolist] = useState([])
    async function returnTodoList() {
    }
    const Todo = async () => {
        await sql`select bol, descricao from todolist`
    }  
    return (
        <div className="bg-white hover:bg-green-400 transition duration-300 ease-in-out  flex justify-center outline-3 p-[2em] text-[1.5em] text-left w-120 rounded-xl  ">
            <ul>
                {
                
                Todo.map((p) => (
                    <li key={p.id} className='text-black'>
                        {p.bol} <Incheck /> -{p.descricao}
                    </li>
                ))}
                <Button />
            </ul>
        </div>
    )
}


{/* <div className="bg-white hover:bg-green-400 transition duration-300 ease-in-out  flex justify-center outline-3 p-[2em] text-[1.5em] text-left w-120 rounded-xl  ">
<ul>
    {Todo.map((p) => (
        <li key={p.id} className='text-black'>
            {p.bol} <Incheck /> -{p.descricao}
        </li>
    ))}
    <Button />
</ul>
</div> */}