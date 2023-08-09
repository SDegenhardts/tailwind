'use client'

import { useState } from "react"
import { AddTask, tarefas} from "../sant/insert"

export default function Input(){

    const [task, setTask] = useState<tarefas>({
        id: 0,
        bol: false,
        descricao: ""
    })

    function handleSubmit (e:any){
        setTask({
          ...task,
          descricao: e.target.value
        })
      }

    return(
        <form className="mb-6 transition duration-300 ease-in-out  hover:bg-green-400 outline-none flex justify-center p-8 rounded-xl text-black bg-white text-[1.4em] ">
            <input onChange={handleSubmit} placeholder="Adicionar Tarefa" className="placeholder:text-black placeholder:hover:text-white bg-transparent outline-none"/>
            <button className="text-4xl hover:scale-125" type="submit" onClick={() => AddTask(task)} >+</button>            
        </form>

    )
}