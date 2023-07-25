import { todo } from "node:test"
import sql from "./db.js"
import postgres from "./db.js"

export default async function Home() {

  const Todo = await sql `select bol, descricao from todolist`


  return (

    <section className='bg-blacktext-white w-[100vw]min-h-screen justify-center flex text-center flex-col'>
      <h1 className='hover:text-green-400 text-[25em] hover:text-[13em]'>
        Hello 
      </h1>
      <ul>
        {Todo.map((p)=> (
          <li key={p.id}>
            {p.bol} - {p.descricao}
          </li>
        ))}
      </ul>
    </section>
  )
}
