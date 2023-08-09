'use client'

import { UpdateTask, tarefas } from "../sant/update"
import { useState } from "react"

export default function Incheck(){

    const [task, setTask] = useState<tarefas>({
        id: 0,
        bol: false,
        descricao: ""
    })

    function handleSubmit (e:any){
        setTask({
          ...task,
          bol: e.target.value
        })
      }

    return(
        <input onClick={() => UpdateTask()} type="checkbox" className="w-[0.8em] h-[0.8em] accent-black hover:accent-white transition duration-300 ease-in-out "/>
       
    )
}